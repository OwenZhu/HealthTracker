import { useContext } from 'react';
import { PageContext } from 'contexts/pageContext';
import { postSurvey as postSurveyApi } from 'api';
import { Survey, User } from 'types';
import * as Types from 'constants/actionTypes';
import { useOrganisation } from './useOrganisation';

export const useSurvey = () => {
  const { survey, auth } = useContext(PageContext);
  const user: User = auth.state.user;
  const { getOrganisation } = useOrganisation();

  const updateField = (data: Partial<Survey>) => {
    survey.dispatch({
      type: Types.UPDATE_SURVEY_FIELD,
      data,
    });
  };

  const updateForm = (data: Survey) => {
    survey.dispatch({
      type: Types.UPDATE_SURVEY_FORM,
      data,
    });
  };

  const postSurvey = () => {
    if (!user.name || !user.email) {
      console.error('Lack of user data,', user);
      return undefined;
    }
    const data = {
      ...survey.state,
      name: user.name,
      email: user.email,
    } as Survey;

    postSurveyApi(data)
      .then(res => {
        survey.dispatch({
          type: Types.POST_SUVERY_SUCCESS,
          data: res.data,
        });
        getOrganisation();
      })
      .catch(err => {
        console.error('Post survey error', { err, data });
      });
  };

  return {
    survey: survey.state.form,
    username: user.name,
    submitted: survey.state.submitted,
    updateField,
    updateForm,
    postSurvey,
  };
};
