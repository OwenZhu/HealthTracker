import * as ActionTypes from '../constants/actionTypes';
import { Dispatch, CountryStatistic } from 'types';

export const initState = [] as CountryStatistic[];

export const reducer = (state = initState, action: Dispatch) => {
  switch (action.type) {
    //update fields
    case ActionTypes.GET_STATISTICS_SUCCESS:
      return action.data;
    default:
      return state;
  }
};
