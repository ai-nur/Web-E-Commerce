import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import {
  banner_1,
  banner_2,
  banner_3,
  banner_4,
  banner_5,
  banner_6,
} from "../../assets";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Banner.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BannerSlide = () => {
  const slides = [
    {
      id: 1,
      imageURL: banner_1,
    },
    {
      id: 2,
      imageURL: banner_2,
    },
    {
      id: 3,
      imageURL: banner_3,
    },
    {
      id: 4,
      imageURL: banner_4,
    },
    {
      id: 5,
      imageURL: banner_5,
    },
    {
      id: 6,
      imageURL: banner_6,
    },
  ];

  return (
    <div className="container">
      <Swiper
        className="box-swiper"
        id="main"
        // spaceBetween={15}
        slidesPerView={1.3273}
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
              <img
                // width="900"
                // height="300"
                src={data.imageURL}
                style={{ listStyle: "none" }}
                alt={`Slide ${data.id}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
