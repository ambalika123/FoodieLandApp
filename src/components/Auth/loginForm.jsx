import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./form";
import auth from "./authService";
import {
  Flex,
  Box,
  Stack,
  Link,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      console.log(data);
      await auth.login(data.email, data.password);
      const { state } = this.props.location;
      // if state is not defined we will redirect the user to the homepage
      window.location = state ? state.from.pathname : "/home";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert("User not found!! Please enter valid credentials");
      }
    }
  };

  render() {
    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>
              ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password", "password")}
                <Center m={5}>{this.renderButton("Login")}</Center>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
}

export default LoginForm;
