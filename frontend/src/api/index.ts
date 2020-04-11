import axios, { AxiosResponse } from 'axios';
import {Survey, CountryStatistic, OrgOverview} from 'types';

const POST_SURVEY_URL = `${process.env.REACT_APP_HOST_URL}/survey`;
const GET_STATISTICS_URL = `${process.env.REACT_APP_HOST_URL}/au-statistics-overview`;
const GET_ORG_OVERVIEW_URL = `${process.env.REACT_APP_HOST_URL}/org-overview`;

export const postSurvey = (data: Survey): Promise<AxiosResponse<Survey>> => {
  return axios({
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    url: POST_SURVEY_URL,
    data
  });
};

export const getStatistics = () : Promise<AxiosResponse<CountryStatistic>> => {
  return axios({
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET',
    url: GET_STATISTICS_URL,
  });
};

export const getOrganisation = () : Promise<AxiosResponse<OrgOverview>> => {
  return axios({
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET',
    url: GET_ORG_OVERVIEW_URL,
  });
};

