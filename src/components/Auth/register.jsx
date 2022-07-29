import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "./userService";
import auth from "./authService";
import { Heading, Box } from "@chakra-ui/react";
class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    name: Joi.string().required().label("Name"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = async () => {
    //Call the server
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }
  render() {
    return (
      <Box>
        <Heading>Register</Heading>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("name", "Name")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Register")}
        </form>
      </Box>
    );
  }
}

export default Register;
