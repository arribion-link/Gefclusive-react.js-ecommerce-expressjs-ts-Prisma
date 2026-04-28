// import React from 'react'
import Home from "./Pages/home/Home";
import { Routes, Route } from "react-router-dom"
import MainLayout from "./Pages/layout/MainLayout";
import NoNav from "./Pages/layout/NoNav";
import Register from "./Pages/auth/Register";
import WishList from "./Pages/WishList";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import WhatNew from "./Pages/WhatNew";
import Login from "./Pages/auth/Login";
import Shop from "./Pages/shop/Shop";
// import NewsletterModel from "./Pages/utils/NewsletterModel";

const App = () => {
  return (
    <>
        {/* <NewsletterModel/> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/what-new" element={<WhatNew />} />
          <Route path="/user/wishlist" element={<WishList />} />
        </Route>
        <Route element={<NoNav />}>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
