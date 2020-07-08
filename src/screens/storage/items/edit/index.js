import React, { useState, useEffect } from "react";
import { findById } from "../../../../services/ItemService";
import PageDefault from "../../../../components/pageDefault";
import { Formik } from "formik";
import { Grid, TextField, Button } from "@material-ui/core";
import { schema, schemaValidation } from "./formUtils";
import { TextMaskCustomMoney } from "../../../../utils/Formater";
import UploadField from "../../../../components/uploadField";

const ItemEdit = ({ isEdit = true, match }) => {
  const [item, setItem] = useState(schema);
  useEffect(() => {
    async function data() {
      if (isEdit) {
        const response = await findById(match.params.id);
        setItem(response);
      }
    }
    data();
  }, []);

  const handleSubmit = async () => {};

  return (
    <PageDefault title={isEdit ? "Edit item" : "Register Item"}>
      <Formik
        initialValues={item}
        enableReinitialize={true}
        validationSchema={schemaValidation}
        validateOnBlur={true}
        validateOnChange={true}
        validateOnMount={false}
        onSubmit={(values) => console.log(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
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
                    error={errors.name && touched.name && errors.name}
                    helperText={errors.name && touched.name && errors.name}
                    id='name'
                    label='Name'
                    variant='outlined'
                    fullWidth
                    name={"name"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={
                      errors.description &&
                      touched.description &&
                      errors.description
                    }
                    helperText={
                      errors.description &&
                      touched.description &&
                      errors.description
                    }
                    id='description'
                    label='Description'
                    variant='outlined'
                    fullWidth
                    name={"description"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    error={errors.value && touched.value && errors.value}
                    helperText={errors.value && touched.value && errors.value}
                    id='value'
                    label='Value'
                    variant='outlined'
                    fullWidth
                    name={"value"}
                    InputProps={{
                      inputComponent: TextMaskCustomMoney,
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.value}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    error={
                      errors.quantity && touched.quantity && errors.quantity
                    }
                    helperText={
                      errors.quantity && touched.quantity && errors.quantity
                    }
                    id='quantity'
                    type='number'
                    label='Quantity'
                    variant='outlined'
                    fullWidth
                    name={"quantity"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantity}
                  />
                </Grid>
                <Grid item xs={12}>
                  <UploadField
                    label={"Image"}
                    accept='.png,.jpeg'
                    handleUpload={({ file }) => {
                      setFieldValue("image", file);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction='row'
                justify='space-between'
                style={{ textAlign: "center" }}
              >
                <Grid item xs={6}>
                  <Button variant='outlined' size='large' color='secondary'>
                    {" "}
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    size='large'
                    color='primary'
                    type='submit'
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
        )}
      </Formik>
    </PageDefault>
  );
};

export default ItemEdit;
