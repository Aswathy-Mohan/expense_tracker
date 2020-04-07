import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInput, FormInputPassword } from "../../common/Form";
import "../../styles/login-styles.scss";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email")
    .required("email is required"),
  password: Yup.string()
    .min(8, "password is too short.Minimum 13 characters required")
    .max(16, "password is too long.Maximum 16 characters is allowed")
    .required("password is required")
});

const Login = () => {
  const handleSubmit = values => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(values));
  };
  return (
    <Container className="login-container">
      <div className="form-box col-sm-12 col-md-6">
        <div className="header-div mb-3 text-uppercase">Expense Tracker</div>
        <div>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={LoginSchema}
            onSubmit={values => handleSubmit(values)}
          >
            {() => (
              <Form>
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
                <Button type="submit" className="submit-button" block>
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="register-div mt-4">
          <p>
            Dont's have an account?
            <Link to="../registration" className="anchor-tag">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Login;
