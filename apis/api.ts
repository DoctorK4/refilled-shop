import axios from "axios";

class CustomError_Class extends Error {
  response?: {
     data: any;
     status: number;
     headers: string;
  };
}
// const BASE_URL:string = "https://file.refilled.co.kr/assignment/product.json";
const END_POINT:string = "/assignment/product.json";

export const getProductList = async () => {
  try {
    const response = await axios.get(END_POINT, {
      headers: {
        withCredentials: true,
      }
    });
    // console.log(response);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof CustomError_Class){
      console.error(error.response?.data);
    }
  }
};

