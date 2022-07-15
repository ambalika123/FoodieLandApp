import React, { useState, useEffect } from "react";
import {
  Heading,
  Text,
  Button,
  Box,
  HStack,
  Container,
  Flex,
  Input,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsPrinter } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FiShare } from "react-icons/fi";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen2 } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import moment from "moment";
import axios from "axios";
const Banner = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    let result = await axios.get(
      "https://foodielandnod.herokuapp.com/api/getAllBlog"
    );
    // result = await result.json();
    setPosts(result);
  };
  const searchHandle = async (event) => {
    let key = event.target.value;
    // console.log(key);
    if (key) {
      let result = await axios.get(
        `https://foodielandnod.herokuapp.com/api/getAllBlog/${key}`
      );
      // result = await result.json();
      if (result) {
        setPosts(result);
      }
    } else {
      getPosts();
    }
  };
  return (
    <Container>
      <Heading fontSize={"5xl"} align="center" m={5} mt={10}>
        Blog & Article
      </Heading>
      <Text align="center" color="gray.500" fontSize={"sm"} noOfLines={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus
        placerat tellus.
      </Text>
      <Box m={10}>
        <Input
          m={5}
          placeholder="Search article,news or recipe..."
          p={8}
          borderRadius="15px"
          fontSize={"xs"}
          // value={posts}
          onChange={searchHandle}
        />
        <Button bgColor="black" color="white" borderRadius="10px" m={-40} p={7}>
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default Banner;
