import { SITE_URL } from "../../config";
import {
  ADD_GOOD,
  DELETE_GOOD,
  GET_GOOD,
  GET_GOODS,
  FILTER_GOODS,
  FILTER_GOODS_SAGA,
} from "../types/goodTypes";

export const getGoods = (goods) => {
  return {
    type: GET_GOODS,
    payload: goods,
  };
};

export const getGood = (good) => {
  return {
    type: GET_GOOD,
    payload: good,
  };
};

export const addGood = (good) => {
  return {
    type: ADD_GOOD,
    payload: good,
  };
};

export const deleteGood = (good) => {
  return {
    type: DELETE_GOOD,
    payload: good,
  };
};

export const getGoodsFromServer = (id, sorting, searchResult) => {
  if (searchResult) {
    if (sorting === "price") {
      return (dispatch) =>
        dispatch(getGoods(searchResult.sort((a, b) => a.price - b.price)));
    } else if (sorting === "price_desc") {
      return (dispatch) =>
        dispatch(getGoods(searchResult.sort((a, b) => b.price - a.price)));
    } else if (sorting === "rating") {
      return (dispatch) =>
        dispatch(getGoods(searchResult.sort((a, b) => b.rating - a.rating)));
    } else
      return (dispatch) =>
        dispatch(getGoods(searchResult.sort((a, b) => a.price - b.price)));
  } else {
    if (sorting === "price") {
      return (dispatch) => {
        fetch(`${SITE_URL}api/v1/categories/${id}`)
          .then((response) => response.json())
          .then((goodsFromServer) =>
            dispatch(
              getGoods(goodsFromServer.sort((a, b) => a.price - b.price))
            )
          );
      };
    } else if (sorting === "price_desc") {
      return (dispatch) => {
        fetch(`${SITE_URL}api/v1/categories/${id}`)
          .then((response) => response.json())
          .then((goodsFromServer) =>
            dispatch(
              getGoods(goodsFromServer.sort((a, b) => b.price - a.price))
            )
          );
      };
    } else if (sorting === "rating") {
      return (dispatch) => {
        fetch(`${SITE_URL}api/v1/categories/${id}`)
          .then((response) => response.json())
          .then((goodsFromServer) =>
            dispatch(
              getGoods(goodsFromServer.sort((a, b) => b.rating - a.rating))
            )
          );
      };
    } else
      return (dispatch) => {
        fetch(`${SITE_URL}api/v1/categories/${id}`)
          .then((response) => response.json())
          .then((goodsFromServer) =>
            dispatch(
              getGoods(goodsFromServer.sort((a, b) => a.price - b.price))
            )
          );
      };
  }
};

export const getGoodDetailsFromServer = (id) => {
  return (dispatch) => {
    fetch(`${SITE_URL}api/v1/goods/${id}`)
      .then((response) => response.json())
      .then((oneGoodFromServer) => dispatch(getGood(oneGoodFromServer)));
  };
};

export const filterGoods = (input) => ({
  type: FILTER_GOODS,
  payload: input,
});

export const filterGoodsSaga = (input) => ({
  type: FILTER_GOODS_SAGA,
  payload: input,
});

