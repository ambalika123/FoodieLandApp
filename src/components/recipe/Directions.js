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
const Directions = () => {
  return (
    <>
      <Flex m={5} mt={10} mb={500}>
        <Box ml="20" w="680px" boxSize={"780px"}>
          <Heading fontSize={"3xl"} m={8} ml={0}>
            Directions
          </Heading>
          <Heading fontSize={"2xl"} m={8} ml={0}>
            1. Lorem ipsum dolor sit amet
          </Heading>
          <Text fontSize={"md"} color="gray.600">
            Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
            Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
            vitae nunc bibendum leo elementum porttitor id in felis. Phasellus
            at massa ac justo maximus elementum. Nam tortor nunc, tristique in
            commodo a, facilisis at risus. Suspendisse turpis est, elementum eu
            mi ut, rhoncus ultricies tortor. Fusce tempus nec arcu ornare
            ultricies.
          </Text>
          <Image
            src="cooking.avif"
            mt={10}
            borderRadius={"20px"}
            h={"400px"}
            w={"700px"}
          />
          <Text fontSize={"md"} color="gray.600" mt={10}>
            Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
            Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
            vitae nunc bibendum leo elementum porttitor id in felis. Phasellus
            at massa ac justo maximus elementum. Nam tortor nunc, tristique in
            commodo a, facilisis at risus. Suspendisse turpis est, elementum eu
            mi ut, rhoncus ultricies tortor. Fusce tempus nec arcu ornare
            ultricies.
          </Text>

          <Flex borderBottom="1px" borderColor="gray.300" m={5} ml={0}></Flex>
          <Heading fontSize={"2xl"} m={8} ml={0}>
            2. Lorem ipsum dolor sit amet
          </Heading>
          <Text fontSize={"md"} color="gray.600">
            Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
            Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
            vitae nunc bibendum leo elementum porttitor id in felis. Phasellus
            at massa ac justo maximus elementum. Nam tortor nunc, tristique in
            commodo a, facilisis at risus. Suspendisse turpis est, elementum eu
            mi ut, rhoncus ultricies tortor. Fusce tempus nec arcu ornare
            ultricies.
          </Text>
          <Flex borderBottom="1px" borderColor="gray.300" m={5} ml={0}></Flex>
          <Heading fontSize={"2xl"} m={8} ml={0}>
            3. Lorem ipsum dolor sit amet
          </Heading>
          <Text fontSize={"md"} color="gray.600">
            Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
            Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
            vitae nunc bibendum leo elementum porttitor id in felis. Phasellus
            at massa ac justo maximus elementum. Nam tortor nunc, tristique in
            commodo a, facilisis at risus. Suspendisse turpis est, elementum eu
            mi ut, rhoncus ultricies tortor. Fusce tempus nec arcu ornare
            ultricies.
          </Text>
          <Flex borderBottom="1px" borderColor="gray.300" m={5} ml={0}></Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Directions;
