import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { SYMPTOMS } from "constants/config";
import { useSurvey } from "hooks/useSurvey";

const Question = styled(Typography)`
  && {
    font: Bold 18px Helvetica Neue;
    margin: 1rem 0;
  }
`;
const CheckboxGroup = styled(FormGroup)`
  margin-left: -15px;
`;
const Symptom = styled(FormControlLabel)`
  && {
    margin-right: 0.5rem;
  }
`;
const Suggestion = styled(Typography)`
  && {
    color: #212121;
    font: Regular 12px Helvetica Neue;
    margin: 1rem 0;
  }
`;

const Symptoms: React.FC = () => {
  const {
    survey: { hasSymptom },
    updateField,
  } = useSurvey();

  const [symptoms, setSymptoms] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const newList = symptoms.includes(event.target.name)
      ? symptoms.filter((s) => s !== event.target.name)
      : [...symptoms, event.target.name];
    setSymptoms(newList);
  };

  useEffect(() => {
    const hasSymptom = [SYMPTOMS.FEVER, SYMPTOMS.COUGHING].every((s) =>
      symptoms.includes(s)
    );
    updateField({ hasSymptom });
    // eslint-disable-next-line
  }, [symptoms]);

  return (
    <>
      <Question>Which of the following apply to you?</Question>
      <CheckboxGroup row>
        <Symptom
          control={
            // tslint:disable-next-line: jsx-wrap-multiline
            <Checkbox
              checked={symptoms.includes(SYMPTOMS.FEVER)}
              onChange={handleChange}
              name={SYMPTOMS.FEVER}
              color="primary"
            />
          }
          label="Fever"
          labelPlacement="start"
        />
        <Symptom
          control={
            // tslint:disable-next-line: jsx-wrap-multiline
            <Checkbox
              checked={symptoms.includes(SYMPTOMS.COUGHING)}
              onChange={handleChange}
              name={SYMPTOMS.COUGHING}
              color="primary"
            />
          }
          label="Coughing"
          labelPlacement="start"
        />
        <Symptom
          control={
            // tslint:disable-next-line: jsx-wrap-multiline
            <Checkbox
              checked={symptoms.includes(SYMPTOMS.SORE_THROAT)}
              onChange={handleChange}
              name={SYMPTOMS.SORE_THROAT}
              color="primary"
            />
          }
          label="Sore Throat"
          labelPlacement="start"
        />
        <Symptom
          control={
            // tslint:disable-next-line: jsx-wrap-multiline
            <Checkbox
              checked={symptoms.includes(SYMPTOMS.FATIGUE)}
              onChange={handleChange}
              name={SYMPTOMS.FATIGUE}
              color="primary"
            />
          }
          label="Fatigue"
          labelPlacement="start"
        />
        <Symptom
          control={
            // tslint:disable-next-line: jsx-wrap-multiline
            <Checkbox
              checked={symptoms.includes(SYMPTOMS.FEEL_WELL)}
              onChange={handleChange}
              name={SYMPTOMS.FEEL_WELL}
              color="primary"
            />
          }
          label="I feel well"
          labelPlacement="start"
        />
      </CheckboxGroup>

      {hasSymptom && (
        <Suggestion>
          We suggest you stay at home based on your symptoms. For more
          information, please refer to{" "}
          <a
            href="https://www.health.gov.au/resources/publications/covid-19-national-health-plan-primary-care-central-patient-covid-19-triage-hotline"
            target="blank"
          >
            this fact sheet published by Department of Health
          </a>{" "}
          for COVID-19 triage hotline.
        </Suggestion>
      )}
    </>
  );
};

export default Symptoms;
