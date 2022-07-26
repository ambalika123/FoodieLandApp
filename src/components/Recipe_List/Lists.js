import { Box } from "@chakra-ui/react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Subscribe from "../common/Subscribe";
import Banner from "./Banner";
import { useEffect } from "react";

const Lists = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Header />
      <Banner />
      <Subscribe />
      <Footer />
    </Box>
  );
};

export default Lists;
