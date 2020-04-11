import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { IMAGE_DIR } from "constants/config";

interface FeaturesIntroProps {
  id: string;
}
interface IconWrapperProps {
  background: string;
}

const FeaturesIntroContainer = styled.div<FeaturesIntroProps>`
  margin: 2rem 6rem;
`;
const Title = styled(Typography)`
  && {
    font: Bold 25px Helvetica;
    border-bottom: 6px solid #3d59fa;
    display: inline-block;
  }
`;
const LowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
const Feature = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8rem;
`;
const IconWrapper = styled.div<IconWrapperProps>`
  background: ${(props) => props.background};
  height: 50px;
  width: 50px;
  border-radius: 5%;
  display: flex;
  justify-content: center;
`;
const Name = styled(Typography)`
  && {
    font: Bold 16px Helvetica;
    margin: 1rem 0;
  }
`;
const Desc = styled(Typography)`
  && {
    font: Regular 12px Helvetica;
    color: #575757;
  }
`;

const FeaturesIntro: React.FC = () => {
  return (
    <FeaturesIntroContainer id="features">
      <Title>Services We Offer</Title>
      <LowerContainer>
        <Feature>
          <IconWrapper background="#E3FCE6">
            <img src={`${IMAGE_DIR}log.svg`} alt="log" />
          </IconWrapper>
          <Name>Daily log</Name>
          <Desc>Log your health information and see how others are doing</Desc>
        </Feature>

        <Feature>
          <IconWrapper background="#FFF6E7">
            <img src={`${IMAGE_DIR}track.svg`} alt="track" />
          </IconWrapper>
          <Name>Health track</Name>
          <Desc>
            Track health status and overseas travel within organisation
          </Desc>
        </Feature>

        <Feature>
          <IconWrapper background="#e6f8fd">
            <img src={`${IMAGE_DIR}review.svg`} alt="review" />
          </IconWrapper>
          <Name>National status</Name>
          <Desc>Learn up-to-date key stats about COVID-19 in Australia</Desc>
        </Feature>

        <img src={`${IMAGE_DIR}featuresPerson.svg`} alt="featuresPerson" />
      </LowerContainer>
    </FeaturesIntroContainer>
  );
};

export default FeaturesIntro;
