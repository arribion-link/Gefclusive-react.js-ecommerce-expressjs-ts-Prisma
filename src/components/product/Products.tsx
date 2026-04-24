import ProductCard from "./card/ProductCard";
import Pagenation from "./Pagenation";
const Products = () => {
  return (
    <section className="mx-4 my-[12em]  ">
      <span className="border-l-4 border-gray-700 rounded-[5px] font-bold text-slate-500  p-2">
       OUR PRODUCTS
      </span>
      <h1 className="mt-[2em] mb-2 text-[clamp(2em,5vw,3em)] text-center font-bold">EXPLORE OUR PRODUCT</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center my-[6em] ">
        <Pagenation />
      </div>
    </section>
  );
};

export default Products;
