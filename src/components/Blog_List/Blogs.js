import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Image,
  Text,
  Box,
  Heading,
  Button,
  GridItem,
  Grid,
  Avatar,
  SimpleGrid,
  Center,
  HStack,
  Flex,
} from "@chakra-ui/react";

import Pagination from "./Pagination";
import BlogLayout from "./BlogLayout";
const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = "https://foodielandnod.herokuapp.com/api/getAllBlog";
      setLoading(true);
      const res = await axios.get(url);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  // console.log(posts);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Flex>
        <Box w="800px">
          <SimpleGrid>
            {currentPosts.map((rec) => (
              <BlogLayout
                key={rec._id}
                // image={"https://foodielandnod.herokuapp.com/" + rec.image}
                title={rec.title}
                subTitle={rec.subTitle}
                category={rec.description}
                name={rec.userId.firstName}
                lname={rec.userId.lastName}
                userImage={rec.userId.Image}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Box w="400px" h={"600px"} align="right" borderRadius="20" mb={20}>
          <Heading fontSize={"3xl"} mt={5} align="center">
            Tasty Recipes
          </Heading>
          <HStack m={5} fontSize="l">
            <Image
              src="chicken.jpg"
              w={"300px"}
              h={"130px"}
              borderRadius="20"
            />
            <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
              Chicken Meat Balls with creamy chees..
              <Text fontSize={"md"} color="gray.500" align={"left"} m={5}>
                By Andreas Paula
              </Text>
            </Text>
          </HStack>
          <HStack m={5} fontSize="l">
            <Image
              src="chicken.jpg"
              w={"300px"}
              h={"130px"}
              borderRadius="20"
            />
            <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
              Chicken Meat Balls with creamy chees..
              <Text fontSize={"md"} color="gray.500" align={"left"} m={5}>
                By Andreas Paula
              </Text>
            </Text>
          </HStack>
          <HStack m={5} fontSize="l">
            <Image
              src="chicken.jpg"
              w={"300px"}
              h={"130px"}
              borderRadius="20"
            />
            <Text fontWeight="bold" noOfLines={3} fontSize={"xl"}>
              Chicken Meat Balls with creamy chees..
              <Text fontSize={"md"} color="gray.500" align={"left"} m={5}>
                By Andreas Paula
              </Text>
            </Text>
          </HStack>
          <Image src="poster.png" w={"350px"} h={"350px"} m={5} mb={10} />
        </Box>
      </Flex>

      <Center>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Center>
    </>
  );
};
export default Blogs;
