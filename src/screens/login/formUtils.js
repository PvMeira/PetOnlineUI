import * as Yup from "yup";

const schemaValidation = () => {
  return Yup.object().shape({
    email: Yup.string()
      .required("Email is required.")
      .email("This Email is not valid.")
      .max(120, "The max lenght is 120 Characters"),
    password: Yup.string().required("The password is Required"),
  });
};

export default schemaValidation;
