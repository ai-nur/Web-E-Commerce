import ProductReducer from "./product"

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
    ProductReducer
})

export { combineReducers, appReducers }