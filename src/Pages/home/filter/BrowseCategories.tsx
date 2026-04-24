import cat_fashion_img from "../../../assets/cat-fashion.png"
import cat_electronic_img from "../../../assets/cat-electronics.png"
import cat_living_img from "../../../assets/cat-living.png"
import cat_grocery from "../../../assets/cat-grocery.png"
const BrowseCategories = () => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] min-h-[30vh] gap-4 mx-4">
      <div className="bg-slate-700 rounded p-3 min-h-[40vh] cursor-pointer">
        <h1 className="font-bold text-2xl text-slate-300">Fashion</h1>
        <img src={cat_fashion_img} alt="" className="max-w-[12em] " />
      </div>
      <div className="bg-slate-300 rounded p-3 min-h-[40vh] relative cursor-pointer">
        <h1 className="font-bold text-2xl text-slate-800">Electronics</h1>
        <img
          src={cat_electronic_img}
          alt=""
          className="absolute right-0 bottom-0"
        />
      </div>
      <div className="bg-slate-600 rounded p-3 min-h-[40vh] cursor-pointer">
        <h1 className="font-bold text-2xl text-slate-300">Home & Living</h1>
        <img src={cat_living_img} alt="" />
      </div>
      <div className="bg-slate-500 rounded p-3 min-h-[40vh] relative cursor-pointer">
        <h1 className="font-bold text-2xl text-slate-300">
          Grocery & Essentials
        </h1>
        <img src={cat_grocery} alt="" className="absolute bottom-0" />
      </div>
      {/* <div className="bg-slate-300 rounded p-3 min-h-[30vh] ">
        <h1>Pharmaceutical</h1>
      </div> */}
    </section>
  );
}

export default BrowseCategories
