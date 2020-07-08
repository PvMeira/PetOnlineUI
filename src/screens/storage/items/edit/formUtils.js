import * as Yup from "yup";

export const schema = {
  name: "",
  description: "",
  value: 0,
  quantity: 0,
  image: "",
};

export const schemaValidation = () => {
  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required.")
      .max(120, "The max lenght is 120 Characters"),
    value: Yup.number()
      .required("Value is required.")
      .max(16, "Max values is XXXXXX"),
    quantity: Yup.number().required("Quantity is required."),
  });
};
