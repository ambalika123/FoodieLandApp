import { Box } from "@chakra-ui/react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Subscribe from "../common/Subscribe";
import Banner from "./Banner";
import Recipes from "../recipe/Recipes";

const About = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Subscribe />
      <Recipes />
      <Footer />
    </Box>
  );
};

export default About;
