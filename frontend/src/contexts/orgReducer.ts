import * as ActionTypes from '../constants/actionTypes';
import { Dispatch, OrgOverview } from 'types';

export const initState = {
    positive: 0,
    negative: 0,
    neutral: 0,
    whfRate: 0,
    overseas: [],
} as OrgOverview;

export const reducer = (state = initState, action: Dispatch) => {
  switch (action.type) {
    //update fields
    case ActionTypes.GET_ORG_OVERVIEW_SUCCESS:
      return action.data;
    default:
      return state;
  }
};
