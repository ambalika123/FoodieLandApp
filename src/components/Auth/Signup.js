import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              phone: "",
              Image: "",
            }}
            validate={(values) => {
              const errors = {};

              if (values.firstName.trim() === "") {
                errors.firstName = "** Name Field is Required";
              } else if (isNaN(values.firstName) === false) {
                errors.firstName = "** Name Contain only characters";
              }
              if (values.lastName.trim() === "") {
                errors.lastName = "** Name Field is Required";
              } else if (isNaN(values.lastName) === false) {
                errors.lastName = "** Name Contain only characters";
              }

              if (!values.email) {
                errors.email = "** Email Field Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "** Invalid email address";
              }

              if (!values.password) {
                errors.password = "** Password is Required";
              }
              //   } else if (isNaN(values.password) === false) {
              //     errors.password = "**Subject Contain only characters";
              //   }
              if (!values.phone) {
                errors.phone = "** Phone Number is Required";
              }
              //   } else if (isNaN(values.phone) === false) {
              //     errors.phone = "**Subject Contain only characters";
              //   }

              //   if (!values.Image) {
              //     errors.Image = "** Image is required";
              //   }

              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const formdata = JSON.stringify(values, null);
              //   axios({
              //     method: "post",
              //     url: "https://foodielandnod.herokuapp.com/api/register",
              //     data: formdata,
              //   })
              //     .then(function (response) {
              //       console.log(response);
              //     })
              //     .catch(function (error) {
              //       console.log(error);
              //     });
              fetch("https://foodielandnod.herokuapp.com/api/register", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: formdata,
              }).then(function (response) {
                console.log(response);
                if (response.status === 200) {
                  alert("Data submitted successfully");
                }
              });
              setSubmitting(true);
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
                  <Stack spacing={4}>
                    <HStack>
                      <Box>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          type="text"
                          id="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          name="firstName"
                        />
                        <Text color={"red"} fontSize={"sm"}>
                          {errors.firstName &&
                            touched.firstName &&
                            errors.firstName}
                        </Text>
                      </Box>
                      <Box>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          type="text"
                          id="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          name="lastName"
                        />
                        <Text color={"red"} fontSize={"sm"}>
                          {errors.lastName &&
                            touched.lastName &&
                            errors.lastName}
                        </Text>
                      </Box>
                    </HStack>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="number"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <Text color={"red"} fontSize={"sm"}>
                      {errors.phone && touched.phone && errors.phone}
                    </Text>

                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      name="email"
                    />
                    <Text color={"red"} fontSize={"sm"}>
                      {errors.email && touched.email && errors.email}
                    </Text>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        name="password"
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Text color={"red"} fontSize={"sm"}>
                      {errors.password && touched.password && errors.password}
                    </Text>
                    <FormLabel>Image</FormLabel>
                    <Input
                      type="file"
                      id="Image"
                      name="Image"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Image}
                    />
                    {/* <Text color={"red"} fontSize={"sm"}>
                      {errors.Image && touched.Image && errors.Image}
                    </Text> */}
                    <Stack spacing={10} pt={2}>
                      <Button
                        name="myButton"
                        disabled={isSubmitting}
                        //loadingText="Submitting"
                        type="submit"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Sign up
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"} color={"blue.400"}>
                        Already a user?
                        <NavLink to="/signin">Login</NavLink>
                      </Text>
                    </Stack>
                  </Stack>
                </FormControl>
              </form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};
export default Signup;
