import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findById, save, update } from "../../../services/ServicesService";
import {
  toggleSuccessMessage,
  toggleErrorMessage,
} from "../../../configuration/redux/reducers/application/application-actions";

import { schema, schemaValidation } from "./formUtils";
import { strings } from "../../../configuration/assets";
import PageDefault from "../../../components/global/pageDefault";
import {
  FormContainer,
  GridTextAlignCenter,
  GridFormContainar,
} from "./styles";
import { Formik } from "formik";
import {
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { TextMaskCustomMoney } from "../../../utils/Formater";

const ServicesEdit = ({ isEdit = true }) => {
  const [services, setServices] = useState(schema);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    async function data() {
      if (isEdit) {
        findById(id)
          .then((response) => {
            setServices(response.data);
          })
          .catch(() =>
            dispatch(toggleErrorMessage(strings.defaultMessages.error))
          );
      }
    }
    data();
  }, []);

  const handleSubmitForm = async (values) => {
    const { id, name, description, value, isActive } = values;
    const newValuenew = String(value).replace(",", "");
    if (isEdit) {
      await update(id, {
        id,
        name,
        description,
        value: newValuenew,
        isActive,
      })
        .then(() => {
          dispatch(
            toggleSuccessMessage(`The Service ${name} was successful edited.`)
          );
          history.push("/services");
        })
        .catch(() => {
          dispatch(toggleErrorMessage(strings.defaultMessages.error));
        });
    } else {
      await save({
        name,
        description,
        value: newValuenew,
        isActive,
      })
        .then(() => {
          dispatch(toggleSuccessMessage(strings.defaultMessages.success));
          history.push("/services");
        })
        .catch(() => {
          dispatch(toggleErrorMessage(strings.defaultMessages.error));
        });
    }
  };

  return (
    <PageDefault
      title={
        isEdit
          ? strings.screens.services.titleEdit
          : strings.screens.services.titleNew
      }
    >
      <Formik
        initialValues={services}
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
            <FormContainer>
              <GridFormContainar
                container
                direction='row'
                justify='center'
                spacing={2}
              >
                <Grid item xs={12}>
                  <TextField
                    error={errors.name && touched.name && errors.name}
                    helperText={errors.name && touched.name && errors.name}
                    id='name'
                    label={strings.screens.services.name}
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
                    label={strings.screens.services.description}
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
                    label={strings.screens.services.value}
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
                <GridTextAlignCenter item xs={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.isActive}
                        onChange={(event) =>
                          setFieldValue("isActive", event.target.checked)
                        }
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    }
                    label={strings.screens.services.isActive}
                  />
                </GridTextAlignCenter>
              </GridFormContainar>
              <GridTextAlignCenter
                container
                direction='row'
                justify='space-between'
              >
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    size='large'
                    color='secondary'
                    onClick={() => history.push("/services")}
                  >
                    {strings.defualtButtons.back}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant='outlined'
                    size='large'
                    color='primary'
                    type='submit'
                  >
                    {strings.defualtButtons.save}
                  </Button>
                </Grid>
              </GridTextAlignCenter>
            </FormContainer>
          </form>
        )}
      </Formik>
    </PageDefault>
  );
};

export default ServicesEdit;
