import React, { useEffect } from "react";
import {
  Heading,
  Image,
  Box,
  Stack,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Select,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { Formik } from "formik";
const ContactUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Flex m={10}>
      <Box width={"400px"}>
        <Image src="Cook-contact.png" />
      </Box>
      <Box width={"600px"}>
        <Heading align="center" fontSize={"5xl"} m={10}>
          Contact Us
        </Heading>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            enquiryType: "",
            messages: "",
          }}
          validate={(values) => {
            const errors = {};

            if (values.name.trim() === "") {
              errors.name = "** Name Field is Required";
            } else if (isNaN(values.name) === false) {
              errors.name = "** Name Contain only characters";
            }

            if (!values.email) {
              errors.email = "** Email Field Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "** Invalid email address";
            }

            if (values.subject.trim() === "") {
              errors.subject = "** Subject Field is Required";
            } else if (isNaN(values.subject) === false) {
              errors.subject = "**Subject Contain only characters";
            }

            if (values.enquiryType === "") {
              errors.enquiryType = "** Please Select Enquiry Type Field";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const formdata = JSON.stringify(values, null, 2);

            fetch("https://foodielandnod.herokuapp.com/api/addContactDetails", {
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
                <Stack direction={"row"} m={5}>
                  <Box color={"gray.600"} fontSize={"sm"}>
                    <FormLabel htmlFor="first-name" fontSize={"sm"}>
                      NAME
                    </FormLabel>
                    <Input
                      w={"300px"}
                      name="name"
                      id="name"
                      placeholder="Enter your name..."
                      fontSize={"sm"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <Text color={"red"} fontSize={"sm"}>
                      {errors.name && touched.name && errors.name}
                    </Text>
                  </Box>
                  <Spacer />
                  <Box color={"gray.600"} fontSize={"sm"} ml={10}>
                    <FormLabel htmlFor="email" fontSize={"sm"}>
                      EMAIL
                    </FormLabel>
                    <Input
                      w={"300px"}
                      id="email"
                      name="email"
                      placeholder="Enter your email..."
                      fontSize={"sm"}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Text color={"red"} fontSize={"sm"}>
                      {errors.email && touched.email && errors.email}
                    </Text>
                  </Box>
                </Stack>
                <Stack direction={"row"} m={5}>
                  <Box color={"gray.600"} fontSize={"sm"}>
                    <FormLabel htmlFor="subject" fontSize={"sm"}>
                      SUBJECT
                    </FormLabel>
                    <Input
                      w={"300px"}
                      id="subject"
                      name="subject"
                      placeholder="Enter subject..."
                      fontSize={"sm"}
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Text color={"red"} fontSize={"sm"}>
                      {errors.subject && touched.subject && errors.subject}
                    </Text>
                  </Box>
                  <Spacer />
                  <Box color={"gray.600"} fontSize={"sm"}>
                    <FormLabel htmlFor="enquiry" fontSize={"sm"}>
                      ENQUIRY TYPE
                    </FormLabel>
                    <Select
                      id="enquiryType"
                      w={"300px"}
                      name="enquiryType"
                      value={values.enquiryType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option> Select a option</option>
                      <option>Advertising</option>
                      <option>Commercial</option>
                      <option>Support</option>
                    </Select>
                    <Text color={"red"} fontSize={"sm"}>
                      {errors.enquiryType &&
                        touched.enquiryType &&
                        errors.enquiryType}
                    </Text>
                  </Box>
                </Stack>
                <Stack direction={"row"} m={5}>
                  <Box color={"gray.600"} fontSize={"sm"}>
                    <FormLabel htmlFor="subject" fontSize={"sm"}>
                      MESSAGES
                    </FormLabel>
                    <Textarea
                      h={"120px"}
                      w={"620px"}
                      id="subject"
                      placeholder="Enter your messages..."
                      fontSize={"sm"}
                    />
                  </Box>
                </Stack>
                <Stack>
                  <Box>
                    <Button
                      disabled={isSubmitting}
                      align={"left"}
                      bgColor={"black"}
                      color={"white"}
                      type="submit"
                      w={"180px"}
                      h={"50px"}
                      ml={5}
                    >
                      Submit
                    </Button>
                  </Box>
                </Stack>
              </FormControl>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default ContactUs;
