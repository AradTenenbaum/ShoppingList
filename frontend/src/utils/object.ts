import { Categories } from "../interfaces/category.interface";
import { Products } from "../interfaces/product.interface";

export const getObjKeysAmount = (obj: Object) => {
  return Object.keys(obj).length;
};
