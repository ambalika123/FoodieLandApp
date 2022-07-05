import React from "react";

import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Container,
  MenuButton,
  Avatar,
  Nav,
  Spacer,
  Center,
  MenuItem,
  MenuList,
  Menu,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Links = ["Recipes", "Blog", "Contact", "About us"];
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
const Footer = () => {
  return (
    <Box m={100}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text fontWeight="bold">FoodieLand</Text>

        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>
      <Flex borderBottom="1px" borderColor="gray.200">
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
          <Center>
            <Text color={"grey"} fontSize={"sm"} m={5}>
              @2020 Flowbase.Powered By Webflow
            </Text>
          </Center>

          <button>
            <FaFacebookF />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaInstagram />
          </button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
