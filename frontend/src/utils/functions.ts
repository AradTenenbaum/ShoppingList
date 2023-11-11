import { Categories } from "../interfaces/category.interface";
import { Product, Products } from "../interfaces/product.interface";

export const fromDBArrayToCategoriesObject = (
  dbArray: Product[]
): Categories => {
  const productsToCategoryObj: Categories = {};
  dbArray.forEach((product: Product) => {
    if (!productsToCategoryObj[product.category]) {
      productsToCategoryObj[product.category] = {};
    }
    if (!productsToCategoryObj[product.category][product.name]) {
      productsToCategoryObj[product.category][product.name] = product.amount;
    }
  });

  return productsToCategoryObj;
};

export const addProductToCategoriesMap = (
  productToCategory: Categories,
  product: { name: string; category: string }
) => {
  if (!productToCategory[product.category]) {
    productToCategory[product.category] = {};
  }
  if (productToCategory[product.category][product.name]) {
    productToCategory[product.category][product.name]++;
  } else {
    productToCategory[product.category][product.name] = 1;
  }
};

export const removeProductFromCategoriesMap = (
  productToCategory: Categories,
  product: { name: string; category: string }
) => {
  if (
    productToCategory[product.category] &&
    productToCategory[product.category][product.name]
  ) {
    if (productToCategory[product.category][product.name] > 1)
      productToCategory[product.category][product.name]--;
    else {
      const newCategoryObject: Products = {};
      Object.keys(productToCategory[product.category]).forEach(
        (productName) => {
          if (productName !== product.name)
            newCategoryObject[productName] =
              productToCategory[product.category][productName];
        }
      );
      productToCategory[product.category] = newCategoryObject;
    }
  }
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
