import { DataAccess } from './utils-data-access';
import { Survey } from '../interfaces';
import * as uuidv4 from 'uuid/v4';
// import * as config from '../constant/config';

export class SurveyData extends DataAccess<Survey> {
  public static readonly ENV_TABLE_NAME = 'TABLE_NAME';

  /**
   * @constructor for SurveyData
   * @param tableName read from environment variable
   */
  constructor(tableName: string = process.env[SurveyData.ENV_TABLE_NAME]) {
    super(tableName);
  }

  /**
   * create new or override existing survey in the table
   * @param survey new survey to save to db
   * @param surveyId the id is constant because it only have one survey
   */
  public putSurvey(
    survey: Survey,
    surveyId: string = uuidv4(),
  ): Promise<Survey> {
    return this.put({
      surveyId,
      ...survey,
    });
  }

  public scanAll(): Promise<Survey[]> {
    return this.dc.scan({
      TableName: this.tableName,
    })
      .promise()
      .then(output => {
        console.log(`Scan succeeded ${output.Items.length} items find.`);
        return output.Items;
      })
      .catch(err => {
        console.log('Scan err', { err });
        return undefined;
      });
  }
}
