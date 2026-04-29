import { Link } from "react-router-dom";

import HeroProduct from "./filter/HeroProduct";
const Hero = () => {
  return (
    <section className="my-[1em] mx-4">
      <div className="border border-slate-400 rounded">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" p-4">
            <h1 className="text-[clamp(1.5em,4vw,2.5em)] text-slate-800 font-bold">
              Discover the Best Deals on Our E-commerce Platform
            </h1>
            <p className="text-gray-600 mt-4">
              Shop now and enjoy unbeatable prices on a wide range of products.
              Don't miss out on our exclusive offers and discounts!
            </p>
            <Link to="/shop">
              <button className="font-semibold my-[2em] bg-black text-white px-8 py-1 rounded">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="bg-slate-300  p-4">
            <HeroProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
