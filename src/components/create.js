import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import FormTitle from "./form/title";
import FormField from "./form/field";

function Create(props) {
  // this component further can be optimized, instead of multiple Form Rows, we can put all elements in an array/object
  // and loop through the array/object which further shortens this component to less than 30 lines

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.target;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="mt-4">
      <h2>Referral Builder</h2>
      <FormTitle title="Personal Details"></FormTitle>
      <Form
        noValidate
        validated={validated}
        method="post"
        id="referral_form"
        onSubmit={handleSubmit}
      >
        <Form.Row>
          <FormField id="given_name" label="Given Name"></FormField>
          <FormField id="surname" label="Surname"></FormField>
        </Form.Row>

        <Form.Row>
          <FormField id="email" type="email" label="email"></FormField>
          <FormField id="phone" label="Phone"></FormField>
        </Form.Row>

        <FormTitle title="Address"></FormTitle>

        <Form.Row>
          <FormField id="home_name" label="Home name or #"></FormField>
          <FormField id="street" label="Street"></FormField>
        </Form.Row>

        <Form.Row>
          <FormField id="suburn" label="Suburb"></FormField>
          <FormField id="state" label="State"></FormField>
        </Form.Row>

        <Form.Row>
          <FormField id="postcode" label="Postcode" type="number"></FormField>
          <FormField id="country" label="country"></FormField>
        </Form.Row>

        <Form.Row>
          <span className="w-50">
            <Form.File.Input
              className="btn-light px-5 py-3"
              required
              accept="image/*"
            />
            <Form.Control.Feedback type="invalid">
              Avatar can not be empty
            </Form.Control.Feedback>
          </span>

          <span className="w-50">
            <Button variant="success" type="submit" className="px-5 py-3 ml-1">
              CREATE REFERRAL
            </Button>
          </span>
        </Form.Row>
      </Form>
    </Container>
  );
}

export default Create;
