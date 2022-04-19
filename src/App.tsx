import React from "react";
import { Home, Detail } from "./view"
import { Routes, Route } from "react-router-dom";
import { FeaturedProduct } from "./components";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/banner" element={<Detail />} />
    </Routes>
  );
};

