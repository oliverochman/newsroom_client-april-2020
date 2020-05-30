import React, { useState } from "react";
import { Grid, Button, Form, Input } from "semantic-ui-react";
import auth from "../modules/auth";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

const SignUpForm = (props) => {
  const [message, setMessage] = useState("");
  const history = useHistory();

  const signup = async (e) => {
    e.preventDefault();
    try {
      let response = await auth.signUp({
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target.passwordConfirmation.value,
      });
      props.setUid(response.data.uid);
      // setMessage(`Signed up successfully as ${props.uid}`);
      history.push("/sign_in");
    } catch (error) {
      setMessage(error.response.data.errors[0]);
    }
  };
  return (
    <>
      <Grid className="signup-container" verticalAlign="middle">
        <Grid.Column align="center">
          <h3 id="error-message">{message}</h3>
          <Form unstackable id="signup-form" onSubmit={signup}>
            <h1>Sign up</h1>
            <h4>Email</h4>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="email"
            ></Input>
            <h4>Password</h4>
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
            ></Input>
            <h4>Confirm Password</h4>
            <Input
              name="passwordConfirmation"
              type="password"
              id="passwordConfirmation"
              placeholder="Confirm password"
            ></Input>
            <br></br>
            <Button id="submit" type="submit">
              Submit
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SignUpForm;
