import React, { useState, useEffect } from "react";
import {
  Heading,
  Text,
  Button,
  Box,
  Container,
  Input,
  Center,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pagination from "../Blog_List/Pagination";
import Recipes from "./Recipes";
const Banner = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const getPosts = async () => {
    const url = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";
    let result = await fetch(url);
    result = await result.json();
    setPosts(result);
  };
  useEffect(() => {
    getPosts();
    window.scrollTo(0, 0);
  }, []);

  const searchHandle = async (event) => {
    let key = event.target.value;
    //console.log(key);
    if (key) {
      let result = await fetch(
        `https://foodielandnod.herokuapp.com/api/searcRecipe?key=${key}`
      );
      result = await result.json();
      // console.log(posts);
      if (result) {
        //console.log("hello");
        setPosts(result);
      }
    } else {
      getPosts();
    }
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container>
        <Heading fontSize={"5xl"} align="center" m={5} mt={10}>
          Recipe & Article
        </Heading>
        <Text align="center" color="gray.500" fontSize={"sm"} noOfLines={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          finibus placerat tellus.
        </Text>
        <Box m={5}>
          <Input
            m={3}
            placeholder="Search article,news or recipe..."
            p={8}
            borderRadius="15px"
            fontSize={"xs"}
            onChange={searchHandle}
            borderColor={"black"}
          />
          {/* <Button
            bgColor="black"
            color="white"
            borderRadius="10px"
            p={7}
            // m={20}
          >
            Search
          </Button> */}
        </Box>
      </Container>
      <Recipes posts={currentPosts} />

      <Center>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Center>
    </>
  );
};

export default Banner;
