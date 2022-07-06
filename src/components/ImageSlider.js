import { Box } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "./Banner";
import { SlideData } from "./SlideData";
// If you want to use your own Selectors look up the Advancaed Story book examples
export default function ImageSlider() {
  return (
    <Box>
      <Banner slides={SlideData} />
    </Box>
  );
}
