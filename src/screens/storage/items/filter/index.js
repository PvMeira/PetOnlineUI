import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import { initialSchema } from "../formUtils";

const ItemListFilter = ({ onSubmitFunction }) => {
  return (
    <Formik
      initialValues={initialSchema}
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
              <Grid item xs={12}>
                <TextField
                  id='description'
                  label='Description'
                  variant='outlined'
                  name={"description"}
                  inputProps={{
                    maxLength: 300,
                  }}
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </Grid>
            </Grid>
            <Grid container direction='row' justify='center' spacing={2}>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button variant='outlined' size='large' color='secondary'>
                  Clear
                </Button>
                <Button
                  variant='outlined'
                  size='large'
                  color='primary'
                  type='submit'
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ItemListFilter;
