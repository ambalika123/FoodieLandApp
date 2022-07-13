import { Box } from "@chakra-ui/react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Subscribe from "../common/Subscribe";
import Banner from "./Banner";
import Directions from "./Directions";
import Ingredients from "./Ingredients";
import Nutrition from "./Nutrition";
import Recipes from "./Recipes";

const Recipe = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Nutrition />
      <Ingredients />
      <Directions />
      <Subscribe />
      <Recipes />
      <Footer />
    </Box>
  );
};

export default Recipe;
