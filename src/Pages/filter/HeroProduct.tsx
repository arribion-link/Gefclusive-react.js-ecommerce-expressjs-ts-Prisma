import { Link } from "react-router-dom";
import hero_img from "../../assets/hero-img.png";
import { BsArrowUpRight } from "react-icons/bs";
// import hero_img_2 from "../../assets/hero-img-3.png"
// import hero_img_3 from "../../assets/hero-img-3.png";
// import hero_img_4 from "../../assets/hero-img-4.png"

const HeroProduct = () => {
  return (
    <div className="flex relative">
      <img src={hero_img} alt="" className="max-w-[23em]" />
      <div className="flex flex-col gap-2 justify-between absolute right-4">
        <div className="w-[3em] h-[3em] bg-slate-200 rounded hover:border border-slate-400 hover:cursor-pointer"></div>
        <div className="w-[3em] h-[3em] bg-slate-200 rounded hover:border border-slate-400 hover:cursor-pointer"></div>
        <div className="w-[3em] h-[3em] bg-slate-200 rounded hover:border border-slate-400 hover:cursor-pointer">
          {/* <img src={hero_img_2} alt="" className="max-w-[10em]" /> */}
        </div>
        <div className="w-[3em] h-[3em] bg-slate-200 rounded hover:border border-slate-400 hover:cursor-pointer">
          {/* <img src={hero_img_3} alt="" className="max-w-[10em]" /> */}
        </div>
        <div className="w-[3em] h-[3em] bg-slate-200 rounded hover:border border-slate-400 hover:cursor-pointer">
          {" "}
          {/* <img src={hero_img_4} alt="" className="max-w-[8em]" /> */}
        </div>
      </div>
      <div className="absolute bottom-1 right-4">
        <h2 className="font-semibold">Lorem, ipsum</h2>
        <Link to="/shop">
          <button className="underline my-[1em] flex items-end gap-2 ">
            Shop Now
            <BsArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroProduct;
