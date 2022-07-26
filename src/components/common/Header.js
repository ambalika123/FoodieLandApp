import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Box, Flex, Text, Stack, HStack } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Header = () => {
  return (
    <Box margin="20px">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text fontWeight="bold" fontStyle={"italic"} fontSize={"xl"}>
          FoodieLand.
        </Text>
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/recipe">Recipes</NavLink>
            <NavLink to="/listpage">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </HStack>
        </HStack>
        <Stack
          color={"black"}
          spacing={10}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["row", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
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
            <Link href="https://www.instagram.com/foodieland555/">
              <FaInstagram />
            </Link>
          </button>
        </Stack>
      </Flex>
      <Flex borderBottom="1px" borderColor="gray.300" mt={10}></Flex>
    </Box>
  );
};

export default Header;
