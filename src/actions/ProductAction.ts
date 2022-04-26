import axios from "axios";

export const GET_PRODUCT = "GET_PRODUCT";

export const getProduct = (dispatch:any) => {
    //loading
    dispatch({
        type: GET_PRODUCT,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        }
    })

    axios({
        method: 'GET',
        url: "http://localhost:3003/api/products",
        timeout: 120000
    })
        .then((response) => {
            dispatch({
                type: GET_PRODUCT,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                }
            })
        })

        .catch((error) => {
            dispatch({
                type: GET_PRODUCT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
}