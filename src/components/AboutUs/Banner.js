import React from "react";
import {
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Box,
  Wrap,
  WrapItem,
  Avatar,
  VStack,
  Center,
} from "@chakra-ui/react";
const Banner = () => {
  return (
    <>
      <Flex m={10}>
        <Box w={"40%"} m={5}>
          <Heading>23 Years Of Experience In Cooking Services</Heading>
          <Text mt={5} fontSize={"md"} color={"gray.500"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </Text>
          <Button mt={10} bgColor="blue.200">
            Discover Now
          </Button>
        </Box>
        <Box w={"50%"}>
          <Image src="chef.jpg" m={5} mr={20} borderRadius={10} />
        </Box>
      </Flex>

      <Heading m={10} mb={5} ml={20}>
        Our Professional Chef
      </Heading>
      <Center>
        <Wrap align={"center"}>
          <VStack>
            <WrapItem>
              <Avatar
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
                size={"2xl"}
                mt={10}
                ml={10}
                mr={10}
              />
            </WrapItem>
            <WrapItem>
              <Text fontWeight={"bold"}>Kentinos Dodds</Text>
            </WrapItem>
            <WrapItem>
              <Text>Senior Chef</Text>
            </WrapItem>
          </VStack>

          <VStack>
            <WrapItem>
              <Avatar
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
                size={"2xl"}
                mt={10}
                ml={10}
                mr={10}
              />
            </WrapItem>
            <WrapItem>
              <Text fontWeight={"bold"}>Ryan Florence</Text>
            </WrapItem>
            <WrapItem>
              <Text>Senior Chef</Text>
            </WrapItem>
          </VStack>

          <VStack>
            <WrapItem>
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
                size={"2xl"}
                mt={10}
                ml={10}
                mr={10}
              />
            </WrapItem>
            <WrapItem>
              <Text fontWeight={"bold"}>Prosper Otemuyiwa</Text>
            </WrapItem>
            <WrapItem>
              <Text>Senior Chef</Text>
            </WrapItem>
          </VStack>

          <VStack>
            <WrapItem>
              <Avatar
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
                size={"2xl"}
                mt={10}
                ml={10}
                mr={10}
              />
            </WrapItem>
            <WrapItem>
              <Text fontWeight={"bold"}>Christian Nwamba</Text>
            </WrapItem>
            <WrapItem>
              <Text>Senior Chef</Text>
            </WrapItem>
          </VStack>

          <VStack>
            <WrapItem>
              <Avatar
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
                size={"2xl"}
                mt={10}
                ml={10}
                mr={10}
              />
            </WrapItem>
            <WrapItem>
              <Text fontWeight={"bold"}>Seguniya Adebayo</Text>
            </WrapItem>
            <WrapItem>
              <Text>Senior Chef</Text>
            </WrapItem>
          </VStack>
        </Wrap>
      </Center>
    </>
  );
};
export default Banner;
