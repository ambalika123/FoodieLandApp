import { Box } from "@chakra-ui/react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Subscribe from "../common/Subscribe";
import Recipes from "../recipe/Recipes";
import ContactUs from "./ContactUs";

const Contact = () => {
  return (
    <Box>
      <Header />
      <ContactUs />
      <Subscribe />
      <Recipes />
      <Footer />
    </Box>
  );
};

export default Contact;
