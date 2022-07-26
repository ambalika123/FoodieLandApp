import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Image,
  Text,
  Box,
  Heading,
  SimpleGrid,
  HStack,
  Flex,
} from "@chakra-ui/react";
import poster from "../../images/poster.png";
import BlogLayout from "./BlogLayout";
import { NavLink } from "react-router-dom";
const Blogs = ({ posts }) => {
  const [recipes, setRecipes] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";
      const res = await axios.get(url);
      setRecipes(res.data);
    };

    fetchRecipes();
  }, []);
  //console.log(posts);
  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Flex>
      <Box w="800px">
        <SimpleGrid>
          {posts.map((rec) => (
            <NavLink to={`/posts/${rec._id}`}>
              <BlogLayout
                key={rec._id}
                image={"https://foodielandnod.herokuapp.com/" + rec.image}
                title={rec.title}
                subTitle={rec.subTitle}
                category={rec.description}
                name={rec.userId.firstName}
                lname={rec.userId.lastName}
                userImage={rec.userId.Image}
              />
            </NavLink>
          ))}
        </SimpleGrid>
      </Box>

      <Box borderRadius="20">
        <Heading fontSize={"3xl"} mt={5} align="left">
          Tasty Recipes
        </Heading>
        {recipes &&
          recipes.slice(1, 4).map((rec) => (
            <NavLink to={`/recipes/${rec._id}`}>
              <HStack m={5}>
                <Image
                  src={
                    rec &&
                    rec.recipeId &&
                    "https://foodielandnod.herokuapp.com/" + rec.recipeId.image
                  }
                  overflow="hidden"
                  boxSize="200px"
                  height={"150px"}
                  borderRadius="20"
                  objectFit="cover"
                />
                <Box boxSize={"150px"}>
                  <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
                    {rec && rec.recipeId && rec.recipeId.title}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color="gray.500"
                    align={"left"}
                    mt={5}
                    fontWeight="bold"
                  >
                    By {rec && rec.recipeId && rec.recipeId.userId.firstName}{" "}
                    {rec && rec.recipeId && rec.recipeId.userId.lastName}
                  </Text>
                </Box>
              </HStack>
            </NavLink>
          ))}
        <Image src={poster} w={"350px"} h={"350px"} m={5} />
      </Box>
    </Flex>

    // {/* <Center>
    //   <Pagination
    //     postsPerPage={postsPerPage}
    //     totalPosts={posts.length}
    //     paginate={paginate}
    //   />
    // </Center> */}
  );
};
export default Blogs;
