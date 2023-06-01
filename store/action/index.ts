import { product } from "@/types/product";

export const addCart = (item:product) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteCart = (item:product) => {
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
};