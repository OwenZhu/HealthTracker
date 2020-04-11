import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {
  IMAGE_DIR,
  AUTH_PAGE_OPTIONS,
  RoutePath,
  ORG_NAMES,
} from 'constants/config';
import history from 'historyConfig';
import { User } from 'types';
import { useAuth } from 'hooks/useAuth';

interface AuthPageProps {
  location: { state: string };
}

const PageContainer = styled(Grid)`
  width: 100vw;
  height: 100vh;
  background: #fafbfe;
`;
const FormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 6rem;
`;
const Logo = styled.img`
  margin-bottom: 1rem;
`;
const TextInput = styled(TextField)`
  && {
    margin: 0.5rem 0;
  }
`;
const RadioContainer = styled(RadioGroup)`
  && {
    flex-direction: row;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
`;
const OrgMenu = styled(Select)`
  && {
    height: 56px;
    margin: 0.5rem 0;
  }
`;
const MenuPlaceholder = styled.p`
  color: #a0a0a0;
`;
const ContainedButton = styled(Button)`
  && {
    background: #3d59fa;
    color: #fff;
    width: 100%;
    height: 56px;
    margin: 1rem 0;
  }
`;
const EmptySpace = styled(Grid)`
  height: 10vh;
`;

const AuthPage: React.FC<AuthPageProps> = () => {
  const { signIn, signUp, error, user: userInfo } = useAuth();
  const [authOption, setAuthOption] = useState<string>(AUTH_PAGE_OPTIONS.LOGIN);
  const isLogin = authOption === AUTH_PAGE_OPTIONS.LOGIN;

  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    org: ORG_NAMES[0],
  });

  useEffect(() => {
    if (userInfo.name && !error.message) {
      history.push(RoutePath.dashboard);
    }
  }, [userInfo, error]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.id) {
      setUser({
        ...user,
        [event.target.id]: event.target.value,
      });
    }
  };

  const onChangeAuthOption = (option: string) => () => {
    setAuthOption(option);
  };

  const handleClickAuth = () => {
    if (isLogin) {
      signIn(user);
    } else {
      signUp(user);
    }
  };

  return (
    <PageContainer container justify="center" alignItems="center">
      <Grid item xs={8} md={6} lg={4}>
        <FormContainer>
          <Logo src={`${IMAGE_DIR}logo.svg`} alt="logo" />

          {/* TODO: add style */}
          {error.message}
          
          {!isLogin && (
            <TextInput
              id="name"
              onChange={onInputChange}
              placeholder="Enter Username"
              variant="outlined"
              fullWidth
            />
          )}

          <TextInput
            id="email"
            onChange={onInputChange}
            placeholder="Enter Email Address"
            variant="outlined"
            fullWidth
          />

          <TextInput
            id="password"
            onChange={onInputChange}
            placeholder="Enter Password"
            type="password"
            variant="outlined"
            fullWidth
          />

          {!isLogin && (
            <>
              <FormControl fullWidth>
                <RadioContainer
                  aria-label="orgType"
                  name="orgType1"
                  value="join"
                >
                  <FormControlLabel
                    value="join"
                    label="Join Organisation"
                    control={<Radio color="primary" />}
                  />
                  <FormControlLabel
                    value="create"
                    label="Create Organisation"
                    disabled={true}
                    control={<Radio color="primary" />}
                  />
                </RadioContainer>
              </FormControl>

              <OrgMenu
                value={user.org}
                variant="outlined"
                displayEmpty={true}
                inputProps={{
                  name: 'orgName',
                  id: 'orgNameInAuth',
                }}
                fullWidth
              >
                <MenuItem key="placeholder" value="">
                  <MenuPlaceholder>Select Organisation</MenuPlaceholder>
                </MenuItem>
                {ORG_NAMES.map((name, index) => (
                  <MenuItem key={index} value={name}>
                    <p>{name}</p>
                  </MenuItem>
                ))}
              </OrgMenu>
            </>
          )}

          {isLogin && (
            <>
              <ContainedButton variant="contained" onClick={handleClickAuth}>
                Log In
              </ContainedButton>
              <Link
                underline="always"
                variant="body2"
                onClick={onChangeAuthOption(AUTH_PAGE_OPTIONS.SIGNUP)}
              >
                Don't have an account? Sign up
              </Link>
            </>
          )}

          {!isLogin && (
            <>
              <ContainedButton variant="contained" onClick={handleClickAuth}>
                Sign Up
              </ContainedButton>
              <Link
                underline="always"
                variant="body2"
                onClick={onChangeAuthOption(AUTH_PAGE_OPTIONS.LOGIN)}
              >
                Already have an account? Log in
              </Link>
            </>
          )}
        </FormContainer>
      </Grid>
      <EmptySpace item xs={12} />
    </PageContainer>
  );
};

export default AuthPage;
