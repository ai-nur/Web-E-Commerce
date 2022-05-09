import React from "react";
import { Home, Detail, Cart } from "./view";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
