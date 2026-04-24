import "./recommend.css"
import { FaRightLong, FaLeftLong } from "react-icons/fa6"
// import React from 'react'
import ProductCard from "../product/card/ProductCard"
const Recommend = () => {
  return (
    <section className="recommend-section">
      <div className="recommend-header my-[4em] mt-[12em] ">
        <h1 className="text-[clamp(2em,5vw,3em)] font-semibold">Explore our recommendations</h1>
        <p></p>
        <div className="flex items-center gap-8">
          <FaLeftLong />
          <FaRightLong />
        </div>
      </div>
      <div className="recommend-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default Recommend
