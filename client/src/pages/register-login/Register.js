import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

import { Layout } from "../../components/layout/Layout";

export const Register = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); // to prevent the browser from reloading
    console.log(form, "Call api to send this data to the server");
  };

  return (
    <Layout>
      <div className="center">
        <Form>
          <FormGroup>
            <Form.Label htmlFor="inputPassword5">Name </Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </FormGroup>
          <FormGroup>
            <Form.Label htmlFor="inputPassword5">Email </Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </FormGroup>

          <FormGroup>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </FormGroup>

          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form>
      </div>
    </Layout>
  );
};
