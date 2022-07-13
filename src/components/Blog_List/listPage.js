import { Box } from "@chakra-ui/react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Subscribe from "../common/Subscribe";
import Banner from "./Banner";
import Blogs from "./Blogs";

const ListPage = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Blogs />
      <Subscribe />
      <Footer />
    </Box>
  );
};

export default ListPage;
