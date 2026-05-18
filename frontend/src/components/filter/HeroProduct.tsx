import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

import hero_img from "../../assets/hero-img-1.png";
import hero_img_2 from "../../assets/hero-img-2.png";
import hero_img_3 from "../../assets/hero-img-3.png";
import hero_img_4 from "../../assets/hero-img-4.png";

type HeroType = {
  id: number;
  image: string;
  name: string;
  description: string;
  path: string;
};

const heroProductData: HeroType[] = [
  {
    id: 1,
    image: hero_img,
    name: "Thick Winter Parka Jacket, Ski Coat",
    description: "Modern top sneakers by Nike",
    path: "/skit-coat",
  },
  {
    id: 2,
    image: hero_img_2,
    name: "Water resistant digital Watch",
    description: "Stylish sneakers for everyday wear",
    path: "/digital-watch",
  },
  {
    id: 3,
    image: hero_img_3,
    name: "Skin care natural skin lotion",
    description: "Performance sneakers for athletes",
    path: "/skin-lotion",
  },
  {
    id: 4,
    image: hero_img_4,
    name: "Durable high tech smatphone holder",
    description: "Casual sneakers with comfort",
    path: "/smartphone-holder",
  },
];

const HeroProduct = () => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div className="flex relative">
      {/* Main Image */}
      <div className="min-h-[70vh]">
          <h1 className="text-[clamp(1.4em,5vw,2.5em)] font-bold text-amber-800/30">NOW BEST SELLING</h1>
        <img
          src={heroProductData[currentItem].image}
          alt={heroProductData[currentItem].name}
          className="max-w-[17em]"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-col gap-2 justify-between absolute right-4">
        {heroProductData.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setCurrentItem(index)}
            className={`w-[3em] h-[3em] rounded hover:border border-slate-400 hover:cursor-pointer overflow-hidden 
              ${currentItem === index ? "border-2 border-orange-500" : "bg-slate-200"}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Product Info + CTA */}
      <div className="absolute bottom-1 right-4">
        <h2 className="font-semibold text-[20px] text-amber-600">{heroProductData[currentItem].name}</h2>
        <p className="text-sm text-gray-600">
          {heroProductData[currentItem].description}
        </p>
        <Link to={heroProductData[currentItem].path}>
          <button className="underline my-[1em] flex items-end gap-2 text-2xl">
            Shop Now
            <BsArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroProduct;
