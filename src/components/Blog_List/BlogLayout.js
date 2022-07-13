import {
  Image,
  Text,
  Box,
  Heading,
  Button,
  Flex,
  GridItem,
  Grid,
  Avatar,
  Stack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import moment from "moment";
const BlogLayout = ({
  image,
  title,
  name,
  category,
  lname,
  userImage,
  time,
}) => {
  return (
    <>
      <Flex align={"left"}>
        <Stack m={5} align="left">
          <Image
            w={"500px"}
            h={"200px"}
            src={"pizza.avif"}
            alt="stock image"
            borderRadius={10}
          />
        </Stack>

        <VStack m={10} align={"left"}>
          <Heading size="md" fontWeight="bold" align="left">
            {title}
          </Heading>

          <Text align={"left"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            metus placerat, vestibulum purus ut, ultrices libero.
          </Text>

          <GridItem>
            <Avatar
              name="Kent Dodds"
              src={"http://95.111.202.157:8001/" + userImage}
            />
            {name} {lname}
            {moment(time).format("LL")}
          </GridItem>
        </VStack>
      </Flex>
    </>
  );
};
{
  /* <Grid
        borderRadius={20}
        templateColumns="repeat(2, 1fr)"
        align="right"
        ml={20}
      >
        <GridItem>
          <Image
            h="200px"
            src="chicken.jpg"
            alt="stock image"
            boxSize={"150px"}
            borderRadius={"20px"}
          />
        </GridItem>

        <GridItem align="center">
          <Heading size="sm" fontWeight="bold">
            {title}
          </Heading>
          <Text mt={5}>
            By {name} {lname}
          </Text>
        </GridItem>
      </Grid> */
}

export default BlogLayout;
