import * as yup from "yup";

const SettingsSchemas = {};

SettingsSchemas.updateUserInfo = yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(20)
    .required("username must be at least 3 characters"),
  firstName: yup.string().optional(),
  middleName: yup.string().optional(),
  lastName: yup.string().optional(),
  age: yup.number().positive().integer().optional(),
});

export default SettingsSchemas;
