import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { useSurvey } from "hooks/useSurvey";

const Hello = styled(Typography)`
  && {
    font: Bold 24px Helvetica Neue;
    margin-bottom: 1rem;
  }
`;
const Description = styled(Typography)`
  && {
    font: Regular 14px Helvetica Neue;
    margin: 1rem 0;
  }
`;

const Greeting: React.FC = () => {
  const { username } = useSurvey();
  return (
    <>
      <Hello>Hi {username}</Hello>

      <Description>
        For the wellbeing of everyone within our organisation, we recommend that
        you submit your daily health survey in time. If you have any health
        concerns, please contact
        <strong> health@support.au</strong> for professional advice.
      </Description>
    </>
  );
};

export default Greeting;
