import { Link } from "react-router-dom";
import hero_img from "../assets/hero-img.png"
// import hero_img_2 from "../../assets/hero-img-2.png"
// import hero_img_3 from "../../assets/hero-img-3.png";
// import hero_img_4 from "../../assets/hero-img-4.png"
import HeroFilter from "../Pages/home/filter/HeroFilter";
import { BsArrowUpRight } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="flex justify-between gap-6 my-[1em] mx-4">
      <HeroFilter />
      <div className="flex-2 bg-slate-900 p-4 rounded">
        <div className="flex gap-4">
          <div>
            <h1 className="text-[clamp(1.5em,4vw,2.1em)] text-slate-300 font-bold">
              Discover the Best Deals on Our E-commerce Platform
            </h1>
            <p className="text-gray-600 mt-4">
              Shop now and enjoy unbeatable prices on a wide range of products.
              Don't miss out on our exclusive offers and discounts!
            </p>
            <Link to="/shop">
              <button className="underline text-slate-200 my-[2em] flex items-end gap-2 ">
                Shop Now
                <BsArrowUpRight/>
              </button>
            </Link>
          </div>
          <img src={hero_img} alt="" className="max-w-[23em]" />
        </div>
        <div className="flex gap-8">
          {/* <img src={hero_img_2} alt="" className="max-w-[10em]" />
          <img src={hero_img_3} alt="" className="max-w-[10em]" />
          <img src={hero_img_4} alt="" className="max-w-[8em]" /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero
