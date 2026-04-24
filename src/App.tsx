// import React from 'react'
import Home from "./Pages/home/Home";
import { Routes, Route } from "react-router-dom"
import MainLayout from "./Pages/layout/MainLayout";
import NoNav from "./Pages/layout/NoNav";
import Register from "./Pages/auth/Register";
import Blog from "./Pages/blog/Blog";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
        <Route element={<NoNav />}>
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
