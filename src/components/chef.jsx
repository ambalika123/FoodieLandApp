import React from "react";
import {
  Heading,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";

const Chef = (props) => {
  return (
    <Center>
      <Grid width="1000px" mx="2px auto" templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Heading fontSize="4xl" m={8} mt={150}>
            Everyone can be a chef in their own kitchen
          </Heading>
          <Text m={10} mr={5} color="grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            finibus placerat tellus. Donec augue ligula, dapibus nec lectus a,
            semper elementum urna.
          </Text>
          <Button
            bgColor="black"
            color="white"
            borderRadius="10px"
            m={10}
            mt={4}
          >
            Learn More
          </Button>
        </GridItem>
        <GridItem>
          <Image
            mt={10}
            borderRadius="15px"
            boxSize="500px"
            src="chef.png"
            bgGradient="linear(to-t,#e6ffff, #ffffff)"
          />
        </GridItem>
      </Grid>
    </Center>
  );
};
export default Chef;
