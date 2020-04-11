import * as ActionTypes from '../constants/actionTypes';
import { Dispatch, User, Error } from 'types';

export const initState = {
  user: {
    name: '',
    email: '',
  } as User,
  error: {} as Error,
};

export const reducer = (state = initState, action: Dispatch) => {
  switch (action.type) {
    //update fields
    case ActionTypes.USER_SIGN_UP_SUCCESS:
    case ActionTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        error: {},
        user: action.data,
      };
    case ActionTypes.USER_SIGN_UP_FAIL:
    case ActionTypes.USER_SIGN_IN_FAIL:
      return {
        ...state,
        error: action.data as Error,
        user: {
          name: '',
          email: '',
        } as User,
      };

    default:
      return state;
  }
};
