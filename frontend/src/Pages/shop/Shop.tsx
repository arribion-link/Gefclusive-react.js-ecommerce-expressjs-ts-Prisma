
import { Link } from "react-router-dom";
import ShopFilter from "../../components/filter/ShopFilter";
import ProductCard from "../../components/product/card/ProductCard";
import Recommend from "../../components/recommendation/Recommend";

import testData from "../../db/testDB";

const Shop = () => {
  return (
    <section className="min-h-screen ">
      <div className="mx-4 gap-8 flex">
        <ShopFilter />
        <div className="flex-4 mt-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl text-green-900">All product</h1>
            <select
              name=""
              id=""
              className="border border-green-800 rounded px-2 py-1">
              <option value="">Sort by: Relavent</option>
              <option value="">Sort by: Low to High</option>
              <option value="">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 mt-6">
            {
              testData.map((ls, index) => (
                <Link to={`${ls.id}`}>
                  <ProductCard
                    key={index}
                    name={`${ls.name}`}
                    description={`${ls.description}`}
                    reviews={0}
                    price={0}
                    image={`${ls.image}`}
                  />
                </Link>
                ),
              )
            }
          </div>
        </div>
      </div>
      <Recommend />
    </section>
  );
};

export default Shop;
