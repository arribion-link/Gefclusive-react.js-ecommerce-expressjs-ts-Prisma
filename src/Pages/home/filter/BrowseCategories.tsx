import cat_fashion_img from "../../../assets/cat-fashion.png"
import cat_electronic_img from "../../../assets/cat-electronics.png"
import cat_living_img from "../../../assets/cat-living.png"
import cat_grocery from "../../../assets/cat-grocery.png"
const BrowseCategories = () => {
  return (
    <section className="min-h-[20vh] mx-4">
      <span className="border-l-4 border-gray-700 rounded-[5px] font-bold text-slate-500  p-2">
        CATEGORIES
      </span>
      <h1 className="my-[1em] text-[clamp(2em,5vw,3em)] font-bold text-center">
        Browse By Category
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 ">
        <div className="bg-slate-300 rounded p-3 min-h-[30vh] cursor-pointer hover:shadow-lg">
          <h1 className="font-bold text-2xl text-slate-600">Fashion</h1>
          <img src={cat_fashion_img} alt="" className="max-w-[10em] " />
        </div>
        <div className="bg-slate-300 rounded p-3 min-h-[30vh] relative cursor-pointer hover:shadow-lg">
          <h1 className="font-bold text-2xl text-slate-800">Electronics</h1>
          <img
            src={cat_electronic_img}
            alt=""
            className="absolute right-0 bottom-0"
          />
        </div>
        <div className="bg-slate-300 rounded p-3 min-h-[30vh] cursor-pointer hover:shadow-lg">
          <h1 className="font-bold text-2xl text-slate-300">Home & Living</h1>
          <img src={cat_living_img} alt="" />
        </div>
        <div className="bg-slate-300 rounded p-3 min-h-[30vh] relative cursor-pointer hover:shadow-lg">
          <h1 className="font-bold text-2xl text-slate-300">
            Grocery & Essentials
          </h1>
          <img src={cat_grocery} alt="" className="absolute bottom-0" />
        </div>
        {/* <div className="bg-slate-300 rounded p-3 min-h-[30vh] ">
        <h1>Pharmaceutical</h1>
      </div> */}
      </div>
    </section>
  );
}

export default BrowseCategories
