import * as Yup from "yup";

export const schema = {
  name: "",
  description: "",
  value: 0,
  isActive: false,
};

export const schemaValidation = () => {
  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required.")
      .max(120, "The max lenght is 120 Characters"),
    value: Yup.string().required("Value is required."),
  });
};
