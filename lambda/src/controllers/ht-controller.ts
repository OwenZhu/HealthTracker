import axios from 'axios';
import { ApiCallback, ApiContext, ApiEvent, ApiHandler } from '../shared/api-interfaces';
import { ResponseBuilder } from '../shared/response-builder';
import { SurveyData } from '../data-access/survey-data';
import { CountryStatistic, OrgOverview, Survey, Analysis } from '../interfaces';

export class HealthTrackerController {
    public constructor(
        public surveyData: SurveyData = new SurveyData(),
    ) { }

    public getStatistics: ApiHandler = async (
        _: ApiEvent, __: ApiContext, callback: ApiCallback,
    ): Promise<void> => {
        const data = await axios({
            method: 'GET',
            url: 'https://datahub.io/core/covid-19/r/countries-aggregated.json',
        })
            .then(
                res => (res.data as Array<{
                    Confirmed: number;
                    Country: string;
                    Date: string;
                    Deaths: number;
                    Recovered: number;
                }>).filter(cs => cs.Country === 'Australia')
                    .map(cs => ({
                        confirmed: cs.Confirmed,
                        country: cs.Country,
                        date: cs.Date,
                        deaths: cs.Deaths,
                        recovered: cs.Recovered,
                    } as CountryStatistic)))
            .catch(err => {
                console.error('Error getStatistics', err);
            });
        ResponseBuilder.ok<any>(data, callback);
    }

    public postSurvey: ApiHandler = async (
        event: ApiEvent, __: ApiContext, callback: ApiCallback,
    ): Promise<void> => {
        const data = JSON.parse(event.body) as Survey;

        const analysis = await axios({
            method: 'POST',
            url: 'https://jy7v3zt7f4.execute-api.ap-southeast-2.amazonaws.com/sentiment-analysis',
            data: {
                text: data.data,
            },
        }).then(res => res.data)
            .catch(err => {
                console.error('post sentiment analysis:', err);
                return {};
            });

        this.surveyData.putSurvey({
            ...data,
            overseas: data.overseas.toUpperCase(),
            analysis,
        });
        ResponseBuilder.ok<any>(data, callback);
    }

    public getOrganisation: ApiHandler = async (
        _: ApiEvent, __: ApiContext, callback: ApiCallback,
    ): Promise<void> => {
        const allSurvey = await this.surveyData.scanAll();
        const validAnalysis = allSurvey.filter(survey => survey.analysis
            && (survey.analysis.positive || survey.analysis.negative || survey.analysis.neutral));

        const analysis = validAnalysis.reduce((result, survery) => {
            return {
                positive: (result.positive || 0)
                    + (survery.analysis.positive || 0) / validAnalysis.length,
                negative: (result.negative || 0)
                    + (survery.analysis.negative || 0) / validAnalysis.length,
                neutral: (result.neutral || 0)
                    + (survery.analysis.neutral || 0) / validAnalysis.length,
            } as Analysis;
        }, {} as Analysis);

        const wfhRate = allSurvey.length && allSurvey.filter(s => s.isWFH).length / allSurvey.length;
        const travel = allSurvey
            .filter(s => s.overseas)
            .reduce((result, s) => ({
                ...result,
                [s.overseas]: (result[s.overseas] || 0) + 1,
            }), {});

        const company = {
            positive: analysis.positive || 0,
            negative: analysis.negative || 0,
            neutral: analysis.neutral || 0,
            whfRate: allSurvey.length && wfhRate,
            overseas: Object.keys(travel).map(key => ({
              country: key,
              count: travel[key],
            })),
        } as OrgOverview;

        ResponseBuilder.ok<any>(company, callback);
    }
}
