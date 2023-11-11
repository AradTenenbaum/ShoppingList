import CategoryModel from "../model/Category.model";

export const getCategoriesFromDataSource = async () => {
  const categories = await CategoryModel.find();
  return categories;
};

export const addCategoriesToDataSource = async (categories: string[]) => {
  const categoriesToDB = new Array(categories.length);
  categories.forEach((category, index) => {
    categoriesToDB[index] = new CategoryModel({ name: category });
  });
  await CategoryModel.insertMany(categoriesToDB);
};

export const isCategoryExists = async (category: string) => {
  const categoryFromDB = await CategoryModel.findOne({
    name: category,
  });
  if (categoryFromDB) return true;
  return false;
};

export const isCategoriesExists = async (categories: string[]) => {
  const count: number = await CategoryModel.countDocuments({
    name: { $in: categories },
  });
  if (count === categories.length) return true;
  return false;
};
