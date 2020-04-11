import React from "react";
import styled from "styled-components";
import { useStatistics } from "hooks/useStatistics";
import { CountryStatistic } from "types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const AnnotationContaner = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;
const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`;
const ConfirmedBlock = styled.div`
  background: #9bb4ff;
  width: 23px;
  height: 12px;
  border-radius: 3px;
  margin: 6px 20px;
`;
const RecoveredBlock = styled.div`
  background: #ffc016;
  width: 23px;
  height: 12px;
  border-radius: 3px;
  margin: 6px;
`;
const DeathsBlock = styled.div`
  background: #fe784d;
  width: 23px;
  height: 12px;
  border-radius: 3px;
  margin: 6px;
`;

const AustraliaOverview: React.FC = () => {
  const statistics: CountryStatistic[] = useStatistics().statistics;
  const start = statistics.length > 10 ? statistics.length - 10 : 0;
  const top10 = statistics
    .sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    .slice(start, statistics.length);

  return (
    <div>
      <Title>COVID-19 Overview in Australia</Title>
      <AnnotationContaner>
        <ConfirmedBlock />
        <div>confirmed</div>
        <RecoveredBlock />
        <div>recovered</div>
        <DeathsBlock />
        <div>deaths</div>
      </AnnotationContaner>
      <BarChart
        width={600}
        height={250}
        data={top10}
        barGap={0}
        //margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date"></XAxis>
        <YAxis>{/* <Label value="Cases" position="insideLeft" /> */}</YAxis>
        <Tooltip />
        <Bar dataKey="deaths" fill="#FE784D" />
        <Bar dataKey="recovered" fill="#FFC016" />
        <Bar dataKey="confirmed" fill="#9BB4FF" />
      </BarChart>
    </div>
  );
};

export default AustraliaOverview;
