import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const ShopFilter = () => {
  return (
    <aside className="flex-1">
      Filters
      <aside className="flex-1 border border-slate-400 min-h-[75vh] p-3 max-w-[20vw]  ">
        <div className="flex justify-between items-center border-b-2 border-slate-300 py-4">
          <h4 className="font-bold">Product Categories</h4>
          <CiFilter />
        </div>
        <span className="flex gap-2 items-center font-semibold text-2xl">
          <li>Fashion</li>
        </span>
        <ul>
          {/* <li>Men</li>
        <li>Women</li>
        <li>Kids</li> */}
        </ul>
        <span className="flex gap-2 items-center  text-2xl">
          <li>Home & Living</li>
        </span>
        <ul>
          {/* <li>Deco</li>
        <li>Living</li>
        <li>Dining</li>
        <li>Kitchen</li>
        <li>Bedroom</li> */}
        </ul>
        <span className="flex gap-2 items-center font-semibold text-2xl">
          <li>Accessories</li>
          <IoIosArrowDown />
        </span>
        <ul>
          <li>Wearable devices</li>
          <li> Smart home products</li>
          <li>Headphones</li>
          <li> Gaming consoles</li>
        </ul>
        <span className="flex gap-2 items-center font-semibold text-2xl">
          <li>Grocery</li>
          <IoIosArrowDown />
        </span>
        <ul>
          {/* <li>Fresh Goods</li>
        <li>Dietry prefs</li>
        <li>Household essentials</li> */}
        </ul>
      </aside>
    </aside>
  );
}

export default ShopFilter