import React, { createContext } from 'react';
import { PageState } from '../types';
import * as authReducer from './authReducer';
import * as orgReducer from './orgReducer';
import * as statisticsReducer from './statisticsReducer';
import * as suveryReducer from './suveryReducer';

export const PageContext = createContext({} as PageState);

export const PageContextProvider = (props: any) => {
  const org = React.useReducer(orgReducer.reducer, orgReducer.initState);
  const statistics = React.useReducer(
    statisticsReducer.reducer,
    statisticsReducer.initState
  );
  const suvery = React.useReducer(
    suveryReducer.reducer,
    suveryReducer.initState
  );
  const auth = React.useReducer(authReducer.reducer, authReducer.initState);
  const state = {
    auth: { state: auth[0], dispatch: auth[1] },
    organisation: { state: org[0], dispatch: org[1] },
    statistics: { state: statistics[0], dispatch: statistics[1] },
    survey: { state: suvery[0], dispatch: suvery[1] },
  } as PageState;
  return (
    <PageContext.Provider value={state}>{props.children}</PageContext.Provider>
  );
};
