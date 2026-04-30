import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

import hero_img from "../../assets/hero-img.png";
import hero_img_2 from "../../assets/hero-img-3.png";
import hero_img_3 from "../../assets/hero-img-4.png";
import hero_img_4 from "../../assets/hero-img.png";

type HeroType = {
  id: number;
  image: string;
  name: string;
  description: string;
};

const heroProductData: HeroType[] = [
  {
    id: 1,
    image: hero_img,
    name: "Sneaker",
    description: "Modern top sneakers by Nike",
  },
  {
    id: 2,
    image: hero_img_2,
    name: "Sneaker 2",
    description: "Stylish sneakers for everyday wear",
  },
  {
    id: 3,
    image: hero_img_3,
    name: "Sneaker 3",
    description: "Performance sneakers for athletes",
  },
  {
    id: 4,
    image: hero_img_4,
    name: "Sneaker 4",
    description: "Casual sneakers with comfort",
  },
];

const HeroProduct = () => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div className="flex relative">
      {/* Main Image */}
      <img
        src={heroProductData[currentItem].image}
        alt={heroProductData[currentItem].name}
        className="max-w-[20em]"
      />

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
        <h2 className="font-semibold">{heroProductData[currentItem].name}</h2>
        <p className="text-sm text-gray-600">
          {heroProductData[currentItem].description}
        </p>
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
