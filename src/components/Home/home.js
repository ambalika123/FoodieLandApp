import React, { Component } from "react";
import Categories from "./Categories";
import Chef from "./chef";
import TryRecipes from "./tryRecipes";
import SimpleRecipes from "./simpleRecipes";
import Instagram from "./Instagram";
import ImageSlider from "./ImageSlider";
import { Box } from "@chakra-ui/react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Subscribe from "../common/Subscribe";
class Home extends Component {
  state = {};
  render() {
//     const { user } = this.props;

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
  }
}
export default Home;
