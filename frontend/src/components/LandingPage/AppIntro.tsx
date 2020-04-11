import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { IMAGE_DIR } from "constants/config";

interface AppIntroProps {
  id: string;
}

const AppIntroWrapper = styled.div<AppIntroProps>`
  background: url(${IMAGE_DIR}appIntroBg.png) top left no-repeat;
  width: 100%;
  height: 80%;
`;
const AppIntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 6rem;
`;
const TextIntro = styled.div`
  padding: 1rem 6rem 1rem 0;
`;
const Slogan = styled(Typography)`
  && {
    font: Bold 36px Helvetica;
    margin-bottom: 2rem;
  }
`;
const Description = styled(Typography)`
  color: #212121;
`;
const Initial = styled.span`
  color: #45a4b6;
`;

const AppIntro: React.FC = () => {
  return (
    <AppIntroWrapper id="appIntro">
      <AppIntroContainer>
        <TextIntro>
          <Slogan>
            We are here to help <Initial>H</Initial>ealth <Initial>T</Initial>
            racking within your business.
          </Slogan>
          <Description>
            HealthTracker is an interactive website that provides key statistics
            on physical and mental health of people in your organisation amid
            COVID-19.
          </Description>
          <p />
          <Description>
            It equips employers and employees with necessary information to make
            informed decisions on staff support and work arrangements.
          </Description>
        </TextIntro>

        <img src={`${IMAGE_DIR}appIntroPerson.svg`} alt="appIntroPerson" />
      </AppIntroContainer>
    </AppIntroWrapper>
  );
};

export default AppIntro;
