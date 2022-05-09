import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
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

import { useAppState } from "../../contexts/AppState";
import { getProduct } from "../../actions/ProductAction";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const FeaturedProduct = () => {
  const [state, dispatch] = useAppState();
  const { getProductResult, getProductLoading, getProductError } = state;

  useEffect(() => {
    getProduct()(dispatch);
  }, [dispatch]);

  console.log("state", state);

  const handleClick = () => {
    console.log("click beli");
    window.location.href = "/detail";
  };

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
        // onSwiper={(swiper: any) => console.log(swiper)}
      >
        {getProductLoading ? (
          <p>loading . . .</p>
        ) : getProductResult ? (
          getProductResult.map((data: any) => {
            return (
              <SwiperSlide key={data.productID}>
                <Link to={`/product/${data.productID}`} className="Link">
                  <Card>
                    <CardActionArea>
                      <CardMedia>
                        <img
                          src={data.productImage}
                          alt={`Gambar ${data.productID}`}
                        />
                      </CardMedia>
                      <CardContent>
                        <p className="product-name">{data.productName}</p>
                        <p className="product-price">Rp {data.productPrice}</p>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        variant="contained"
                        disableRipple
                        onClick={() => {
                          handleClick();
                        }}
                      >
                        Beli
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </SwiperSlide>
            );
          })
        ) : (
          <p>{getProductError ? getProductError : "Data Kosong."}</p>
        )}
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
