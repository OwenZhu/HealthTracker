import React from "react";
import { useOrganisation } from "hooks/useOrganisation";
import { OrgOverview } from "types";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 35px;
  margin: 20px 30px;
`;
const OverseasTravel: React.FC = () => {
  const { organisation } = useOrganisation();
  const overseas = (organisation as OrgOverview).overseas;
  return (
    <div>
      <Title>Overseas travel</Title>
      <BarChart
        width={470}
        height={400}
        data={overseas}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="country" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey="count" fill="#9BB4FF" />
      </BarChart>
    </div>
  );
};

export default OverseasTravel;
