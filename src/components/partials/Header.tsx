import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
    { name: "What new", path: "/what-new" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];
  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-300 bg-slate-100 p-2">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <img src="/e-commerce-logo.png" alt="" className="max-w-[2.5em]" />
            <h1 className="font-bold text-2xl">Gefclusive</h1>
          </div>
        </Link>
        <nav>
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 items-center">
          <FaMagnifyingGlass size={20} />
          <MdOutlineShoppingCart size={20} />
          <Link to="/user/wishlist">
            <CiHeart size={20} className="font-bold" />
          </Link>
          <div>
            <Link to="/auth/register">
              <button className="bg-black text-white py-1 px-4 rounded-full hover:bg-gray-800">
                Sign Up
              </button>
            </Link>
            {/* <img
              src=""
              alt="ES"
              className="bg-slate-200 rounded-full border border-gray-300 py-3 px-2"
            /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
