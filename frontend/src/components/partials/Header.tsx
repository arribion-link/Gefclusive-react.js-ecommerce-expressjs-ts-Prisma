import { FaMagnifyingGlass, FaX } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth"
const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];
  const [showSearchbar, setShowSearchbar] = useState(false);
  const toggleSearchBar = () => {
    setShowSearchbar(true);
  }
  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-300 bg-slate-100 p-2">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <img src="/e-commerce-logo.png" alt="" className="max-w-[2.5em]" />
            <h1 className="font-bold text-2xl">Gefclusive</h1>
          </div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
            <a href="/admin" target="_blank">
              <button className="px-4 py-1 hover:cursor-pointer duration-100/90 border border-slate-400 rounded-3xl">
                Admin-panel
              </button>
            </a>
          </ul>
        </nav>
        <div className="flex gap-4 items-center">
          <Link to="/shop" className="hover:text-green-500 duration-400">
            <FaMagnifyingGlass size={20} onClick={toggleSearchBar} />
          </Link>

          <Link to="/user/wishlist">
            <span className="relative hover:text-green-500 duration-400">
              <span className="absolute text-red-500 -top-2 rounded-full px-1 -right-1">
                0
              </span>
              <CiHeart size={20} className="font-bold" />
            </span>
          </Link>
          <Link to="/user/cart">
            <span className="relative hover:text-green-500 duration-400">
              <span className="absolute -top-2 -right-1 text-red-500">1</span>
              <MdOutlineShoppingCart size={20} />
            </span>
          </Link>

          <div className="flex items-center gap-4 ">
            {
              useAuth() ? <span>
              <img
                src="https://placehold.net/avatar.svg"
                alt="jeff"
                className="max-w-[2em] bg-gray-200 border border-slate-500 rounded-full "
              />
            </span>: 
            <Link to="/auth/register">
              <button className="bg-black text-white py-1 px-4 rounded-full hover:bg-gray-800">
                Sign Up
              </button>
            </Link>
            }
           
          </div>
        </div>
      </header>
      {showSearchbar && (
        <div className="bg-slate-200 flex justify-center border-b border-slate-300 ">
          <form action="" className="my-3 flex gap-4 items-center">
            <label htmlFor="search"></label>
            <input
              type="text"
              placeholder="search product"
              className="py-1 px-3 border  border-slate-400 rounded-3xl "
            />
            <span onClick={() => setShowSearchbar(false)}>
              <FaX />
            </span>
          </form>
        </div>
      )}
    </>
  );
};

export default Header;
