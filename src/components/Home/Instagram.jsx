import React, { Component } from "react";
import Recipe from "./recipe";
import { FaInstagram } from "react-icons/fa";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
class Instagram extends Component {
  state = {
    blogs: [],
  };
  getBlogs = () => {
    const url = "https://foodielandnod.herokuapp.com/api/getAllBlog";
    return axios.get(url);
  };
  async componentDidMount() {
    const { data: blogs } = await this.getBlogs();
    this.setState({ blogs });
    //console.log(blogs);
  }
  render() {
    return (
      <>
        <Box mt={20} align="center">
          <Heading fontSize="4xl" fontWeight="bold">
            Checkout @foodieland on instagram
          </Heading>
          <Text color="grey" fontSize={"sm"} noOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            finibus placerat tellus. Donec augue ligula, dapibus nec lectus a,
            semper elementum urna.
          </Text>
        </Box>
        <Box bgGradient="linear(to-t,#e6ffff, #ffffff)">
          <SimpleGrid columns={4} spacing={6} m={5}>
            {this.state.blogs.slice(1, 5).map((blog) => (
              <Recipe
                key={blog._id}
                image={"https://foodielandnod.herokuapp.com/" + blog.image}
                title={blog.title}
                category={blog.description}
              />
              // <GridItem w="100%" h="10" key={blog._id} m={10}>
              //   <Image
              //     boxSize="200px"
              //     src={"http://95.111.202.157:8001/" + blog.image}
              //   />
              //   <Center fontWeight={"bold"} boxShadow={10} mb={15}>
              //     {blog.categoryName}
              //   </Center>
              // </GridItem>
            ))}
          </SimpleGrid>
          <Stack align="center">
            <a href="https://www.instagram.com/foodieland555/">
              <Button
                bgColor="black"
                color="white"
                borderRadius="10px"
                align="center"
                mb={5}
              >
                Visit our Instagram <FaInstagram p={5} />
              </Button>
            </a>
          </Stack>
        </Box>
        {/* <InstagramMedia
          uri="https://instagr.am/p/Zw9o4/"
          renderItem={({ display_url, video_url, type, caption }) => {
            if (type === "video") {
              return (
                <video poster={display_url} controls>
                  <source src={video_url} type="video/mp4" />
                </video>
              );
            }
            return <img src={display_url} alt={caption} />;
          }}
          renderMediaList={(children) => (
            <div className="swiper">{children}</div>
          )}
          renderError={() => <div>I have failed to parse it</div>}
          renderLoading={() => <div>Loading</div>}
        /> */}
      </>
    );
  }
}

export default Instagram;
