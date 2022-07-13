import React from "react";
import {
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrap>
      <nav>
        <ul>
          <Wrap align="center">
            <WrapItem>
              <Center>
                {pageNumbers.map((number) => (
                  <li key={number}>
                    <Button onClick={() => paginate(number)} m={1} size="lg">
                      {number}
                    </Button>
                  </li>
                ))}
              </Center>
            </WrapItem>
          </Wrap>
        </ul>
      </nav>
    </Wrap>
  );
};

export default Pagination;
