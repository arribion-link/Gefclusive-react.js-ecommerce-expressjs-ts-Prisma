// import React from 'react'

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import FlashTimer from "./FlashTimer";
import ProductCard from "../card/ProductCard";

const FlashSale = () => {
  return (
    <section className="min-h-[50vh] px-4 py-5 my-[5em]  bg-slate-100">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start">
        <FlashTimer />
        <div>
          <span className="text-[clamp(2em,4vw,3em)] animate-pulse text-green-700 font-medium">
            TODAY FLASH SALES
          </span>
        </div>
      </div>
      {/*  */}
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] my-[3em] ">
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex items-center justify-between my-6 gap-4">
        <span className="bg-slate-300 rounded p-3">
          <FaArrowLeftLong />
        </span>
        <span className="bg-slate-300 rounded p-3">
          <FaArrowRightLong />
        </span>
      </div>
    </section>
  );
}

export default FlashSale
