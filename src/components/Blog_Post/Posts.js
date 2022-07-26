import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Chef from "./Chef";
const Posts = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box>
      <Chef />
    </Box>
  );
};

export default Posts;
