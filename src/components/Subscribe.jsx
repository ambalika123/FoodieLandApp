import React from "react";
import {
  Heading,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Center,
  Input,
} from "@chakra-ui/react";
const Subscribe = (props) => {
  return (
    <Center>
      <Grid
        m={20}
        width="1000px"
        mx="0px auto"
        bg=" #e6ffff"
        shadow="md"
        borderWidth="1px"
        borderRadius="20px"
        templateColumns="repeat(3, 3fr)"
      >
        <GridItem>
          <Image boxSize="200px" src="image.png" mr={20} mt={20} />
        </GridItem>
        <GridItem>
          <Heading fontSize="3xl" mt={10}>
            Deliciousness to your inbox
          </Heading>
          <Text mr={5} color="grey" fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            finibus placerat tellus. Donec augue ligula, dapibus nec lectus a,
            semper elementum urna.
            <Input
              m={5}
              placeholder="Your email address..."
              color="white"
              variant="filled"
            />
            <Button bgColor="black" color="white" borderRadius="20px" m={-20}>
              Subscribe
            </Button>
          </Text>
        </GridItem>
        <GridItem>
          <Image boxSize="200px" src="sub.png" ml={135} mt={20} />
        </GridItem>
      </Grid>
    </Center>
  );
};
export default Subscribe;
