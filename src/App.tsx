import React from "react";
import { Home } from "./view"
import { Routes, Route } from "react-router-dom";
import { BannerSlide, FeaturedProduct } from "./components";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/banner" element={<FeaturedProduct />} />
    </Routes>
  );
};

