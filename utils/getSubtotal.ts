import { selectedItem } from "@/types/cartItem";

export const getSubTotal = (cartItems: selectedItem[]): number => {
  const priceArr = cartItems.map(item => ((item.option) ? item.price + item.option.price : item.price))
  const subTotal = priceArr.reduce((prev, curr) => prev + curr);
  return subTotal;
};