import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  fatherName: yup.string().min(3).required(),
  password: yup
    .string()
    .required()
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain a special character (@$!%*?&)"
    ),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
