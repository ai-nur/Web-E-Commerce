import { ActionType } from "../../actions/actionType";

interface IpState {
  getProductLoading: boolean;
  getProductResult: boolean;
  getProductError: boolean;
}
interface IpdState {
  getProductDetailLoading: boolean;
  getProductDetailResult: boolean;
  getProductDetailError: boolean;
}

interface IAction {
  type: ActionType;
  payload: any;
}

export interface Product {
  productID?: number | null;
  productName: string;
  productPrice: number | null;
  productCartDesc: string;
  productShortDesc: string;
  productLongDesc: string;
  productImage: string;
  productCategoryID: number | null;
  productStock: number | null;
}

export interface ProductCart {
  productID?: number | null;
  productImageURL: string;
  productName: string;
  productPrice: number | null;
  productQuantity: number | null;
  productTotalPrice: number | null;
}

const productReducer = (state: IpState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.GET_PRODUCT:
      return {
        ...state,
        getProductLoading: payload?.loading,
        getProductResult: payload?.data,
        getProductError: payload?.errorMessage,
      };
    default:
      return state;
  }
};

const productDetailReducer = (state: IpdState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.GET_PRODUCT_DETAIL:
      return {
        ...state,
        getProductDetailLoading: payload?.loading,
        getProductDetailResult: payload?.data,
        getProductDetailError: payload?.errorMessage,
      };
    default:
      return state;
  }
};

export { productReducer, productDetailReducer };
