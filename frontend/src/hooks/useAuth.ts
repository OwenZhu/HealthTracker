import { useContext } from 'react';
import { Auth } from 'aws-amplify';
import { PageContext } from 'contexts/pageContext';
import * as Types from 'constants/actionTypes';
import { User, Error } from 'types';

export const useAuth = () => {
  const { auth } = useContext(PageContext);

  const signUp = (data: User) => {
    Auth.signUp({
      username: data.email,
      password: data.password || '',
      attributes: {
        name: data.name,
        email: data.email,
      },
    })
      .then(() => {
        auth.dispatch({
          type: Types.USER_SIGN_UP_SUCCESS,
          data: {
            name: data.name,
            email: data.email,
          },
        });
      })
      .catch((err: any) => {
        auth.dispatch({
          type: Types.USER_SIGN_UP_FAIL,
          data: err,
        });
      });
  };

  const signIn = async (data: User) => {
    const { email: username, password } = data;
    try {
      const res = await Auth.signIn(username, password);
      auth.dispatch({
        type: Types.USER_SIGN_IN_SUCCESS,
        data: res.attributes,
      });
    } catch (err) {
      auth.dispatch({
        type: Types.USER_SIGN_IN_FAIL,
        data: err,
      });
    }
  };

  return {
    user: (auth.state.user as User),
    error: (auth.state.error as Error),
    signUp,
    signIn,
  };
};
