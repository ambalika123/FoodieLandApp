import React, { useState, useEffect } from "react";
import poster from "../../images/poster.png";
import {
  Image,
  Text,
  Box,
  Heading,
  SimpleGrid,
  HStack,
  Flex,
  GridItem,
  Avatar,
  Stack,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { NavLink } from "react-router-dom";
const Recipes = ({ posts }) => {
  console.log(posts);
  return (
    <Flex>
      <Box w="800px">
        <SimpleGrid>
          {posts &&
            posts.map((rec) => (
              <NavLink to={`/recipes/${rec._id}`}>
                <Flex align={"left"}>
                  <Stack m={5} align="left" w={"40%"}>
                    <Image
                      w={"500px"}
                      h={"200px"}
                      src={
                        rec &&
                        rec.recipeId &&
                        "https://foodielandnod.herokuapp.com/" +
                          rec.recipeId.image
                      }
                      alt="image"
                      borderRadius={10}
                    />
                  </Stack>

                  <VStack m={10} align={"left"} w={"50%"}>
                    <Heading size="md" fontWeight="bold" align="left">
                      {rec && rec.recipeId && rec.recipeId.title}
                    </Heading>

                    <Text align={"left"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis id metus placerat, vestibulum purus ut, ultrices
                      libero.
                    </Text>

                    <GridItem>
                      <Avatar
                        name="Kent Dodds"
                        src={
                          rec &&
                          rec.recipeId &&
                          "https://foodielandnod.herokuapp.com/" +
                            rec.recipeId.userId.Image
                        }
                      />
                      {rec && rec.recipeId && rec.recipeId.userId.firstName}{" "}
                      {rec && rec.recipeId && rec.recipeId.userId.lastName}{" "}
                      {moment(
                        rec &&
                          rec.recipeId &&
                          rec.recipeId.userId &&
                          rec.recipeId.userId.createdAt
                      ).format("LL")}
                    </GridItem>
                  </VStack>
                </Flex>
                {/* <RecipeLayout

                  key={rec._id}
                  image={
                    rec &&
                    rec.recipeId &&
                    "https://foodielandnod.herokuapp.com/" + rec.recipeId.image
                  }
                  title={rec && rec.recipeId && rec.recipeId.title}
                  subTitle={rec && rec.recipeId && rec.recipeId.title}
                  category={rec && rec.recipeId && rec.recipeId.description}
                  name={rec && rec.recipeId && rec.recipeId.userId.firstName}
                  lname={rec && rec.recipeId && rec.recipeId.userId.lastName}
                  userImage={rec && rec.recipeId && rec.recipeId.userId.Image}
                /> */}
              </NavLink>
            ))}
        </SimpleGrid>
      </Box>

      <Box borderRadius="20">
        <Heading fontSize={"3xl"} mt={5} align="left">
          Tasty Recipes
        </Heading>
        {posts &&
          posts.slice(1, 4).map((post) => (
            <NavLink to={`/recipes/${post._id}`}>
              <HStack m={5}>
                <Image
                  src={
                    post &&
                    post.recipeId &&
                    "https://foodielandnod.herokuapp.com/" + post.recipeId.image
                  }
                  overflow="hidden"
                  boxSize="200px"
                  height={"150px"}
                  borderRadius="20"
                  objectFit="cover"
                />
                <Box boxSize={"150px"}>
                  <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
                    {post && post.recipeId && post.recipeId.title}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color="gray.500"
                    align={"left"}
                    mt={5}
                    fontWeight="bold"
                  >
                    By {post && post.recipeId && post.recipeId.userId.firstName}{" "}
                    {post && post.recipeId && post.recipeId.userId.lastName}
                  </Text>
                </Box>
              </HStack>
            </NavLink>
          ))}
        <Image src={poster} w={"350px"} h={"350px"} m={5} />
      </Box>
    </Flex>
  );
};
export default Recipes;
