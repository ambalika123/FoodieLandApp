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
const Nutrition = () => {
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
      <Flex m={5}>
        {/* {posts.map((rec) => ( */}

        <Box w="680px" boxSize={"780px"} ml="20" overflow={"hidden"}>
          <Image src="recipe.avif" w="700px" h={"600px"} borderRadius={20} />
        </Box>
        <Box
          w="350px"
          h={"600px"}
          align="right"
          bgColor={"#e6ffff"}
          borderRadius="20"
        >
          <Heading fontSize={"3xl"} mt={5} align="center">
            Nutrition Information
          </Heading>
          <HStack m={5} fontSize="l">
            <Text align={"left"} color="gray.600">
              Calories
            </Text>{" "}
            <Spacer />
            <Text fontWeight="bold">219.9 Kcal</Text>
          </HStack>
          <Flex borderBottom="1px" borderColor="gray.300" ml={5} mr={5}></Flex>
          <HStack m={5} fontSize="l">
            <Text align={"left"} color="gray.600">
              Total Fat
            </Text>{" "}
            <Spacer />
            <Text fontWeight="bold">10.7 g</Text>
          </HStack>
          <Flex borderBottom="1px" borderColor="gray.300" ml={5} mr={5}></Flex>
          <HStack m={5} fontSize="l">
            <Text align={"left"} color="gray.600">
              Protein
            </Text>{" "}
            <Spacer />
            <Text fontWeight="bold">7.9 g</Text>
          </HStack>
          <Flex borderBottom="1px" borderColor="gray.300" ml={5} mr={5}></Flex>
          <HStack m={5} fontSize="l">
            <Text align={"left"} color="gray.600">
              Carbohydrates
            </Text>
            <Spacer />
            <Text fontWeight="bold">22.3 g</Text>
          </HStack>
          <Flex borderBottom="1px" borderColor="gray.300" ml={5} mr={5}></Flex>
          <HStack m={5} fontSize="l">
            <Text align={"left"} color="gray.600">
              Cholesterol
            </Text>
            <Spacer />
            <Text fontWeight="bold">37.4 mg</Text>
          </HStack>
          <Flex borderBottom="1px" borderColor="gray.300" ml={5} mr={5}></Flex>
          <HStack mt={36}>
            <Text m={5} color="gray.500" fontSize={"sm"} align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget viverra nunc.
            </Text>
          </HStack>
        </Box>

        {/* ))} */}
      </Flex>
      <Flex ml={10}>
        <Box ml={10} mr={10} color="gray.500" mt={-20}>
          <Text>
            Aliquam ultrices, neque a tincidunt pretium, dui turpis vestibulum
            massa, nec placerat ipsum magna id nulla. Etiam mi justo, euismod
            congue urna non, posuere vehicula lacus. Aenean nec feugiat arcu. Ut
            hendrerit purus non ipsum condimentum, et congue leo aliquam.
            Integer a ante sed nunc aliquet dignissim ac ac nisl. Fusce
            vestibulum ultrices tortor, eu tincidunt tortor scelerisque non.
            Integer lobortis id purus eget posuere. Vivamus ut elit tempus,
            luctus magna id, aliquam velit. Pellentesque viverra vehicula
            varius.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Nutrition;
