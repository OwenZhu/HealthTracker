import * as ActionTypes from '../constants/actionTypes';
import { Dispatch, Survey } from 'types';

export const initState = {
  form: {
    data: '',
    isWFH: true,
    hasSymptom: false,
    overseas: '',
    transportType: '',
    transportAddition: '',
  },
  submitted: false,
} as {
  form: Survey;
  submitted: boolean;
};

export const reducer = (state = initState, action: Dispatch) => {
  switch (action.type) {
    //update fields
    case ActionTypes.UPDATE_SURVEY_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.data,
        }
      };
    case ActionTypes.UPDATE_SURVEY_FORM: {
      return {
        ...state,
        form: action.data,
      };
    }
    case ActionTypes.POST_SUVERY_SUCCESS: {
      return {
        submitted: true,
        form: action.data,
      }
    }
    default:
      return state;
  }
};
