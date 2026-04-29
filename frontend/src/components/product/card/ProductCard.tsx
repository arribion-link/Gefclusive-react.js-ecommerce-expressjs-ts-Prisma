import { FaStar } from "react-icons/fa6";


const ProductCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-2">
      <div className="relative bg-slate-100 mb-3">
        <img src="https://placehold.net/product.svg" alt="" className="rounded-lg min-h-[40vh] bg-slate-300 animate-pulse" />
        <div className="absolute top-2 left-2">
          <button className="bg-amber-600 px-3  rounded-3xl text-white">Wishlist</button>
        </div>
      </div>
      <div>
        <h2>Product Name</h2>
        <div className="flex items-center justify-between">
          <div className="star-container">
            <FaStar color="yellow" />
            <p><span>4.5</span><span>(124k Reviews)</span></p>
          </div>
          <span className="price">
            KES<span>1200</span>
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
