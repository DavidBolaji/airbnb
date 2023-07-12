import { Dispatch } from "redux";
import {
  PRODUCT_LIST_END_UPDATE,
  PRODUCT_LIST_FILTER,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_START_UPDATE,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_UPDATE,
} from "../constants/constants";
import { data } from "../data";

export const getProducts = () => async (dispatch: Dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });

  const time = setTimeout(() => {
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data.products,
    });
    clearTimeout(time);
  }, 1000);
};

export const likeProduct = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: PRODUCT_LIST_UPDATE,
    payload: id,
  });
};

export const filterProduct = (label: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  const time = setTimeout(() => {
    dispatch({
      type: PRODUCT_LIST_FILTER,
      payload: label,
    });
    clearTimeout(time);
  }, 1000);
};

export const toggleEnd = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: PRODUCT_LIST_END_UPDATE,
    payload: id,
  });
};

export const toggleStart = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: PRODUCT_LIST_START_UPDATE,
    payload: id,
  });
};

export const deleteProduct = () => async (dispatch: Dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
};
