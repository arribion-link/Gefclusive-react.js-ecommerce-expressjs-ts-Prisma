import { IoIosArrowDown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
const HeroFilter = () => {
  return (
    <aside className="flex-1 border border-slate-400 min-h-[75vh] p-3 max-w-[20vw]  ">
      <div className="flex justify-between items-center border-b-2 border-slate-300 py-4">
        <h4 className="font-bold">Product Categories</h4>
        <CiFilter/>
      </div>
      <li>Fashion</li>
      <IoIosArrowDown />
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <li>Home & Living</li>
      <IoIosArrowDown />
      <ul>
        <li>Deco</li>
        <li>Living</li>
        <li>Dining</li>
        <li>Kitchen</li>
        <li>Bedroom</li>
      </ul>
      <li>Accessories</li>
      <IoIosArrowDown />
      <ul>
        <li>Wearable devices</li>
        <li> Smart home products</li>
        <li>Headphones</li>
        <li> Gaming consoles</li>
      </ul>
      <li>Grocery</li>
      <IoIosArrowDown />
      <ul>
        <li>Fresh Goods</li>
        <li>Dietry prefs</li>
        <li>Household essentials</li>
        <li>Baby Items</li>
      </ul>
    </aside>
  );
};

export default HeroFilter;
