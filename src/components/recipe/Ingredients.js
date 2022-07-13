import { Spacer } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import axios from "axios";
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
const Ingredients = () => {
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       const url = "https://foodielandnod.herokuapp.com/api/getAllBlog";
  //       const res = await axios.get(url);
  //       setPosts(res.data);
  //     };

  //     fetchPosts();
  //   }, []);
  return (
    <>
      <Flex m={5} mt={10}>
        {/* {posts.map((rec) => ( */}

        <Box w="680px" boxSize={"780px"} ml="20">
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
        <Box w="400px" h={"600px"} align="right" borderRadius="20" mb={20}>
          <Heading fontSize={"3xl"} mt={5} align="center">
            Other Recipe
          </Heading>
          <HStack m={5} fontSize="l">
            <Image
              src="chicken.jpg"
              w={"300px"}
              h={"130px"}
              borderRadius="20"
            />
            <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
              Chicken Meat Balls with creamy chees..
              <Text fontSize={"md"} color="gray.500" align={"left"} m={5}>
                By Andreas Paula
              </Text>
            </Text>
          </HStack>
          <HStack m={5} fontSize="l">
            <Image
              src="chicken.jpg"
              w={"300px"}
              h={"130px"}
              borderRadius="20"
            />
            <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
              Chicken Meat Balls with creamy chees..
              <Text fontSize={"md"} color="gray.500" align={"left"} m={5}>
                By Andreas Paula
              </Text>
            </Text>
          </HStack>
          <HStack m={5} fontSize="l">
            <Image
              src="chicken.jpg"
              w={"300px"}
              h={"130px"}
              borderRadius="20"
            />
            <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
              Chicken Meat Balls with creamy chees..
              <Text fontSize={"md"} color="gray.500" align={"left"} m={5}>
                By Andreas Paula
              </Text>
            </Text>
          </HStack>
          <Image src="poster.png" w={"350px"} h={"350px"} m={5} mb={10} />
        </Box>

        {/* ))} */}
      </Flex>
    </>
  );
};

export default Ingredients;
