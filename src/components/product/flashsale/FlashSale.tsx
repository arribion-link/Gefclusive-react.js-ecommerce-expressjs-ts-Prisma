// import React from 'react'

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import FlashTimer from "./FlashTimer";
import ProductCard from "../card/ProductCard";

const FlashSale = () => {
  return (
    <section className="min-h-[50vh] mx-4 my-[5em]  ">
      <div className="flex justify-between items-start">
        <FlashTimer />
        <div>
          <span className="text-4xl text-green-700 font-medium">
            TODAY FLASH SALES
          </span>
          <div className="flex items-center justify-between my-6 gap-4">
            <span className="bg-slate-300 rounded p-3">
              <FaArrowLeftLong />
            </span>
            <span className="bg-slate-300 rounded p-3">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default FlashSale
