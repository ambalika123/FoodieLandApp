import React, { Component } from "react";
import axios from "axios";
import Recipe from "./recipe";
import { NavLink } from "react-router-dom";
import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
class TryRecipes extends Component {
  state = {
    recipes: [],
  };
  getRecipes = () => {
    const url = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";
    return axios.get(url);
  };
  async componentDidMount() {
    const { data: recipes } = await this.getRecipes();
    this.setState({ recipes });
    //console.log(recipes);
  }
  render() {
    return (
      <>
        <Grid templateColumns="repeat(2, 2fr)" gap={6} m={10} mt={40}>
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

        <SimpleGrid columns={4} spacing={6} m={5}>
          {this.state.recipes.map((rec) => (
            <NavLink to={`/recipes/${rec._id}`}>
              <Recipe
                key={rec._id}
                image={
                  "https://foodielandnod.herokuapp.com/" + rec.recipeId.image
                }
                title={rec.recipeId.title}
                time={rec.recipeId.cookTime}
                category={rec.recipeId.categoryId.categoryName}
              />
            </NavLink>
          ))}
        </SimpleGrid>
      </>
    );
  }
}

export default TryRecipes;
