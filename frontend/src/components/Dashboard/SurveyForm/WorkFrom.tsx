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

const WorkFrom: React.FC = () => {
  const {
    survey: { transportType, transportAddition },
    updateField,
  } = useSurvey();

  const [isWfo, setIsWfo] = useState<boolean>(false);

  const handleChangeWfo = (event: any) => {
    const isWfo = event.target.value === "true" ? true : false;
    setIsWfo(isWfo);
    updateField({ isWFH: !isWfo });
  };

  const handleChangeTransport = (event: any) => {
    updateField({ [event.target.name]: event.target.value });
  };

  return (
    <>
      <Question>Are you going to the office today?</Question>

      <FormControl fullWidth>
        <RadioContainer
          aria-label="workFrom"
          name="workFrom1"
          value={isWfo}
          onChange={handleChangeWfo}
        >
          <FormControlLabel
            value={true}
            label="Yes"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            value={false}
            label="No"
            control={<Radio color="primary" />}
          />
        </RadioContainer>
      </FormControl>

      {isWfo && (
        <>
          <Question>What transport do you use?</Question>
          <TextInput
            value={transportType}
            onChange={handleChangeTransport}
            name="transportType"
            placeholder="Enter Transport Type, e.g. bus"
            variant="outlined"
            fullWidth
          />
          <TextInput
            value={transportAddition}
            onChange={handleChangeTransport}
            name="transportAddition"
            placeholder="Add Transport Details, e.g. route 900"
            variant="outlined"
            fullWidth
          />
        </>
      )}
    </>
  );
};

export default WorkFrom;
