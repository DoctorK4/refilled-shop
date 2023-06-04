import { productOptions } from "./product";

export type selectedItem = {
  id: number,
  name: string,
  originPrice: number,
  price: number,
  tag: {
    color?: string,
    text?: "NEW" | "BEST",
  } | "",
  imageUrl : string,
  option: productOptions | null,
};

export interface AppState {
  cartItems: selectedItem[] | [];
};

export interface AddToCartAction {
  type: 'ADD_ITEM';
  payload: selectedItem;
};

export interface RemoveFromCartAction {
  type: 'DELETE_ITEM';
  payload: selectedItem;
};