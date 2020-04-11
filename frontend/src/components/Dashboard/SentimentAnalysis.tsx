import React from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";

import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

import { useOrganisation } from "hooks/useOrganisation";
import { OrgOverview } from "types";

const SentimentAnalysisContainer = styled(Grid)`
  background: #3d59fab3;
  width: 1119px;
  height: 99px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const SentTitle = styled(Grid)`
  text-align: center;
  font: Bold 18px Helvetica;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const StatsContainer = styled.div`
  display: flex;
  color: #ffffff;
`;
const StatsNum = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const StatsTxt = styled.div`
  font-size: 12px;
`;
const PositiveIcon = styled(SentimentSatisfiedAltIcon)`
  font-size: 50px !important;
  margin-right: 20px;
`;
const NeutralIcon = styled(SentimentSatisfiedIcon)`
  font-size: 50px !important;
  margin-right: 20px;
`;
const NegativeIcon = styled(SentimentVeryDissatisfiedIcon)`
  font-size: 50px !important;
  margin-right: 20px;
`;

const SentimentAnalysis: React.FC = () => {
  const { organisation } = useOrganisation();
  const { positive, negative, neutral } = organisation as OrgOverview;
  return (
    <SentimentAnalysisContainer
      container
      justify="space-around"
      alignItems="center"
      id="sentimentAnalysis"
    >
      <SentTitle item xs={3}>
        Sentiment Analysis
      </SentTitle>
      <Grid item xs={3}>
        <StatsContainer>
          <PositiveIcon />
          <div>
            <StatsNum>{(positive * 100).toFixed(2)}%</StatsNum>
            <StatsTxt>Positive Rate</StatsTxt>
          </div>
        </StatsContainer>
      </Grid>
      <Grid item xs={3}>
        <StatsContainer>
          <NeutralIcon />
          <div>
            <StatsNum>{(neutral * 100).toFixed(2)}%</StatsNum>
            <StatsTxt>Neutral Rate</StatsTxt>
          </div>
        </StatsContainer>
      </Grid>
      <Grid item xs={3}>
        <StatsContainer>
          <NegativeIcon />
          <div>
            <StatsNum>{(negative * 100).toFixed(2)}%</StatsNum>
            <StatsTxt>Negative Rate</StatsTxt>
          </div>
        </StatsContainer>
      </Grid>
    </SentimentAnalysisContainer>
  );
};

export default SentimentAnalysis;
