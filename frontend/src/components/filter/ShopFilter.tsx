import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

type filterDataTypes = {
  id: number;
  filter: string;
  filterOptions: string[];
};

const filterData: filterDataTypes[] = [
  {
    id: 1,
    filter: "Fashion",
    filterOptions: ["Men", "Women", "Kids"],
  },
  {
    id: 2,
    filter: "Home & Living",
    filterOptions: ["Deco", "Living", "Dining", "Kitchen", "Bedroom"],
  },
  {
    id: 3,
    filter: "Accessories",
    filterOptions: [
      "Wearable devices",
      "Smart home products",
      "Headphones",
      "Gaming consoles",
    ],
  },
  {
    id: 4,
    filter: "Grocery",
    filterOptions: ["Fresh Goods", "Dietary prefs", "Household essentials"],
  },
];

const ShopFilter = () => {
  const [openFilterId, setOpenFilterId] = useState<number | null>(null);

  const toggleFilters = (id: number) => {
    setOpenFilterId(openFilterId === id ? null : id);
  };

  return (
    <aside className="flex-1 my-4 sticky top-4 h-fit">
      <div className="flex-1 border border-slate-400 min-h-[75vh] p-3 max-w-[20vw]">
        <div className="flex justify-between items-center py-4">
          <h4 className="font-bold">Product Categories</h4>
          <CiFilter />
        </div>

        {filterData.map((d) => (
          <div key={d.id} className="py-2">
            <span
              className="flex gap-2 items-center font-semibold cursor-pointer border-t border-slate-300"
              onClick={() => toggleFilters(d.id)}>
              {d.filter}
              <GoPlus
                className={`transition-transform ${
                  openFilterId === d.id ? "rotate-180" : ""
                }`}
              />
            </span>

            {openFilterId === d.id && (
              <ul className="ml-4 mt-2 list-disc">
                {d.filterOptions.map((opt, i) => (
                  <li key={i} className="text-sm text-slate-600">
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ShopFilter;