import axios from "axios";
import { ActionType } from "./actionType";

export const getProduct = () => async (dispatch: any) => {
  try {
    dispatch({
      type: ActionType.GET_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const response = await axios.get("http://192.168.43.107:3003/api/products");

    dispatch({
      type: ActionType.GET_PRODUCT,
      payload: {
        loading: false,
        data: response.data,
        errorMessage: false,
      },
    });
  } catch (error:any) {
    dispatch({
      type: ActionType.GET_PRODUCT,
      payload: {
        loading: false,
        data: false,
        errorMessage:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

export const getProductDetail = (id) => async (dispatch: any) => {
  try {
    dispatch({
      type: ActionType.GET_PRODUCT_DETAIL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const { data } = await axios.get(
      `http://192.168.43.107:3003/api/products/${id}`
    );

    dispatch({
      type: ActionType.GET_PRODUCT_DETAIL,
      payload: {
        loading: false,
        data: data,
        errorMessage: false,
      },
    });
  } catch (error:any) {
    dispatch({
      type: ActionType.GET_PRODUCT_DETAIL,
      payload: {
        loading: false,
        data: false,
        errorMessage:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};

// //loading
// dispatch({
//   type: ActionType.GET_PRODUCT,
//   payload: {
//     loading: true,
//     data: false,
//     errorMessage: false,
//   },
// });

// axios({
//   method: "GET",
//   url: "http://192.168.43.107:3003/api/products",
//   timeout: 120000,
// })
//   .then((response) => {
//     dispatch({
//       type: ActionType.GET_PRODUCT,
//       payload: {
//         loading: false,
//         data: response.data,
//         errorMessage: false,
//       },
//     });
//   })

//   .catch((error) => {
//     dispatch({
//       type: ActionType.GET_PRODUCT,
//       payload: {
//         loading: false,
//         data: false,
//         errorMessage: error.message,
//       },
//     });
//   });
