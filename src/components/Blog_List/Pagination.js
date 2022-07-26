import React, { useEffect } from "react";
import { Button, Center, Wrap, WrapItem } from "@chakra-ui/react";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  function scrollWindow() {
    window.scroll(0, 0);
  }
  function buttonClick(number) {
    paginate(number);
    scrollWindow();
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
                    <Button onClick={() => buttonClick(number)} m={1} size="lg">
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
