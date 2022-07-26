import React from "react";
import {
  Avatar,
  Heading,
  Text,
  Image,
  Box,
  Stack,
  Flex,
  Link,
} from "@chakra-ui/react";
import cooking from "../../images/cooking.avif";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Questions = () => {
  return (
    <Flex m={5}>
      <Box ml={20} width={"800px"}>
        <Heading fontSize={"xl"} ml={20} mb={5}>
          How did you start out in the food industry?
        </Heading>
        <Text m={10} color="gray.600" mt={0} fontSize={"sm"} ml={20}>
          Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
          Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
          vitae nunc bibendum leo elementum porttitor id in felis. Phasellus at
          massa ac justo maximus elementum.
        </Text>
        <Heading fontSize={"xl"} ml={20} mb={5} mt={20}>
          What do you like most about your job?
        </Heading>
        <Text m={10} color="gray.600" mt={0} fontSize={"sm"} ml={20}>
          Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
          Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
          vitae nunc bibendum leo elementum porttitor id in felis. Phasellus at
          massa ac justo maximus elementum.
        </Text>
        <Heading fontSize={"xl"} ml={20} mb={5} mt={20}>
          Do you cook at home on your days off?
        </Heading>
        <Image
          src={cooking}
          mt={10}
          borderRadius={"20px"}
          h={"400px"}
          w={"700px"}
          ml={20}
        />
        <Text fontSize={"sm"} color="gray.600" mt={10} ml={20}>
          Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
          Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
          vitae nunc bibendum leo elementum porttitor id in felis. Phasellus at
          massa ac justo maximus elementum. Nam tortor nunc, tristique in
          commodo a, facilisis at risus.
        </Text>
        <Heading fontSize={"xl"} ml={20} mb={5} mt={20}>
          What would your advice be to young people looking to get their foot in
          the door?
        </Heading>
        <Text m={10} color="gray.600" mt={0} fontSize={"sm"} ml={20}>
          Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
          Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
          vitae nunc bibendum leo elementum porttitor id in felis. Phasellus at
          massa ac justo maximus elementum.
        </Text>
        <Box
          bgGradient="linear(to-r, gray.100, gray.50)"
          borderBottom="1px"
          borderTop="1px"
          borderColor="gray.300"
          align={"center"}
          p={10}
          ml={10}
        >
          <Text fontSize={"3xl"} fontWeight={"bold"} fontStyle={"italic"}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ."
          </Text>
        </Box>
        <Heading fontSize={"xl"} ml={20} mb={5} mt={20}>
          What is the biggest misconception that people have about being a
          professional chef?
        </Heading>
        <Text color="gray.600" fontSize={"sm"} ml={20}>
          Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
          Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
          vitae nunc bibendum leo elementum porttitor id in felis. Phasellus at
          massa ac justo maximus elementum.
        </Text>
      </Box>
      <Box width={"200px"} align="center">
        <Stack
          color={"black"}
          spacing={10}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
        >
          <Text fontSize={"sm"} fontWeight={"bold"}>
            SHARE THIS ON:
          </Text>
          <button spacing={10}>
            <Link href="https://www.facebook.com/">
              <FaFacebookF float={"right"} />
            </Link>
          </button>
          <button>
            <Link href="https://twitter.com/login">
              <FaTwitter />
            </Link>
          </button>
          <button>
            <Link href="https://www.instagram.com/">
              <FaInstagram />
            </Link>
          </button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Questions;
