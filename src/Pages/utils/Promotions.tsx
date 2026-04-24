import { FaPhone } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Promotions = () => {
  return (
    <div className="bg-green-700 p-2 flex justify-between items-center text-slate-200">
      <div className="flex gap-3 items-center  ">
        <FaPhone />
        <h1>+254 99 77 46 53</h1>
      </div>
      <div className="flex items-center gap-4">
        <span>
          <h2> Get 50% Off on Selected Items</h2>
        </span> |
        <Link to="/shop">Shop Now</Link>
      </div>
      <div>
        <select name="" id="">
          <option value="KES">KES</option>
          <option value="USD">USD</option>
        </select>
        <select>
          <option value="english">English</option>
          <option value="Swahili">Swahili</option>
          <option value="french">French</option>
        </select>
      </div>
    </div>
  );
}

export default Promotions
