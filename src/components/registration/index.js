import React from "react";
import { Button, Container } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInput, FormInputPassword } from "../../common/Form";
import { SetLocalStorage } from "../../utils/helper";
import "../../styles/login-styles.scss";

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required("first Name is required"),
  lastName: Yup.string().required("last Name is required"),
  email: Yup.string()
    .email("invalid email")
    .required("email is required"),
  password: Yup.string()
    .min(8, "password is too short.Minimum 13 characters required")
    .max(16, "password is too long.Maximum 16 characters is allowed")
    .required("password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm Password is required")
});

const Registration = () => {
  const handleSubmit = values => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(values));
    SetLocalStorage("user", JSON.stringify(values));
  };

  return (
    <Container className="login-container">
      <div className="form-box col-sm-12 col-md-6">
        <div className="header-div mb-3 text-uppercase">Expense Tracker</div>
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: ""
            }}
            validationSchema={RegistrationSchema}
            onSubmit={values => handleSubmit(values)}
          >
            {({ handleReset }) => (
              <Form>
                <FormInput
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                ></FormInput>
                <FormInput
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                ></FormInput>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                ></FormInput>
                <FormInputPassword
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                ></FormInputPassword>
                <FormInputPassword
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                ></FormInputPassword>
                <Button type="submit" className="submit-button mr-2">
                  Register
                </Button>
                <Button
                  type="reset"
                  className="reset-button"
                  onClick={() => handleReset()}
                >
                  Reset
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
};
export default Registration;
