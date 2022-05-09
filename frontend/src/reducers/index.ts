import { productReducer, productDetailReducer } from "./product"

export const initialState = {
  getProductResult: false,
  getProductError: false,
  getProductLoading: false,
  getProductDetailResult: false,
  getProductDetailError: false,
  getProductDetailLoading: false,
}

const combineReducers = (reducers:any) => {
  return (state:any, action:any) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
    productReducer, 
    productDetailReducer,
})

export { combineReducers, appReducers }