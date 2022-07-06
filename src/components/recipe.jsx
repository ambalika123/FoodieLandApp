import { Image, Text, Box, Heading, Button } from "@chakra-ui/react";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen2 } from "react-icons/tb";
const Recipe = ({ image, title, time, category }) => {
  return (
    <Box p={5} bg="#e6ffff" borderRadius={20} as="article">
      <Image
        h="250px"
        objectFit="fill"
        w="100%"
        src={image}
        alt="stock image"
      />
      <Heading noOfLines={1} size="sm" fontWeight="bold" m={5}>
        {title}
      </Heading>
      <Text noOfLines={1}>
        <Button
          fontSize={"sm"}
          bgColor="white"
          color="black"
          borderRadius="20px"
        >
          <RiTimerFill m={5} />
          {time}
        </Button>
        <Button
          fontSize={"sm"}
          bgColor="white"
          color="black"
          borderRadius="20px"
        >
          <TbToolsKitchen2 />
          {category}
        </Button>
      </Text>
    </Box>
  );
};

export default Recipe;
