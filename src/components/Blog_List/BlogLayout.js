import {
  Image,
  Text,
  Heading,
  Flex,
  GridItem,
  Avatar,
  Stack,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
const BlogLayout = ({ image, title, name, lname, userImage, time }) => {
  return (
    <>
      <Flex align={"left"}>
        <Stack m={5} align="left" w={"40%"}>
          <Image
            w={"500px"}
            h={"200px"}
            src={image}
            alt="image"
            borderRadius={10}
          />
        </Stack>

        <VStack m={10} align={"left"} w={"60%"}>
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
              src={"https://foodielandnod.herokuapp.com/" + userImage}
            />
            {name} {lname} {moment(time).format("LL")}
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
