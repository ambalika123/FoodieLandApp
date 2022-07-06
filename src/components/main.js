import Categories from "./Categories";
import Chef from "./chef";
import Header from "./Header";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import TryRecipes from "./tryRecipes";
import SimpleRecipes from "./simpleRecipes";
import Instagram from "./Instagram";
import ImageSlider from "./ImageSlider";
import { Box } from "@chakra-ui/react";
const Main = () => {
  return (
    <>
      <Box>
        <Header />
        <ImageSlider />
        <Categories />
        <SimpleRecipes />
        <Chef />
        <Instagram />
        <TryRecipes />
        <Subscribe />
        <Footer />
      </Box>
    </>
  );
};
export default Main;
