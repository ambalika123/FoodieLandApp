import React, { useEffect, useRef } from "react";
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

const Home = () => {
  setTimeout(() => {
    localStorage.removeItem("token");
    window.location = "/signin";
  }, 10000);
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

export default Home;
