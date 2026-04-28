import "./recommend.css"
import { FaRightLong, FaLeftLong } from "react-icons/fa6"
// import React from 'react'
import ProductCard from "../product/card/ProductCard"
const Recommend = () => {
  return (
    <section className="bg-slate-100 px-4 py-5 my-[4em] min-h-[50vh]">
      <div className="recommend-header my-[4em] mt-[12em] ">
        <h1 className="text-[clamp(2em,5vw,3em)] font-semibold">Explore our recommendations</h1>
        <p></p>
        <div className="flex items-center gap-8">
          <FaLeftLong />
          <FaRightLong />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default Recommend
