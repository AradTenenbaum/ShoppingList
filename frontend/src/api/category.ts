import axios from "axios";
import { BACKEND } from "../utils/constants";

export const getCategories = async () => {
  try {
    const res = await axios.get(`${BACKEND}/category`);
    return res.data;
  } catch (error: any) {
    return { error: "Something went wrong" };
  }
};
