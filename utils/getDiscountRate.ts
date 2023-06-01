export const getDistcountRate = (discountPrice:number, originalPrice:number):number => {
  const discountRate = Math.round(100 - ((discountPrice / originalPrice) * 100));
  return discountRate;
};