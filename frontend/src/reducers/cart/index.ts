import { ActionType } from "../../actions/actionType";

interface IState {
  cartItems: any[];
}

interface IAction {
  type: ActionType;
  payload: any;
}

const cartReducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.ADD_TO_CART:
      const item = payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
