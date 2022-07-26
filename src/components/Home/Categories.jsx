import React, { Component } from "react";
import axios from "axios";
import { Grid, GridItem, Image, Button, Text, Center } from "@chakra-ui/react";
class Categories extends Component {
  state = {
    category: [],
  };
  getCategories = () => {
    const url = "https://foodielandnod.herokuapp.com/api/getAllCategory";
    return axios.get(url);
  };
  async componentDidMount() {
    const { data: category } = await this.getCategories();
    this.setState({ category });
    //console.log(category);
  }
  render() {
    return (
      <>
        <Grid templateColumns="repeat(2, 2fr)" gap={6} m={10}>
          <GridItem>
            <Text fontSize="3xl" fontWeight="bold">
              Categories
            </Text>
          </GridItem>
          <GridItem>
            <Button
              textAlign="right"
              bgColor="blue.100"
              color="black"
              borderRadius="20px"
              m={10}
              mt={4}
              float="right"
            >
              View All Categories
            </Button>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(6, 1fr)" gap={6} m={10}>
          {this.state.category.slice(1, 6).map((cat) => (
            <GridItem w="100%" h="10" key={cat._id} m={10}>
              <Image
                borderRadius={"10px"}
                boxSize="180px"
                src={"https://foodielandnod.herokuapp.com/" + cat.image}
              />
              <Center fontWeight={"bold"} boxShadow={10} mb={15}>
                {cat.categoryName}
              </Center>
            </GridItem>
          ))}
        </Grid>
      </>
    );
  }
}

export default Categories;
