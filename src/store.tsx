import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducer";

// const cartLocalStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems')!)
//   : [];

// const addressLocalStorage = localStorage.getItem('address')
//   ? JSON.parse(localStorage.getItem('address')!)
//   : {};

// cart: { cartItems: cartLocalStorage },
// address: { address: addressLocalStorage },

const initialState = {};
const middlewares = [thunk];
const reducer = combineReducers({
  productList: productListReducer,
  //   cart: cartReducer,
  //   address: addressReducer,
  //   orderz: orderReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
