import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import {
  LogoUT,
  migelas,
  sarimi,
  asahi,
  maya,
  kikkoman,
  kongbap,
  energen,
  madu,
  sania,
  tropical,
} from "../../assets";

import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./FeaturedProduct.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const FeaturedProduct = () => {
  const slides = [
    {
      id: 1,
      imageURL: migelas,
      name: "Migelas",
      price: "10.000",
      stock: "99",
      discount: "15%",
    },
    {
      id: 2,
      imageURL: sarimi,
      name: "Mie Instan Sarimi",
      price: "10.000",
      stock: "99",
      discount: "15%",
    },
    {
      id: 3,
      imageURL: asahi,
      name: "Sarden Asahi",
      price: "10.000",
      stock: "99",
      discount: "15%",
    },
    {
      id: 4,
      imageURL: maya,
      name: "Sarden maya",
      price: "10.000",
      stock: "99",
      discount: "15%",
    },
    {
      id: 5,
      imageURL: kikkoman,
      name: "Saus Bulgogi",
      price: "10.000",
      stock: "99",
      discount: "15%",
    },
    {
      id: 6,
      imageURL: kongbap,
      name: "Korean Food Kongbap",
      price: "10.000",
      stock: "99",
      discount: "15%",
    },
  ];

  return (
    <div className="container-produk-unggulan">
      <div className="header-produk">
        <h2>Produk Unggulan</h2>
      </div>
      <Swiper
        className="box-swiper"
        id="main"
        spaceBetween={15}
        slidesPerView={5.5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {slides.map((data: any) => {
          return (
            <SwiperSlide key={data.id}>
              <Card >
                <CardActionArea>
                  <CardMedia>
                    <img src={data.imageURL} alt={`Gambar ${data.id}`} />
                  </CardMedia>
                  <CardContent>
                    <p className="product-name">{data.name}</p>
                    <p className="product-price">Rp {data.price}</p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" disableRipple>
                    Beli
                  </Button>
                </CardActions>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="footer-produk">
        <Link className="Link" to="/">
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
