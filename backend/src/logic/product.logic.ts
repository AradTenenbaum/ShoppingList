import { isCategoryExists } from "../services/category.service";
import {
  addProductToDataSource,
  deleteProductFromDataSource,
  getProductsFromDataSource,
} from "../services/product.service";

export const getProductsLogic = async () => {
  return await getProductsFromDataSource();
};

export const addProductLogic = async (
  name: string | undefined,
  category: string | undefined
) => {
  if (!name || !category) {
    return { error: "Missing details" };
  }

  if (name === "" || category === "") {
    return { error: "Invalid details" };
  }

  const validCategory = await isCategoryExists(category);
  if (!validCategory) {
    return { error: "No such category" };
  }

  await addProductToDataSource(name, category);
  return { message: "Success" };
};

export const deleteProductLogic = async (
  name: string | undefined,
  category: string | undefined
) => {
  if (!name || !category) {
    return { error: "Missing details" };
  }

  await deleteProductFromDataSource(name, category);
  return { message: "Success" };
};
