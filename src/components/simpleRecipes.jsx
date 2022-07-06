import React, { Component } from "react";
import axios from "axios";
import Recipe from "./recipe";
import {
  Grid,
  GridItem,
  Text,
  Center,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
class SimpleRecipes extends Component {
  state = {
    recipes: [],
  };
  getRecipes = () => {
    const url = "http://95.111.202.157:8001/api/popularRecipes";
    return axios.get(url);
  };
  async componentDidMount() {
    const { data: recipes } = await this.getRecipes();
    this.setState({ recipes });
    console.log(recipes);
  }
  render() {
    return (
      <>
        <Center>
          <Container centerContent mt={20}>
            <Grid mt={20}>
              <GridItem>
                <Text fontSize="4xl" fontWeight="bold">
                  Simple and Tasty Recipes
                </Text>
                <Text color="grey" fontSize={"sm"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer finibus placerat tellus. Donec augue ligula, dapibus
                  nec lectus a, semper elementum urna.
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Center>
        <SimpleGrid columns={4} spacing={6} m={5}>
          {this.state.recipes.map((rec) => (
            <Recipe
              key={rec._id}
              image={"http://95.111.202.157:8001/" + rec.recipeId.image}
              title={rec.recipeId.title}
              time={rec.recipeId.cookTime}
              category={rec.recipeId.categoryId.categoryName}
            />
          ))}
        </SimpleGrid>
      </>
    );
  }
}

export default SimpleRecipes;
