import ShopFilter from "../../components/filter/ShopFilter";

const Shop = () => {
  return (
    <section className="min-h-screen mx-4 flex">
      <ShopFilter />
      <div className="flex-4">
        <div className="flex justify-between">
          <h1>All Product</h1>
          <select name="" id="">
            <option value="">Sort by: Relavent</option>
            <option value="">Sort by: Low to High</option>
            <option value="">Sort by: High to Low</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Shop;
