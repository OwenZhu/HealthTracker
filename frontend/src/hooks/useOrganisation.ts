import { useContext, useEffect } from 'react';
import { PageContext } from 'contexts/pageContext';
import { getOrganisation as getOrganisationApi } from 'api';
import * as Types from 'constants/actionTypes';

export const useOrganisation = () => {
  const { organisation } = useContext(PageContext);

  /** Get latest data every 10 seconds */
  useEffect(() => {
    getOrganisation();
    setInterval(() => {
      getOrganisation();
    }, 10000);
  }, []);

  const getOrganisation = () => {
    getOrganisationApi()
      .then(res => {
        organisation.dispatch({
          type: Types.GET_ORG_OVERVIEW_SUCCESS,
          data: res.data,
        });
      })
      .catch(err => {
        console.error('Get org overview error', { err });
      });
  };

  return {
    organisation: organisation.state,
    getOrganisation,
  };
};
