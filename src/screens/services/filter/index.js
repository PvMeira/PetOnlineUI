import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { strings } from "../../../configuration/assets";

const ServicesListFilter = ({ onSubmitFunction }) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{ name: "" }}
      validateOnBlur={true}
      validateOnMount={false}
      onSubmit={(values) => onSubmitFunction(1, values)}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "3% 20% 3% 20%" }}>
            <Grid
              container
              direction='row'
              justify='center'
              spacing={2}
              style={{ marginBottom: "5%" }}
            >
              <Grid item xs={12}>
                <TextField
                  id='name'
                  label='Name'
                  variant='outlined'
                  fullWidth
                  name={"name"}
                  inputProps={{
                    maxLength: 120,
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </Grid>
            </Grid>
            <Grid container direction='row' spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant='outlined'
                  size='large'
                  color='primary'
                  style={{ margin: "0px 5px 5px 0px " }}
                  type='submit'
                >
                  {strings.defualtButtons.search}
                </Button>
                <Button
                  variant='outlined'
                  size='large'
                  color='secondary'
                  style={{ margin: "0px 5px 5px 0px " }}
                >
                  {strings.defualtButtons.clear}
                </Button>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "end" }}>
                <Button
                  variant='contained'
                  size='large'
                  color='secondary'
                  onClick={() => history.push(`/services/new`)}
                >
                  {strings.defualtButtons.new}
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ServicesListFilter;
