import React, { useEffect } from "react";
import {
  Heading,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Center,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { Formik } from "formik";
import subscribe from "../../images/image.png";
import subscribe_two from "../../images/sub.png";
const Subscribe = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Center>
      <Grid
        align="center"
        pt={30}
        m={20}
        width="1000px"
        mx="0px auto"
        bg=" #e6ffff"
        shadow="md"
        borderWidth="1px"
        borderRadius="20px"
        templateColumns="repeat(3, 1fr)"
      >
        <GridItem>
          <Image boxSize="200px" src={subscribe} mr={20} mt={20} ml={"-10"} />
        </GridItem>
        <GridItem>
          <Heading fontSize="4xl" mt={10} ml={-20}>
            Deliciousness to your inbox
          </Heading>
          <Text mr={5} color="grey" fontSize="sm" align={"center"} mt={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            finibus placerat tellus.
            <Formik
              initialValues={{
                email: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.email) {
                  errors.email = "** Email Field Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "** Invalid email address";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                const formdata = JSON.stringify(values);

                fetch("https://foodielandnod.herokuapp.com/api/subscribe", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: formdata,
                }).then(function (response) {
                  console.log(response);
                  if (response.status === 200) {
                    alert("User Subscribed Successfully");
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
                    <Input
                      id="email"
                      name="email"
                      m={5}
                      placeholder="Your email address..."
                      color="black"
                      variant="filled"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />{" "}
                    <Button
                      disabled={isSubmitting}
                      bgColor="black"
                      color="white"
                      borderRadius="20px"
                      mt={-20}
                      type="submit"
                      ml={60}
                      mb={5}
                    >
                      Subscribe
                    </Button>
                    <Text color={"red"} fontSize={"sm"}>
                      {errors.email && touched.email && errors.email}
                    </Text>
                  </FormControl>
                </form>
              )}
            </Formik>
          </Text>
        </GridItem>
        <GridItem>
          <Image boxSize="200px" src={subscribe_two} ml={135} mt={20} />
        </GridItem>
      </Grid>
    </Center>
  );
};
export default Subscribe;
