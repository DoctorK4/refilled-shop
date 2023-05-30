export type product = {
  id: number,
  name: string,
  originPrice: number,
  price: number,
  tag: {
    color: string,
    text: "NEW" | "BEST",
  } | undefined, 
  desc: string | null,
  imageUrl : string,
  productOptions?: productOptions, 
}

type productOptions = {
  id:number,
  name:string,
  price:number,
  stock:number,
}