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
  Link,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsPlayCircle } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen2 } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import moment from "moment";
import axios from "axios";
import { NavLink } from "react-router-dom";
class Banner extends Component {
  state = {
    images: [],
  };

  getImages = () => {
    const url = "https://foodielandnod.herokuapp.com/api/popularRecipes";
    return axios.get(url);
  };
  async componentDidMount() {
    const { data: images } = await this.getImages();
    this.setState({ images });
    //console.log(images);
  }
  render() {
    return (
      <Carousel infiniteLoop>
        {this.state.images.map((rec) => {
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
                  <Heading fontSize="5xl" m={5} noOfLines={2}>
                    {rec.recipeId.title}
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
                    {rec.recipeId.cookTime}
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
                    {rec.recipeId.categoryId.categoryName}
                  </Button>

                  <Wrap>
                    <WrapItem>
                      <Avatar
                        name="Kent Dodds"
                        src={
                          "https://foodielandnod.herokuapp.com/" +
                          rec.recipeId.userId.Image
                        }
                        ml={5}
                      />
                      <Grid ml={5}>
                        <GridItem fontWeight={"bold"}>
                          {rec.recipeId.userId.firstName}
                        </GridItem>
                        <GridItem>
                          {moment(rec.recipeId.userId.createdAt).format("LL")}
                        </GridItem>
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
                        <NavLink to="/recipe">View Recipes</NavLink>
                      </Button>
                    </WrapItem>
                  </Wrap>
                </GridItem>
                <GridItem key={rec.recipeId._id}>
                  <Image
                    boxSize="500px"
                    src={
                      "https://foodielandnod.herokuapp.com/" +
                      rec.recipeId.image
                    }
                    borderRightRadius="10px"
                  />
                </GridItem>
              </Grid>
            </Center>
          );
        })}
      </Carousel>
    );
  }
}

export default Banner;
