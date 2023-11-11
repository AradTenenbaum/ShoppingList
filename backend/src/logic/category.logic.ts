import {
  addCategoriesToDataSource,
  getCategoriesFromDataSource,
  isCategoriesExists,
} from "../services/category.service";

export const appendInitCategoriesIfNotExistsLogic = async (
  categories: string[]
) => {
  const categoriesExists = await isCategoriesExists(categories);
  if (!categoriesExists) {
    await addCategoriesToDataSource(categories);
  }
};

export const getCategoriesLogic = async () => {
  const categories = await getCategoriesFromDataSource();
  return categories;
};
