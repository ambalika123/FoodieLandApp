import React, { Component } from "react";
import axios from "axios";
import {
  Grid,
  GridItem,
  Image,
  Button,
  Text,
  Center,
  Container,
  Box,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
class SimpleRecipes extends Component {
  state = {
    recipes: [],
  };
  getRecipes = () => {
    return axios.get("http://95.111.202.157:8001/api/popularRecipes");
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
        <Flex>
          <SimpleGrid columns={4} gap={6}>
            {this.state.recipes.map((rec) => (
              <Box key={rec._id} m={5} bgColor={"#e6ffff"}>
                <Image
                  bgColor={"#e6ffff"}
                  boxSize={"150px"}
                  m={5}
                  //mb={20}
                  borderRadius="5px"
                  className="card-img-top"
                  src={"http://95.111.202.157:8001/" + rec.recipeId.image}
                />
                {rec.recipeId.title}
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </>
    );
  }
}

export default SimpleRecipes;
