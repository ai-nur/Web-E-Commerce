import React, { useEffect, useState } from "react";
import "./Cart.scss";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useAppState } from "../../contexts/AppState";
import { getProduct } from "../../actions/ProductAction";
import { ProductCart } from "../../reducers/product";

const CartComponent = () => {
  const [state, dispatch] = useAppState();
  const { getProductResult, getProductLoading, getProductError } = state;

  const produk: ProductCart = {
    productID: getProductResult?.productID,
    productImageURL: getProductResult?.productImage,
    productName: getProductResult?.productName,
    productPrice: getProductResult?.productPrice,
    productQuantity: 0,
    productTotalPrice: 0,
  };

  const [data, setData] = useState([
    {
      productID: 4,
      productImageURL: "http://192.168.43.107:3003/images/food/sar-ener-coklat.jpg",
      productName: "Energen Sereal & Susu Cokelat 10X34g",
      productPrice: "22.000",
      productQuantity: 0,
      productTotalPrice: 0,
    },
    {
      productID: 5,
      productImageURL: "http://192.168.43.107:3003/images/food/sar-ener-coklat.jpg",
      productName: "Energen Sereal & Susu Cokelat 10X34g",
      productPrice: "22.000",
      productQuantity: 0,
      productTotalPrice: 0,
    },
    {
      productID: 6,
      productImageURL: "http://192.168.43.107:3003/images/food/sar-ener-coklat.jpg",
      productName: "Energen Sereal & Susu Cokelat 10X34g",
      productPrice: "22.000",
      productQuantity: 0,
      productTotalPrice: 0,
    },
  ]);
  console.log(data);
  useEffect(() => {
    getProduct()(dispatch);
  }, [dispatch]);

  // useEffect(() => {
  //   setData(getProductResult ? getProductResult.slice(2, 5) : "Data Kosong");
  // }, [getProductResult]);
  console.log(getProductResult[1]);

  return (
    <div className="container-cart">
      <div className="container-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell><h3>Nama</h3></TableCell>
                <TableCell align="right"><h3>Harga</h3></TableCell>
                <TableCell align="right"><h3>Qty</h3></TableCell>
                <TableCell align="right"><h3>Total</h3></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.productID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img src={row.productImageURL} alt={row.productName} style={{width:"50px", height:"50px"}} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.productName}
                  </TableCell>
                  <TableCell align="right">{row.productPrice}</TableCell>
                  <TableCell align="right">{row.productQuantity}</TableCell>
                  <TableCell align="right">{row.productTotalPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="container-total">
        <h3>Total Belanja</h3>
        <div className="wrapper">
          <div className="subtotal">
            <p>Subtotal :</p>
            <p>Rp 200.000</p>
          </div>
          <div className="subtotal">
            <p>Ongkir :</p>
            <p>Rp 50.000</p>
          </div>
          <hr />
          <div className="total">
            <p>Total :</p>
            <p>Rp. 250.000</p>
          </div>
          <Button variant="contained" color="success">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
