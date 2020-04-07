import React from "react";
import { FormGroup, Row, Col, Label } from "react-bootstrap";
import { Field, ErrorMessage } from "formik";

const FormSelect = ({ name, labelText, list, onChange, placeholder }) => {
  return (
    <FormGroup>
      <Row>
        <Col lg={2}>
          <Label className="label">
            {labelText}
            <span className="required">*</span>
          </Label>
        </Col>
        <Col lg={10}>
          <Field
            name={name}
            component="select"
            className="form-control"
            onChange={onChange}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {list &&
              list.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              ))}
          </Field>
          <ErrorMessage component="span" name={name} className="invalid" />
        </Col>
      </Row>
    </FormGroup>
  );
};

export default FormSelect;
