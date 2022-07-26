import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import poster from "../../images/poster.png";
import {
  Avatar,
  Heading,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Center,
  Wrap,
  WrapItem,
  Box,
  HStack,
  Flex,
} from "@chakra-ui/react";
const Ingredients = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const url = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";
      const { data: posts } = await axios.get(url);
      setPosts(posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Flex m={5} mt={10}>
        <Box w="680px" boxSize={"700px"} ml="20">
          <Heading fontSize={"3xl"} m={8} ml={0} align="left">
            Ingredients
          </Heading>
          <Heading fontSize={"2xl"} m={8} ml={0} align="left">
            For main dish
          </Heading>
          <Text ml={5} fontSize={"xl"} m={5}>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <Flex
                borderBottom="1px"
                borderColor="gray.300"
                m={5}
                ml={0}
              ></Flex>
              <li>Lorem ipsum dolor sit amet</li>
              <Flex
                borderBottom="1px"
                borderColor="gray.300"
                m={5}
                ml={0}
              ></Flex>
              <li>Lorem ipsum dolor sit amet</li>
              <Flex
                borderBottom="1px"
                borderColor="gray.300"
                m={5}
                ml={0}
              ></Flex>
              <li>Lorem ipsum dolor sit amet</li>
              <Flex
                borderBottom="1px"
                borderColor="gray.300"
                m={5}
                ml={0}
              ></Flex>
              <li>Lorem ipsum dolor sit amet</li>
              <Flex
                borderBottom="1px"
                borderColor="gray.300"
                m={5}
                ml={0}
              ></Flex>
            </ul>
          </Text>
          <Heading fontSize={"2xl"} m={8} ml={0} align="left">
            For the sauce
          </Heading>
          <Text ml={5} fontSize={"xl"} m={5}>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <Flex
                borderBottom="1px"
                borderColor="gray.300"
                m={5}
                ml={0}
              ></Flex>
              <li>Lorem ipsum dolor sit amet</li>
              <Flex
                borderBottom="1px"
                borderColor="gray.300"
                m={5}
                ml={0}
              ></Flex>
              <li>Lorem ipsum dolor sit amet</li>
              <Flex
                borderBottom="1px"
                borderColor="gray.300"
                m={5}
                ml={0}
              ></Flex>
            </ul>
          </Text>
        </Box>
        <Box borderRadius="20">
          <Heading fontSize={"3xl"} mt={5} align="center">
            Other Recipe
          </Heading>
          {posts.slice(1, 4).map((post) => (
            <NavLink to={`/recipes/${post._id}`}>
              <HStack m={5}>
                <Image
                  src={
                    "https://foodielandnod.herokuapp.com/" + post.recipeId.image
                  }
                  overflow="hidden"
                  boxSize="200px"
                  height={"150px"}
                  borderRadius="20"
                  objectFit="cover"
                />
                <Box boxSize={"150px"}>
                  <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
                    {post.recipeId.title}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color="gray.500"
                    align={"left"}
                    mt={5}
                    fontWeight="bold"
                  >
                    By {post.recipeId.userId.firstName}{" "}
                    {post.recipeId.userId.lastName}
                  </Text>
                </Box>
              </HStack>
            </NavLink>
          ))}
          <Image src={poster} w={"350px"} h={"350px"} m={5} />
        </Box>
      </Flex>
    </>
  );
};

export default Ingredients;
