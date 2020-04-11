import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { IMAGE_DIR } from "constants/config";

interface UseIntroProps {
  id: string;
}

const UseIntroContainer = styled(Grid)<UseIntroProps>`
  background: #fafbfe;
  padding: 3rem 6rem;
`;
const Title = styled(Typography)`
  && {
    font: Bold 25px Helvetica;
    border-bottom: 6px solid #3d59fa;
    display: inline-block;
    margin-bottom: 2rem;
  }
`;
const UseStep = styled(Typography)`
  && {
    color: #212121;
    display: flex;
    margin: 1rem 0;
  }
`;
const CheckIcon = styled.div`
  background: #45a4b6;
  color: #fff;
  height: 24px;
  width: 24px;
  border-radius: 15%;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
`;
const Copyright = styled(Typography)`
  && {
    margin-top: 4rem;
    text-align: center;
  }
`;

const UseIntro: React.FC = () => {
  return (
    <UseIntroContainer id="use" container>
      <Grid item xs={6}>
        <Title>How It Works</Title>
        <UseStep>
          <CheckIcon>✔</CheckIcon>
          Employer creates a space for their organisation.
        </UseStep>
        <UseStep>
          <CheckIcon>✔</CheckIcon>
          Employees log their health and travel information.
        </UseStep>
        <UseStep>
          <CheckIcon>✔</CheckIcon>
          Dashboard is available for all to track key stats within organisation.
        </UseStep>
      </Grid>

      <Grid item xs={6}>
        <img src={`${IMAGE_DIR}usePerson.svg`} alt="usePerson" />
      </Grid>

      <Grid item xs={12}>
        <Copyright>Copyright © {new Date().getFullYear()} Eureka</Copyright>
      </Grid>
    </UseIntroContainer>
  );
};

export default UseIntro;
