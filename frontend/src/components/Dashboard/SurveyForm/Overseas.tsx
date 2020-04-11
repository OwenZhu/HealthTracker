import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import { useSurvey } from "hooks/useSurvey";

const Question = styled(Typography)`
  && {
    font: Bold 18px Helvetica Neue;
    margin: 1rem 0;
  }
`;
const RadioContainer = styled(RadioGroup)`
  && {
    flex-direction: row;
  }
`;
const TextInput = styled(TextField)`
  && {
    margin: 0.5rem 0;
  }
`;

const Overseas: React.FC = () => {
  const {
    survey: { overseas: country },
    updateField,
  } = useSurvey();

  const [wasOverseas, setWasOverseas] = useState<string>("no");

  const handleChangeOverseas = (event: any) => {
    setWasOverseas(event.target.value);
  };
  const handleChangeCountry = (event: any) => {
    updateField({ overseas: event.target.value });
  };

  return (
    <>
      <Question>Have you been overseas over the last 14 days?</Question>

      <FormControl fullWidth>
        <RadioContainer
          aria-label="overseas"
          name="overseas1"
          value={wasOverseas}
          onChange={handleChangeOverseas}
        >
          <FormControlLabel
            value="yes"
            label="Yes"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            value="no"
            label="No"
            control={<Radio color="primary" />}
          />
        </RadioContainer>
      </FormControl>

      {wasOverseas === "yes" && (
        <>
          <Question>Which country have you been to?</Question>
          <TextInput
            value={country}
            onChange={handleChangeCountry}
            placeholder="Enter Country Name"
            variant="outlined"
            fullWidth
          />
        </>
      )}
    </>
  );
};

export default Overseas;
