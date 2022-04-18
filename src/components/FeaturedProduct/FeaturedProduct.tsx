import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { LogoUT } from "../../assets";

import { Card, CardMedia, CardContent, CardActionArea } from "@mui/material";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./FeaturedProduct.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const FeaturedProduct = () => {
  const slides = [
    {
      id: 1,
      imageURL: LogoUT,
    },
    {
      id: 2,
      imageURL: LogoUT,
    },
    {
      id: 3,
      imageURL: LogoUT,
    },
    {
      id: 4,
      imageURL: LogoUT,
    },
    {
      id: 5,
      imageURL: LogoUT,
    },
    {
      id: 6,
      imageURL: LogoUT,
    },
  ];

  return (
    <div className="container">
      <Swiper
        className="box-swiper"
        id="main"
        spaceBetween={15}
        slidesPerView={5}
        centeredSlides
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image={data.imageURL}
                    alt="green iguana"
                  />
                  <CardContent>
                    <p>Teks</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeaturedProduct;
