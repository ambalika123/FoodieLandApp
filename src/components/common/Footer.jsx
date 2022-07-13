import React from "react";
import { NavLink } from "react-router-dom";
import {
  Link,
  Box,
  Flex,
  Text,
  Stack,
  Container,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box m={100}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text fontWeight="bold" fontStyle={"italic"} fontSize={"xl"}>
          FoodieLand.
        </Text>
        <HStack
          spacing={8}
          alignItems={"center"}
          fontWeight="bold"
          fontSize={"sm"}
        >
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/recipe">Recipes</NavLink>
            <NavLink to="/listpage">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </HStack>
        </HStack>
      </Flex>
      <Flex borderBottom="1px" borderColor="gray.300">
        <Text color="grey" mb={7} fontSize={"sm"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Flex>
      <Box>
        <Stack
          color={"black"}
          spacing={10}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Container>
            <Text color={"grey"} fontSize={"md"} mt={5}>
              @2020 Flowbase.Powered By Webflow
            </Text>
          </Container>
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
    </Box>
  );
};

export default Footer;
