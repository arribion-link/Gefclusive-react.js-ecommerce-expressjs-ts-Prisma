import bestseller_drone from "../../assets/bestseller-drone.png"
import ProductCard from "./card/ProductCard";
// import bestseller_watch from "../../assets/bestseller-watch.png"
const BestSelling = () => {
  return (
    <section className="p-4">
      <div className="relative mb-[3em] ">
        <div className="bg-sky-600 flex-2 min-h-[40vh] p-4 rounded">
          <h1 className="text-slate-50 font-bold text-[clamp(1.3em,5vw,2em)]">
            Explore some of our <br /> best selling product
          </h1>
          <img
            src={bestseller_drone}
            alt=""
            className="max-w-[35em] absolute right-0 -top-25"
          />
        </div>
      </div>
      <span className="border-l-4 border-gray-700 rounded-[5px] font-bold text-slate-500 mt-[3em]  p-2">
        Best Selling
      </span>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-[4em] ">
        <ProductCard name={""} description={""} reviews={0} price={0} image={""} />
        <ProductCard name={""} description={""} reviews={0} price={0} image={""} />
        <ProductCard name={""} description={""} reviews={0} price={0} image={""} />
      </div>
    </section>
  );
}

export default BestSelling
