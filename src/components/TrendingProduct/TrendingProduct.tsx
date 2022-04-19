import React from "react";
import "./TrendingProduct.scss";
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
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

const TrendingProduct = () => {
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
    <div className="container-trending">
      <div className="header-trending">
        <h1>Trending</h1>
      </div>
      <div className="category">
        <Button>New Arrival</Button>
        <Button>Best Seller</Button>
        <Button>Special Offer</Button>
      </div>
      <div className="content-trending">
        <Grid container>
          {slides.map((data: any) => {
            return (
              <Grid item sm={3}>
                <Card>
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
                </Card>{" "}
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default TrendingProduct;
