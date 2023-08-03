import * as yup from "yup";
const Auth = {};
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
Auth.authLoginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username/Email is required")
    .test("username-or-email", "Invalid username or email", function (value) {
      if (value.includes("@")) {
        // If the value contains "@", validate it as an email address
        return (
          emailRegex.test(value) ||
          this.createError({ message: "Invalid email format" })
        );
      } else {
        // If the value doesn't contain "@", validate it as a username with a minimum length of 3 characters
        return (
          value.length >= 3 ||
          this.createError({
            message: "Username must be at least 3 characters long",
          })
        );
      }
    }),
  password: yup
    .string()
    .required("Password is required")
    .test(
      "uppercase",
      "Password must contain at least one uppercase letter",
      function (value) {
        return /[A-Z]/.test(value);
      }
    )
    .test(
      "number",
      "Password must contain at least one number",
      function (value) {
        return /\d/.test(value);
      }
    )
    .test(
      "special",
      "Password must contain at least one special character (@$!%*?&)",
      function (value) {
        return /[@$!%*?&]/.test(value);
      }
    )
    .min(6, "Password must be at least 8 characters long"),
});
Auth.authSignUpSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .test("Username", "Invalid username", function (value) {
      // validate username
      return (
        value.length >= 3 ||
        this.createError({
          message: "Username must be at least 3 characters long",
        })
      );
    }),
  email: yup
    .string()
    .required("Email is required")
    .test("Email", "Invalid email", function (value) {
      // If the value contains "@", validate it as an email address
      return (
        emailRegex.test(value) ||
        this.createError({ message: "Invalid email format" })
      );
    }),
  password: yup
    .string()
    .required("Password is required")
    .test(
      "uppercase",
      "Password must contain at least one uppercase letter",
      function (value) {
        return /[A-Z]/.test(value);
      }
    )
    .test(
      "number",
      "Password must contain at least one number",
      function (value) {
        return /\d/.test(value);
      }
    )
    .test(
      "special",
      "Password must contain at least one special character (@$!%*?&)",
      function (value) {
        return /[@$!%*?&]/.test(value);
      }
    )
    .min(6, "Password must be at least 8 characters long"),
});
Auth.authForgotPassword = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .test("Email", "Invalid email", function (value) {
      // If the value contains "@", validate it as an email address
      return (
        emailRegex.test(value) ||
        this.createError({ message: "Invalid email format" })
      );
    }),
});
Auth.authResetPassword = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .test(
      "uppercase",
      "Password must contain at least one uppercase letter",
      function (value) {
        return /[A-Z]/.test(value);
      }
    )
    .test(
      "number",
      "Password must contain at least one number",
      function (value) {
        return /\d/.test(value);
      }
    )
    .test(
      "special",
      "Password must contain at least one special character (@$!%*?&)",
      function (value) {
        return /[@$!%*?&]/.test(value);
      }
    )
    .min(6, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
Auth.changePassword = yup.object().shape({
  oldpassword: yup
    .string()
    .required("Password is required")
    .test(
      "uppercase",
      "Password must contain at least one uppercase letter",
      function (value) {
        return /[A-Z]/.test(value);
      }
    )
    .test(
      "number",
      "Password must contain at least one number",
      function (value) {
        return /\d/.test(value);
      }
    )
    .test(
      "special",
      "Password must contain at least one special character (@$!%*?&)",
      function (value) {
        return /[@$!%*?&]/.test(value);
      }
    )
    .min(6, "Password must be at least 8 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .test(
      "uppercase",
      "Password must contain at least one uppercase letter",
      function (value) {
        return /[A-Z]/.test(value);
      }
    )
    .test(
      "number",
      "Password must contain at least one number",
      function (value) {
        return /\d/.test(value);
      }
    )
    .test(
      "special",
      "Password must contain at least one special character (@$!%*?&)",
      function (value) {
        return /[@$!%*?&]/.test(value);
      }
    )
    .min(6, "Password must be at least 8 characters long"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export default Auth;
