import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { useSurvey } from "hooks/useSurvey";

import Greeting from "components/Dashboard/SurveyForm/Greeting";
import Symptoms from "components/Dashboard/SurveyForm/Symptoms";
import Overseas from "components/Dashboard/SurveyForm/Overseas";
import WorkFrom from "components/Dashboard/SurveyForm/WorkFrom";

const ContainedButton = styled(Button)`
  && {
    width: 100%;
    background: #3d59fa;
    color: #fff;
    margin: 2rem 0;
  }
`;

const SurveyForm: React.FC = () => {
  const { submitted, postSurvey } = useSurvey();

  const handleSubmit = () => {
    postSurvey();
  };

  return submitted ? (
    <>Thanks for sharing</>
  ) : (
    <>
      <Greeting />
      <Symptoms />
      <Overseas />
      <WorkFrom />

      {/* TODO: remember to clear form data */}
      <ContainedButton variant="contained" onClick={handleSubmit}>
        Submit
      </ContainedButton>

      {/* <form onSubmit={handleOnSubmit}>
        <div className="field">
          <>Overseas</>
          <input
            className="input"
            type="text"
            id="overseas"
            placeholder="Overseas"
            value={survey.overseas}
            onChange={onInputChange}
          />
        </div>

        <div className="field">
          <>Transportation type</>
          <>Radio BTN</>
        </div>

        <div className="field">
        <>Transportation addition</>
          <input
            className="input"
            type="text"
            id="transportAddition"
            placeholder="Transport Addition"
            value={survey.transportAddition}
            onChange={onInputChange}
          />
        </div>

        <div className="field">
          <>Overseas</>
          <input
            className="input"
            type="text"
            id="overseas"
            placeholder="Overseas"
            value={survey.overseas}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <>is WFH</>
          <>Radio BTN</>
        </div>
        <div className="field">
          <>Message</>
          <input
            className="input"
            type="text"
            id="data"
            placeholder="Password"
            value={survey.data}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Submit</button>
          </p>
        </div>
      </form> */}
    </>
  );
};

export default SurveyForm;
