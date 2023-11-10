import { Categories } from "../interfaces/category.interface";

export const getObjKeysAmount = (obj: Object) => {
  return Object.keys(obj).length;
};

export const getProductsAmountFromCategoriesMap = (categories: Categories) => {
  let amount = 0;
  Object.keys(categories).forEach((category) => {
    Object.keys(category).forEach((product) => {
      amount += categories[category][product];
    });
  });
  return amount;
};
