import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./DetailProduct.scss";
import { Link } from "react-router-dom";

import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { useAppState } from "../../contexts/AppState";
import { getProductDetail } from "../../actions/ProductAction";
import { Product } from "../../reducers/product";
import { useParams } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="TabPanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const produk: Product = {
  productID: null,
  productName: "",
  productPrice: null,
  productCartDesc: "",
  productShortDesc: "",
  productLongDesc: "",
  productImage: "",
  productCategoryID: null,
  productStock: null,
};

const DetailProduct = () => {
  const [state, dispatch] = useAppState();
  const { getProductDetailResult, getProductDetailLoading, getProductDetailError } = state;
  const data = getProductDetailResult;
  const [value, setValue] = useState(0);
  const [qty, setQty] = useState(1);
  const { id } = useParams()

  useEffect(() => {
    // if (id !== getProductDetailResult.productID) {
      getProductDetail(id)(dispatch);
    // }
  }, [dispatch]);
  
  console.log("data", state)
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleIncrement = () => {
    if (qty === 10) {
      setQty(qty);
    } else {
      const newQty = qty + 1;
      setQty(newQty);
    }
  };
  const handleDecrement = () => {
    if (qty === 1) {
      setQty(qty);
    } else {
      const newQty = qty - 1;
      setQty(newQty);
    }
  };

  return (
    <div className="container-detail">
      <div className="breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">UT Market</Link>
          <Link to="/">Produk</Link>
          <Typography color="text.primary">Produk {data.productID}</Typography>
        </Breadcrumbs>
      </div>
      <Grid container>
        <Grid className="image-detail" item sm={4}>
          <img src={data.productImage} alt={data.productName} />
        </Grid>
        <Grid className="content-detail" item sm={8}>
          <div className="detail-title">
            <h3>{data.productName}</h3>
          </div>
          <hr />
          <div className="detail-price">
            <h1>Rp. {data.productPrice}</h1>
          </div>
          <hr />
          <div className="detail-qty">
            <div className="qty">
              <p>Qty</p>
              <div className="qty-input">
                <IconButton aria-label="decrement" onClick={handleDecrement}>
                  <RemoveIcon />
                </IconButton>
                <p>{qty}</p>
                <IconButton aria-label="increment" onClick={handleIncrement}>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <div className="btn">
              <Button
                className="beli"
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => {
                  window.location.href = "/cart";
                }}
              >
                <p>Beli</p>
              </Button>
              <Button
                className="wishlist"
                variant="contained"
                startIcon={<FavoriteBorderOutlinedIcon />}
              >
                <p>Wishlist</p>
              </Button>
            </div>
          </div>
          <hr />
          <div className="detail-desc">
            <p>{data.productShortDesc}</p>
          </div>
        </Grid>
      </Grid>
      <Box className="Box-Tab" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Deskripsi Produk" />
          <Tab label="Informasi Produk" />
        </Tabs>
        <TabPanel value={value} index={0}>
          {data.productLongDesc}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Information not available
        </TabPanel>
      </Box>
    </div>
  );
};

export default DetailProduct;
