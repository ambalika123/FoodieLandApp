import { Box } from "@chakra-ui/react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Subscribe from "../common/Subscribe";
import Banner from "./Banner";
import Directions from "./Directions";
import Ingredients from "./Ingredients";
import Nutrition from "./Nutrition";
import Recipes from "./Recipes";

const Recipe = (props) => {
  const recId = props.match.params.id;
  return (
    <Box>
      <Header />
      <Banner recId={recId} />
      <Nutrition recId={recId} />
      <Ingredients />
      <Directions recId={recId} />
      <Subscribe />
      <Recipes recId={recId} />
      <Footer />
    </Box>
  );
};

export default Recipe;
