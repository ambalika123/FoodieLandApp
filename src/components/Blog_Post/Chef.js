import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  Heading,
  Text,
  Image,
  Box,
  Stack,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import Footer from "../common/Footer";
import Subscribe from "../common/Subscribe";
import Recipes from "../recipe/Recipes";
import Questions from "./Questions";
import Header from "../common/Header";
const Chef = (props) => {
  // console.log(props);
  const blogId = props.match.params.id;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = `https://foodielandnod.herokuapp.com/api/getBlog?id=${blogId}`;
      const { data: posts } = await axios.get(url);
      setPosts(posts.data);
    };
    // console.log(posts);
    fetchPosts();
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Box m={20} align="center">
        <>
          <Heading align="center" fontSize={"5xl"}>
            {posts.title}

            {/* Full Guide to Becoming a Professional Chef */}
          </Heading>
          <Stack align="center" m={5}>
            <HStack>
              <Avatar
                name="Segun Adebayo"
                // src="https://bit.ly/prosper-baba"
                src={
                  posts &&
                  posts.userId &&
                  "https://foodielandnod.herokuapp.com/" + posts.userId.Image
                }
              />
              <Text fontWeight={"bold"}>
                {/* Segun Adebayo */}
                {posts && posts.userId && posts.userId.firstName}{" "}
                {posts && posts.userId && posts.userId.lastName}
              </Text>
              <Spacer />
              <Text>
                15 March 2022
                {/* {moment(posts.userId.createdAt).format("LL")} */}
              </Text>
            </HStack>
          </Stack>
          <Text m={10} color="gray.600" mt={10}>
            {posts.description} Nam vitae nunc bibendum leo elementum porttitor
            id in felis. Phasellus at massa ac justo maximus elementum.
          </Text>
          <Image
            src={"https://foodielandnod.herokuapp.com/" + posts.image}
            w={"950px"}
            h={"500px"}
            borderRadius={20}
          />
        </>
      </Box>
      <Questions />
      <Subscribe />
      <Recipes />
      <Footer />
    </>
  );
};
export default Chef;
