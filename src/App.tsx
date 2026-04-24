// import React from 'react'
import Home from "./Pages/home/Home";
import { Routes, Route } from "react-router-dom"
import MainLayout from "./Pages/layout/MainLayout";
import NoNav from "./Pages/layout/NoNav";
import Register from "./Pages/auth/Register";
import Blog from "./Pages/blog/Blog";
import WishList from "./Pages/WishList";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import WhatNew from "./Pages/WhatNew";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/what-new" element={<WhatNew />} />
          <Route path="/user/wishlist" element={<WishList />} />
        </Route>
        <Route element={<NoNav />}>
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
