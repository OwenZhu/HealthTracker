import React from "react";
import { useStatistics } from "hooks/useStatistics";
import { CountryStatistic } from "types";
import styled from "styled-components";

const DailyOverviewContainer = styled.div`
  margin-left: 30px;
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 35px;
  margin-top: 10px;
`;
const ConfirmedInfoSection = styled.div`
  width: 290px;
  height: 62px;
  background: #9bb4ff1a;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const RecoverdInfoSection = styled.div`
  width: 290px;
  height: 62px;
  background: #ffc0161a;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const DeathsInfoSection = styled.div`
  width: 290px;
  height: 62px;
  background: #fe784d1a;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
const ConfirmedNum = styled.div`
  color: #9bb4ff;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
`;
const ConfirmedTxt = styled.div`
  color: #9bb4ff;
  font-weight: bold;
  font-size: 16px;
  margin: 17px;
`;
const RecoveredNum = styled.div`
  color: #ffc016;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
`;
const RecoveredTxt = styled.div`
  color: #ffc016;
  font-weight: bold;
  font-size: 16px;
  margin: 17px;
`;
const DeathsNum = styled.div`
  color: #fe784d;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
`;
const DeathsTxt = styled.div`
  color: #fe784d;
  font-weight: bold;
  font-size: 16px;
  margin: 17px;
`;
const DailyOverview: React.FC = () => {
  const statistics: CountryStatistic[] = useStatistics().statistics;
  const sorted = statistics.sort((a, b) =>
    a.date > b.date ? 1 : a.date < b.date ? -1 : 0
  );
  const lastDay = sorted.length && sorted[sorted.length - 1];

  return (
    <DailyOverviewContainer>
      <Title>Daily overview of cases</Title>
      <ConfirmedInfoSection>
        <ConfirmedNum>{lastDay ? lastDay.confirmed : "//"}</ConfirmedNum>
        <ConfirmedTxt>Confirmed</ConfirmedTxt>
      </ConfirmedInfoSection>
      <RecoverdInfoSection>
        <RecoveredNum>{lastDay ? lastDay.recovered : "//"}</RecoveredNum>
        <RecoveredTxt>Recovered</RecoveredTxt>
      </RecoverdInfoSection>
      <DeathsInfoSection>
        <DeathsNum>{lastDay ? lastDay.deaths : "//"}</DeathsNum>
        <DeathsTxt>Deaths</DeathsTxt>
      </DeathsInfoSection>
    </DailyOverviewContainer>
  );
};

export default DailyOverview;
