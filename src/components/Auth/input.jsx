import React from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
const Inputs = ({ name, label, error, ...rest }) => {
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>
      <Input {...rest} id={name} name={name} />
      {error && (
        <Box color={"red"} fontSize="sm">
          {error}
        </Box>
      )}
    </FormControl>
  );
};

export default Inputs;
