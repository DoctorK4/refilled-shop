export type product = {
  id: number,
  name: string,
  originPrice: number,
  price: number,
  tag: {
    color?: string,
    text?: "NEW" | "BEST",
  } | "", 
  desc: string | "",
  imageUrl : string,
  productOptions: productOptions[] | [], 
}

export type productOptions = {
  id:number,
  name:string,
  price:number,
  stock:number,
}