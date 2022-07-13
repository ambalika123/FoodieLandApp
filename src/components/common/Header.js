import React from "react";
import { NavLink } from "react-router-dom";
import {
  Link,
  Box,
  Flex,
  Text,
  Stack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// const Links = ["Home", "Recipes", "Blog", "Contact", "About us"];
// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );
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
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About Us</NavLink>
            {/* {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))} */}
          </HStack>
        </HStack>
        <Stack
          color={"black"}
          spacing={10}
          // align="center"
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
            <Link href="https://www.instagram.com/">
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
