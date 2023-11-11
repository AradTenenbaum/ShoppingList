import axios from "axios";
import { BACKEND } from "../utils/constants";

export const addProduct = async (name: string, category: string) => {
  try {
    const res = await axios.post(`${BACKEND}/product`, { name, category });
    return res.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error)
      return error.response.data;
    return { error: "Something went wrong" };
  }
};

export const deleteProduct = async (name: string, category: string) => {
  try {
    const res = await axios.delete(
      `${BACKEND}/product?name=${name}&category=${category}`
    );
    return res.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error)
      return error.response.data;
    return { error: "Something went wrong" };
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(`${BACKEND}/product`);
    return res.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error)
      return error.response.data;
    return { error: "Something went wrong" };
  }
};
