import React from "react";
import {
  HeaderBar,
  BannerSlide,
  FooterBar,
  FeaturedProduct,
  TrendingProduct
} from "../components";

const Home = () => {
  return (
    <>
      <HeaderBar />
      <BannerSlide />
      <FeaturedProduct />
      <TrendingProduct />
      <FooterBar />
    </>
  );
};

export default Home;
