import axios from "axios";
import { ActionType } from "./actionType";

export const addToCart = ( id: number, qty: number ) => async (dispatch: any, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: ActionType.ADD_TO_CART,
        payload: {
            productID: data.productID,
            productName: data.productName,
            productImage: data.producImage,
            productPrice: data.productPrice, 
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id: number) => (dispatch: any, getState) => {
    dispatch({
        type: ActionType.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}