import Categories from "./Categories";
import Chef from "./chef";
import Header from "./Header";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import TryRecipes from "./tryRecipes";
import SimpleRecipes from "./simpleRecipes";
import Instagram from "./Instagram";
import ImageSlider from "./ImageSlider";
import Banner from "./Banner";

const Main = () => {
  return (
    <>
      <Header />
      <Instagram />
      {/* <Banner /> */}
      <ImageSlider />
      <Categories />
      <SimpleRecipes />
      <Chef />
      <TryRecipes />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Main;
