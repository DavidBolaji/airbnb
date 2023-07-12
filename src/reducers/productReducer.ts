import { Action } from "redux";
import {
  PRODUCT_LIST_UPDATE,
  PRODUCT_LIST_END_UPDATE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_START_UPDATE,
  PRODUCT_LIST_FILTER,
} from "../constants/constants";
import { Iproduct } from "../models/productmodel";
import { data } from "../data";

export interface ProductListState {
  loading: boolean;
  products?: Iproduct[]; // Change 'any' to the appropriate type for your products
  error?: string;
}

interface ProductListAction extends Action {
  payload?: any; // Change 'any' to the appropriate type for your payload
}

export const productListReducer = (
  state: ProductListState = { loading: false, products: [] },
  action: ProductListAction
): ProductListState => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: [...action.payload] };
    case PRODUCT_LIST_UPDATE:
      state.products = state.products?.map((product: Iproduct) => {
        return product.id === action.payload
          ? { ...product, like: !product.like }
          : { ...product };
      });
      return { loading: false, products: state.products };
    case PRODUCT_LIST_END_UPDATE:
      state.products = state.products?.map((product: Iproduct) => {
        return product.id === action.payload
          ? { ...product, end: !product.end }
          : { ...product };
      });
      return { loading: false, products: state.products };
    case PRODUCT_LIST_START_UPDATE:
      state.products = state.products?.map((product: Iproduct) => {
        return product.id === action.payload
          ? { ...product, start: !product.start }
          : { ...product };
      });
      return { loading: false, products: state.products };
    case PRODUCT_LIST_FILTER:
      // console.log(action.payload);
      state.products = data.products.filter((product: Iproduct) => {
        return product.label === action.payload;
      });
      return { loading: false, products: state.products };
    default:
      return state;
  }
};
