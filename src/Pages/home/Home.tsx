import Products from "../Products";
import Recommend from "../../components/recommendation/Recommend";
import FlashSale from "../../components/product/flashsale/FlashSale";
import Hero from "../../components/Hero";
import BrowseCategories from "./filter/BrowseCategories";
import DiscountBanner from "../../components/banner/DiscountBanner";
import BestSelling from "../../components/product/BestSelling";
const Home = () => {
  return (
    <>
      <Hero />
      <FlashSale />
      <BrowseCategories />
      <Products />
      <BestSelling/>
      <Recommend />
      <DiscountBanner />
    </>
  );
};

export default Home;
