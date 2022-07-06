import React from "react";
import {
  Box,
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
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsPlayCircle } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen2 } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";
const Banner = ({ Slides }) => {
  return (
    <Carousel infiniteLoop>
      {Slides.map((slide) => {
        return (
          <Center>
            <Grid
              width="1000px"
              mx="2px auto"
              bgGradient="linear(to-r,#ccffff, #e6ffff)"
              shadow="md"
              borderWidth="1px"
              borderRadius="20px"
              templateColumns="repeat(2, 1fr)"
            >
              <GridItem>
                <Button
                  fontSize={"sm"}
                  bgColor="white"
                  color="black"
                  borderRadius="20px"
                  m={10}
                  mb={4}
                >
                  <CgNotes />
                  Hot Recipes
                </Button>
                <Heading fontSize="5xl" m={5}>
                  Spicy Delicious Chicken Wings
                </Heading>
                <Text m={5} mr={5} color="grey" fontSize={"sm"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer finibus placerat tellus. Donec augue ligula, dapibus
                  nec lectus a, semper elementum urna.
                </Text>

                <Button
                  fontSize={"sm"}
                  bgColor="white"
                  color="black"
                  borderRadius="20px"
                  m={5}
                  mt={3}
                  mb={8}
                >
                  <RiTimerFill m={5} />
                  30 Minutes
                </Button>
                <Button
                  fontSize={"sm"}
                  bgColor="white"
                  color="black"
                  borderRadius="20px"
                  m={5}
                  mt={3}
                  mb={8}
                >
                  <TbToolsKitchen2 />
                  Chicken
                </Button>

                <Wrap>
                  <WrapItem>
                    <Avatar
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                      ml={5}
                    />
                    <Grid ml={5}>
                      <GridItem fontWeight={"bold"}>John Smith</GridItem>
                      <GridItem>15 March 2022</GridItem>
                    </Grid>
                  </WrapItem>
                  <WrapItem>
                    <Button
                      bgColor="black"
                      color="white"
                      borderRadius="10px"
                      mb={5}
                      ml={5}
                      p={8}
                      align="right"
                    >
                      <BsPlayCircle />
                      View Recipes
                    </Button>
                  </WrapItem>
                </Wrap>
              </GridItem>
              <GridItem>
                <Image
                  boxSize="500px"
                  src={slide.image}
                  borderRightRadius="10px"
                />
              </GridItem>
            </Grid>
          </Center>
        );
      })}
    </Carousel>
  );
};
export default Banner;
