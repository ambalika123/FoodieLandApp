import React from "react";
import {
  Avatar,
  Heading,
  Text,
  Image,
  Box,
  Stack,
  HStack,
  Spacer,
} from "@chakra-ui/react";
const Chef = () => {
  return (
    <Box m={20} align="center">
      <Heading align="center" fontSize={"5xl"}>
        Full Guide to Becoming a Professional Chef
      </Heading>
      <Stack align="center" m={5}>
        <HStack>
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Text fontWeight={"bold"}>John Smith</Text>
          <Spacer />
          <Text> 12 March 2022</Text>
        </HStack>
      </Stack>
      <Text m={10} color="gray.600" mt={10}>
        Proin feugiat tortor ut tellus molestie, sed lacinia dui egestas.
        Quisque ante leo, placerat et ligula in, interdum convallis dui. Nam
        vitae nunc bibendum leo elementum porttitor id in felis. Phasellus at
        massa ac justo maximus elementum.
      </Text>
      <Image src="chef.avif" w={"950px"} h={"500px"} borderRadius={20} />
    </Box>
  );
};

export default Chef;
