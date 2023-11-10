import { Categories } from "../interfaces/category.interface";
import { Products } from "../interfaces/product.interface";

export const getObjKeysAmount = (obj: Object) => {
  return Object.keys(obj).length;
};

export const getCategoryAmount = (products: Products) => {
  let amount = 0;
  Object.keys(products).forEach((product) => {
    amount += products[product];
  });
  return amount;
};

export const getProductsAmountFromCategoriesMap = (categories: Categories) => {
  let amount = 0;
  Object.keys(categories).forEach((category) => {
    amount += getCategoryAmount(categories[category]);
  });
  return amount;
};
