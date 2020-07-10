import React, { useState, useEffect } from "react";
import { findById } from "../../../../services/ItemService";
import PageDefault from "../../../../components/pageDefault";
import { Formik } from "formik";
import { Grid, TextField, Button } from "@material-ui/core";
import { schema, schemaValidation } from "./formUtils";
import { TextMaskCustomMoney } from "../../../../utils/Formater";
import UploadField from "../../../../components/uploadField";
import { updateItem, listCategories } from "../../../../services/ItemService";
import { useHistory, useParams } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ImageContainer } from "./styles";
import { useDispatch } from "react-redux";
import { toggleSuccessMessage } from "../../../../configuration/redux/reducers/application/application-actions";

const ItemEdit = ({ isEdit = true }) => {
  const [item, setItem] = useState(schema);
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    async function data() {
      if (isEdit) {
        const response = await findById(id);
        setItem(response);
      }
      const responseCategories = await listCategories();
      setCategories(responseCategories);
    }
    data();
  }, []);

  const handleSubmitForm = async ({
    id,
    name,
    description,
    value,
    quantity,
    image,
    category,
  }) => {
    const newValuenew = String(value).replace(",", "");
    if (isEdit) {
      try {
        await updateItem(id, {
          id,
          name,
          description,
          value: newValuenew,
          quantity,
          image,
          category,
        });
        dispatch(toggleSuccessMessage());
        history.push("/storage");
      } catch (error) {}
    }
  };

  return (
    <PageDefault title={isEdit ? "Edit item" : "Register Item"}>
      <Formik
        initialValues={item}
        enableReinitialize={true}
        validationSchema={schemaValidation}
        validateOnBlur={true}
        validateOnMount={false}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
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
                <Grid item xs={6}>
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
                <Grid item xs={6}>
                  <Autocomplete
                    id='categories'
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    value={values.category}
                    inputValue={values.category.name}
                    onChange={(event, newValue) => {
                      console.log(newValue);
                      setFieldValue("category", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='Categories'
                        variant='outlined'
                      />
                    )}
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
                <Grid item xs={6}>
                  <UploadField
                    label={"Image"}
                    accept='.png,.jpeg'
                    handleUpload={({ file }) => {
                      setFieldValue("image", file);
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ImageContainer>
                    <img src={values.image} alt={values.name} />
                  </ImageContainer>
                </Grid>
              </Grid>
              <Grid
                container
                direction='row'
                justify='space-between'
                style={{ textAlign: "center" }}
              >
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    size='large'
                    color='secondary'
                    onClick={() => history.push("/storage")}
                  >
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
