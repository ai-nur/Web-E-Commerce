import React from "react";
import "./DetailProduct.scss";
import { Link } from "react-router-dom";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import { migelas } from "../../assets";

const DetailProduct = () => {
  return (
    <div className="container-detail">
      <div className="breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">UT Market</Link>
          <Link to="/produk/">Produk</Link>
          <Typography color="text.primary">Produk 1</Typography>
        </Breadcrumbs>
      </div>
      <Grid container>
        <Grid className="image-detail" item sm={4}>
          <img src={migelas} alt={migelas} />
        </Grid>
        <Grid className="content-detail" item sm={8}>
          <div className="detail-title">
            
          </div>
          <div className="detail-price"></div>
          <div className="detail-qty"></div>
          <div className="detail-desc"></div>
        </Grid>
      </Grid>
      {/* <div className="box-detail">
        <div className="image-detail">
        </div>
        <div className="content-detail">
        </div>
      </div> */}
    </div>
  );
};

export default DetailProduct;
