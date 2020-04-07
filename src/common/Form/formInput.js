import React from "react";
import { FormGroup } from "react-bootstrap";
import { Field, ErrorMessage } from "formik";

const FormInput = ({ type, placeholder, name }) => (
  <FormGroup>
    <Field
      name={name}
      type={type}
      className="form-control"
      placeholder={placeholder}
    />
    <ErrorMessage component="span" name={name} className="error-control" />
  </FormGroup>
);
export default FormInput;
