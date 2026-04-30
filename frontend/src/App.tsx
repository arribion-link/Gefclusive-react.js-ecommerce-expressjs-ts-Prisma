// import React from 'react'
import Home from "./Pages/home/Home";
import { Routes, Route } from "react-router-dom"
import MainLayout from "./Pages/layout/MainLayout";
import NoNav from "./Pages/layout/NoNav";
import Register from "./Pages/auth/Register";
import WishList from "./Pages/WishList";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/auth/Login";
import Shop from "./Pages/shop/Shop";
import Admin from "./Pages/admin/Admin";
import AdminLayout from "./Pages/layout/AdminLayout";
import AddItem from "./Pages/admin/AddItem";
import ItemList from "./Pages/admin/ItemList";
import Orders from "./Pages/admin/Orders";
import AdminLogin from "./Pages/admin/AdminLogin";
import ProductCart from "./Pages/cart/ProductCart";
import ProductDetails from "./Pages/ProductDetails";
// import NewsletterModel from "./Pages/utils/NewsletterModel";

const App = () => {
  return (
    <>
      {/* <NewsletterModel/> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path={`/shop/:id`} element={<ProductDetails/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/wishlist" element={<WishList />} />
          <Route path="/user/cart" element={<ProductCart />} />
        </Route>

        <Route element={<NoNav />}>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<Register />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/home" element={<Admin />} />
          <Route path="/admin/add-item" element={<AddItem />} />
          <Route path="/admin/item-list" element={<ItemList />} />
          <Route path="/admin/order" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
