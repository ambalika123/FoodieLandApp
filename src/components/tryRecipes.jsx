import React, { Component } from "react";
import axios from "axios";
import { Grid, GridItem, Image, Button, Text } from "@chakra-ui/react";
class TryRecipes extends Component {
  state = {
    recipes: [],
  };
  getRecipes = () => {
    return axios.get("http://95.111.202.157:8001/api/v1/getAllRecipes");
  };
  async componentDidMount() {
    const { data: recipes } = await this.getRecipes();
    this.setState({ recipes });
    console.log(recipes);
  }
  render() {
    return (
      <>
        <Grid templateColumns="repeat(2, 2fr)" gap={6} m={10}>
          <GridItem>
            <Text fontSize="4xl" fontWeight="bold">
              Try this delicious recipe to make your day
            </Text>
          </GridItem>
          <GridItem>
            <Text m={5} mr={5} color="grey" fontSize={"sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              finibus placerat tellus. Donec augue ligula, dapibus nec lectus a,
              semper elementum urna.
            </Text>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} m={10}>
          {this.state.recipes.map((rec) => (
            <GridItem w="100%" h="10" key={rec._id} m={10}>
              <Image
                boxSize={"100px"}
                m={10}
                mb={20}
                w="100px"
                className="card-img-top"
                src={"http://95.111.202.157:8001/" + rec.recipeId.image}
              />
              {rec.title}
            </GridItem>
          ))}
        </Grid>
      </>
    );
  }
}

export default TryRecipes;
