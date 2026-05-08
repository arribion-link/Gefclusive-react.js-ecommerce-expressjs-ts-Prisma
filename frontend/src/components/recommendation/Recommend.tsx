import { FaRightLong, FaLeftLong } from "react-icons/fa6"

import ProductCard from "../product/card/ProductCard"
const Recommend = () => {
  return (
    <section className="bg-slate-100 px-4 pb-5 mb-[4em] min-h-[50vh]">
      <div className="recommend-header my-[4em] mt-[12em] ">
        <h1 className="text-[clamp(2em,5vw,3em)] font-semibold">
          Explore our recommendations
        </h1>
        <p></p>
        <div className="flex items-center gap-8 my-6 justify-between mx-4">
          <span className="bg-slate-300 p-3 rounded-4xl hover:cursor-pointer text-amber-700">
            <FaLeftLong />
          </span>
          <span className="bg-slate-300 p-3 rounded-4xl hover:cursor-pointer text-amber-700">
            <FaRightLong />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        <ProductCard
          name={""}
          description={""}
          reviews={0}
          price={0}
          image={""}
        />
        <ProductCard
          name={""}
          description={""}
          reviews={0}
          price={0}
          image={""}
        />
        <ProductCard
          name={""}
          description={""}
          reviews={0}
          price={0}
          image={""}
        />
        <ProductCard
          name={""}
          description={""}
          reviews={0}
          price={0}
          image={""}
        />
      </div>
    </section>
  );
}

export default Recommend
