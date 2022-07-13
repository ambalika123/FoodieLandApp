import React, { Component } from "react";
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
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsPrinter } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FiShare } from "react-icons/fi";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen2 } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import moment from "moment";
import axios from "axios";
class Banner extends Component {
  render() {
    return (
      <Grid m={20}>
        <Heading fontSize={"5xl"}>Health Japanese Fried Rice</Heading>
        <HStack spacing={20} alignItems={"center"} mt={10}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Avatar name="Kent Dodds" src="chicken.jpg" ml={5} />
            <Grid>
              <GridItem fontWeight={"bold"}>John</GridItem>
              <GridItem>
                23 feb
                {/* {moment(rec.recipeId.userId.createdAt).format("LL")} */}
              </GridItem>
            </Grid>
          </HStack>
          <HStack>
            <RiTimerFill />
            <Grid>
              <GridItem fontWeight={"bold"}>Prep Time</GridItem>
              <GridItem>
                20min
                {/* {moment(rec.recipeId.userId.createdAt).format("LL")} */}
              </GridItem>
            </Grid>
          </HStack>
          <HStack>
            <RiTimerFill />
            <Grid>
              <GridItem fontWeight={"bold"}>Cook Time</GridItem>
              <GridItem>
                20min
                {/* {moment(rec.recipeId.userId.createdAt).format("LL")} */}
              </GridItem>
            </Grid>
          </HStack>
          <HStack>
            <TbToolsKitchen2 />
            <Grid>
              <GridItem fontWeight={"bold"}> Chicken</GridItem>
            </Grid>
          </HStack>
          <HStack>
            <Grid ml={100} mb={20}>
              <GridItem bgColor={"#BEE3F8"} borderRadius={"50px"} p={5}>
                <BsPrinter size={30} />
              </GridItem>
              <GridItem fontWeight={"bold"} align={"center"}>
                Print
              </GridItem>
            </Grid>
          </HStack>
          <HStack>
            <Grid mb={20}>
              <GridItem bgColor={"#BEE3F8"} borderRadius={"50px"} p={5}>
                <FiShare size={30} />
              </GridItem>
              <GridItem fontWeight={"bold"} align={"center"}>
                {" "}
                Share
              </GridItem>
            </Grid>
          </HStack>
        </HStack>
      </Grid>
    );
  }
}

export default Banner;
