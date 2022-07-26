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
  Spacer,
  Stack,
} from "@chakra-ui/react";
const Directions = (props) => {
  const [posts, setPosts] = useState([]);
  const recipeId = props.recId;
  useEffect(() => {
    const fetchPosts = async () => {
      const url = `https://foodielandnod.herokuapp.com/api/recipeDetails?id=${props.recId}`;
      const { data: posts } = await axios.get(url);
      setPosts(posts.data.direction);
    };
    fetchPosts();
  }, [recipeId]);
  return (
    <>
      <Stack m={5} ml="20" mt={"-40"}>
        <Heading fontSize={"3xl"} m={8} ml={0}>
          Directions
        </Heading>
        {posts.map((post) => (
          <Box w="680px">
            <Heading fontSize={"2xl"} m={8} ml={0} mt={0}>
              {post.directionTitle}
            </Heading>
            <Text fontSize={"md"} color="gray.600">
              {post.directionDescription}
            </Text>
            <Image
              src={"https://foodielandnod.herokuapp.com/" + post.directionImage}
              mt={5}
              borderRadius={"20px"}
              h={"300px"}
              w={"400px"}
              alt="image"
            />

            {/* <Text fontSize={"md"} color="gray.600" mt={10}>
              Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
              Quisque ante leo, placerat et ligula in, interdum convallis dui.
              Nam vitae nunc bibendum leo elementum porttitor id in felis.
              Phasellus at massa ac justo maximus elementum. Nam tortor nunc,
              tristique in commodo a, facilisis at risus. Suspendisse turpis
              est, elementum eu mi ut, rhoncus ultricies tortor. Fusce tempus
              nec arcu ornare ultricies.
            </Text>
            <Flex borderBottom="1px" borderColor="gray.300" m={5} ml={0}></Flex>
            <Heading fontSize={"2xl"} m={8} ml={0}>
              2. Lorem ipsum dolor sit amet
            </Heading>
            <Text fontSize={"md"} color="gray.600">
              Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
              Quisque ante leo, placerat et ligula in, interdum convallis dui.
              Nam vitae nunc bibendum leo elementum porttitor id in felis.
              Phasellus at massa ac justo maximus elementum. Nam tortor nunc,
              tristique in commodo a, facilisis at risus. Suspendisse turpis
              est, elementum eu mi ut, rhoncus ultricies tortor. Fusce tempus
              nec arcu ornare ultricies.
            </Text>
            <Flex borderBottom="1px" borderColor="gray.300" m={5} ml={0}></Flex>
            <Heading fontSize={"2xl"} m={8} ml={0}>
              3. Lorem ipsum dolor sit amet
            </Heading>
            <Text fontSize={"md"} color="gray.600">
              Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
              Quisque ante leo, placerat et ligula in, interdum convallis dui.
              Nam vitae nunc bibendum leo elementum porttitor id in felis.
              Phasellus at massa ac justo maximus elementum. Nam tortor nunc,
              tristique in commodo a, facilisis at risus. Suspendisse turpis
              est, elementum eu mi ut, rhoncus ultricies tortor. Fusce tempus
              nec arcu ornare ultricies.
            </Text> */}
            <Flex borderBottom="1px" borderColor="gray.300" m={5} ml={0}></Flex>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Directions;
