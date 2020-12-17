import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

function Field(props) {
  let fieldType = "text";
  if (typeof props.type !== "undefined") {
    fieldType = props.type;
  }
  return (
    <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control required={true} type={fieldType} name={props.id} />
      <Form.Control.Feedback type="invalid">
        {props.label} can not be empty
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default Field;
