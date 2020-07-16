import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Grid } from "@material-ui/core";

import {
  RootContainer,
  BodyContainer,
  ChildrenGrid,
  CustomButton,
} from "./styles";

const ApiStepper = ({
  handleNext,
  handleBack,
  children,
  showButtons = true,
  labelNextButton = null,
  style = {},
  activeStep = 0,
  steps = [],
}) => {
  return (
    <RootContainer style={{ ...style }}>
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {!!steps &&
            steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
        </Stepper>
      </div>

      <BodyContainer>
        <ChildrenGrid container justify='center'>
          <Grid item style={{ width: "90%" }}>
            {children}
          </Grid>
        </ChildrenGrid>
        {showButtons && (
          <Grid container justify={"space-between"}>
            <Grid item>
              <CustomButton
                disabled={activeStep === 0}
                onClick={handleBack}
                variant='outlined'
              >
                Back
              </CustomButton>
            </Grid>
            <Grid item>
              <CustomButton
                type='submit'
                variant='contained'
                color='primary'
                onClick={(event) => handleNext(event)}
              >
                {labelNextButton ? labelNextButton : "Next"}
              </CustomButton>
            </Grid>
          </Grid>
        )}
      </BodyContainer>
    </RootContainer>
  );
};

export default ApiStepper;
