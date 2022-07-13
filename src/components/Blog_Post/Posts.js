import { Box } from "@chakra-ui/react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Subscribe from "../common/Subscribe";
import Recipes from "../recipe/Recipes";
import Chef from "./Chef";
import Questions from "./Questions";

const Posts = () => {
  return (
    <Box>
      <Header />
      <Chef />
      <Questions />
      <Subscribe />
      <Recipes />
      <Footer />
    </Box>
  );
};

export default Posts;
