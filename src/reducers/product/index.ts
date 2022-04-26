enum ActionType {
  GET_PRODUCT = "GET_PRODUCT",
}

interface IState {
    getProductLoading: boolean,
    getProductResult: boolean,
    getProductError: boolean,
}

interface IAction {
  type: ActionType;
  payload: any
}

const productReducer = (state:IState, action:IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.GET_PRODUCT:
      return {
        ...state,
        getProductLoading: payload.loading,
        getProductResult: payload.data,
        getProductError: payload.errorMessage,
      };
    default:
      return state;
  }
};

export default productReducer;
