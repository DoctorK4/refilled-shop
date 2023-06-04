import { selectedItem } from "@/types/cartItem";
import { product, productOptions } from "@/types/product";

export const getPayload = (productInfo: product, selectedOptionObj: productOptions | null): selectedItem => {
  const payload = {
    id: productInfo.id,
    name: productInfo.name,
    originPrice: productInfo.originPrice,
    price: productInfo.price,
    tag: productInfo.tag,
    imageUrl: productInfo.imageUrl,
    option: selectedOptionObj,
  };
  return payload;
};