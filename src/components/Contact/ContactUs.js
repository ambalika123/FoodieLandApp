import React from "react";
import {
  Heading,
  Image,
  Box,
  Stack,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Select,
  Textarea,
} from "@chakra-ui/react";
const ContactUs = () => {
  return (
    <Flex m={10}>
      <Box width={"400px"}>
        <Image src="Cook-contact.png" />
      </Box>
      <Box width={"600px"}>
        <Heading align="center" fontSize={"5xl"} m={10}>
          Contact Us
        </Heading>
        <FormControl isRequired>
          <Stack direction={"row"} m={5}>
            <Box color={"gray.600"} fontSize={"sm"}>
              <FormLabel htmlFor="first-name" fontSize={"sm"}>
                NAME
              </FormLabel>
              <Input
                w={"300px"}
                id="first-name"
                placeholder="Enter your name..."
                fontSize={"sm"}
              />
            </Box>
            <Spacer />
            <Box color={"gray.600"} fontSize={"sm"} ml={10}>
              <FormLabel htmlFor="email" fontSize={"sm"}>
                EMAIL
              </FormLabel>
              <Input
                w={"300px"}
                id="email"
                placeholder="Enter your email..."
                fontSize={"sm"}
              />
            </Box>
          </Stack>
          <Stack direction={"row"} m={5}>
            <Box color={"gray.600"} fontSize={"sm"}>
              <FormLabel htmlFor="subject" fontSize={"sm"}>
                SUBJECT
              </FormLabel>
              <Input
                w={"300px"}
                id="subject"
                placeholder="Enter subject..."
                fontSize={"sm"}
              />
            </Box>
            <Spacer />
            <Box color={"gray.600"} fontSize={"sm"}>
              <FormLabel htmlFor="enquiry" fontSize={"sm"}>
                ENQUIRY TYPE
              </FormLabel>
              <Select id="enquiry" placeholder="" w={"300px"}>
                <option>Advertising</option>
                <option>Nigeria</option>
              </Select>
            </Box>
          </Stack>
          <Stack direction={"row"} m={5}>
            <Box color={"gray.600"} fontSize={"sm"}>
              <FormLabel htmlFor="subject" fontSize={"sm"}>
                MESSAGES
              </FormLabel>
              <Textarea
                h={"120px"}
                w={"620px"}
                id="subject"
                placeholder="Enter your messages..."
                fontSize={"sm"}
              />
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Button
                align={"left"}
                bgColor={"black"}
                color={"white"}
                type="submit"
                w={"180px"}
                h={"50px"}
                ml={5}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default ContactUs;
