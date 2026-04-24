
import Products from "../../components/product/page/Products"
import Recommend from "../../components/recommendation/Recommend"
import Banner from "../../components/banner/Banner"

import FlashSale from "../../components/product/flashsale/FlashSale"
import Hero from "./Hero"
import BrowseCategories from "./filter/BrowseCategories"
const Home = () => {
  return (
    <>
      <Hero />
      <FlashSale />
      <BrowseCategories/>
      <Products/>
      <Recommend />
      <Banner />
    </>
  )
}

export default Home
