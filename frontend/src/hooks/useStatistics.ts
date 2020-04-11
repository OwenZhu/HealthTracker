import { useContext, useEffect } from 'react';
import { PageContext } from 'contexts/pageContext';
import { getStatistics as getStatisticsApi } from 'api';
import * as Types from 'constants/actionTypes';

export const useStatistics = () => {
  const { statistics } = useContext(PageContext);

  /** Get all when load the component */
  useEffect(() => {
    getStatistics();
  }, []);

  const getStatistics = () => {
    getStatisticsApi()
      .then(res => {
        statistics.dispatch({
          type: Types.GET_STATISTICS_SUCCESS,
          data: res.data,
        });
      })
      .catch(err => {
        console.error('Get country statistics error', { err });
      });
  };

  return {
    statistics: statistics.state,
  };
};
