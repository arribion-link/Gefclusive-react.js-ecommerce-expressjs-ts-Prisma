import { FaStar } from "react-icons/fa6";

type productTypes = {
  name: string
  description: string
  reviews: number
  price: number
  image:string
}

const ProductCard = (prop: productTypes) => {
  return (
    <div className="border border-gray-300 rounded-lg p-2">
      <div className="relative bg-slate-100 mb-3">
        <img src={`${prop.image}`} alt="" className="rounded-lg min-h-[40vh] bg-slate-300" />
        <div className="absolute top-2 left-2">
          <button className="bg-amber-600 px-3  rounded-3xl text-white">Wishlist</button>
        </div>
      </div>
      <div>
        <h2 className="font-semibold"> {prop.name} </h2>
        <p className="mb-4 text-slate-400">{ prop.description }</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaStar className="text-amber-600"/>
            <p className="text-[12px]"><span>{prop.reviews}</span><span>({ prop.reviews }k Reviews)</span></p>
          </div>
          <span className="price">
            KES<span>{ prop.price }</span>
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <button className="border border-gray-400 text-gray-700 px-3 py-1 rounded-3xl">Add to Cart</button>
          <button className="bg-black text-white px-3 py-1 rounded-3xl">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
