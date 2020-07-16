import React, { useState } from "react";
import PageDefault from "../../../components/global/pageDefault";
import ApiStepper from "../../../components/global/stepper";
import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const NewSale = () => {
  const [step, setStep] = useState(0);

  const handleStepBack = () => {
    setStep(step - 1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const steps = ["Select a Service or a Item", "Client Data", "Last infos"];

  return (
    <PageDefault title='New sale'>
      <ApiStepper
        handleNext={handleNextStep}
        handleBack={handleStepBack}
        activeStep={step}
        steps={steps}
      >
        <div>
          <Grid container justify='center'>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Grid container justify='center'>
                <Button
                  size='large'
                  color='primary'
                  variant='contained'
                  style={{ marginRight: "4px" }}
                >
                  Browse a Item
                </Button>
                <Button
                  size='large'
                  color='secondary'
                  variant='contained'
                  style={{ marginLeft: "4px" }}
                >
                  Browse a Service
                </Button>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "16px" }}>
              <TextField
                label='Search...'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                variant='outlined'
              />
            </Grid>
          </Grid>
        </div>
      </ApiStepper>
    </PageDefault>
  );
};

export default NewSale;
