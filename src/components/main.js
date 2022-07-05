import Banner from "./Banner";
import Categories from "./Categories";
import Chef from "./chef";
import Header from "./Header";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import TryRecipes from "./tryRecipes";
import SimpleRecipes from "./simpleRecipes";
const Main = () => {
  return (
    <>
      <Header />
      <Banner />
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
