import React, { Component } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { login } from "./userService";
import { values } from "lodash";
class Signin extends Component {
  state = {
    values: {
      password: "",
      email: "",
    },
  };
  doSubmit = async () => {
    const response = await login(this.state.values);
    this.setState({
      values: {
        password: values.password,
        email: values.email,
      },
    });
    if (response && response.status) {
      console.log(response.data.accessToken);
      const value = response.data.accessToken;
      alert("ok");
      const jwt = localStorage.setItem("token", value);
      this.props.history.push("/home");
    }
  };

  handleToken = (e) => {
    this.doSubmit();
  };
  render() {
    const url = "https://foodielandnod.herokuapp.com/api/signIn";
    return (
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.email) {
                    errors.email = "** Email is Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "** Invalid email address";
                  }
                  if (!values.password) {
                    errors.password = "** Password is Required";
                    // } else if (
                    //   // !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test
                    //   values.password
                    //)
                  }
                  //  else {
                  //   errors.password = "** Invalid password";
                  // }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const formdata = JSON.stringify(values);

                  fetch(url, {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: formdata,
                  }).then(function (response) {
                    //const token = localStorage.setItem("token");
                    //   let data = response.firstName;

                    console.log(response);

                    if (response.status === 200) {
                      alert("User Logged In Successfully");
                    } else {
                      alert("Email already exists");
                    }
                  });

                  setSubmitting(false);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.email && touched.email && errors.email}
                      </Text>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Text color={"red"} fontSize={"sm"}>
                        {errors.password && touched.password && errors.password}
                      </Text>
                      <Stack spacing={5}>
                        <Button
                          bg={"blue.400"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                          disabled={isSubmitting}
                          type="submit"
                          m={5}
                          onClick={this.handleToken}
                        >
                          Sign in
                        </Button>
                        <Stack
                          direction={{ base: "column", sm: "row" }}
                          align={"start"}
                          justify={"space-between"}
                          color={"blue.400"}
                        >
                          <NavLink to="/forget">
                            Forgot password? Click Here
                          </NavLink>
                        </Stack>

                        <Button
                          bg={"blue.400"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                          m={5}
                        >
                          <NavLink to="/signup">Create New Account</NavLink>
                        </Button>
                      </Stack>
                    </FormControl>
                  </form>
                )}
              </Formik>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
}
export default Signin;
