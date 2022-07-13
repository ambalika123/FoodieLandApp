import React, { Component } from "react";
import axios from "axios";
import Recipe from "../Home/recipe";
import {
  Grid,
  GridItem,
  Text,
  Center,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
class Recipes extends Component {
  state = {
    recipes: [],
  };
  getRecipes = () => {
    const url = "https://foodielandnod.herokuapp.com/api/popularRecipes";
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
          <Container centerContent>
            <Grid>
              <GridItem>
                <Text fontSize="3xl" fontWeight="bold">
                  Check out the delicious recipes
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Center>
        <SimpleGrid columns={4} spacing={6} m={5}>
          {this.state.recipes.slice(1, 5).map((rec) => (
            <Recipe
              key={rec._id}
              image={
                "https://foodielandnod.herokuapp.com/" + rec.recipeId.image
              }
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

export default Recipes;
