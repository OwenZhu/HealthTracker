import React from "react";
import { useOrganisation } from "hooks/useOrganisation";
import { OrgOverview } from "types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styled from "styled-components";

const COLORS = ["#FFDB5C", "#FF9F7F"];

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 35px;
  margin: 20px 30px;
  text-align: center;
`;
const AnnotationContaner = styled.div`
  display: flex;
  justify-content: center;
`;
const WFHBlock = styled.div`
  background: #ffdb5c;
  width: 23px;
  height: 12px;
  border-radius: 3px;
  margin: 6px 20px;
`;
const WFOBlock = styled.div`
  background: #ff9f7f;
  width: 23px;
  height: 12px;
  border-radius: 3px;
  margin: 6px 20px;
`;

const WfhRate: React.FC = () => {
  const organisation: OrgOverview = useOrganisation().organisation;
  const data = [
    { name: "WORK FROM HOME", value: organisation.whfRate * 100 },
    { name: "WORK FROM OFFICE", value: 100 - organisation.whfRate * 100 },
  ];

  return (
    <div>
      <Title>WFH VS WFO</Title>
      <AnnotationContaner>
        <WFHBlock />
        <div>Work from home</div>
        <WFOBlock />
        <div>Work from office</div>
      </AnnotationContaner>
      <PieChart
        width={400}
        height={400}
        margin={{ top: 0, right: 0, bottom: 0, left: 80 }}
      >
        <Pie
          isAnimationActive={false}
          dataKey="value"
          data={data}
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default WfhRate;
