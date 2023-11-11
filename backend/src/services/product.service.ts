import ProductModel from "../model/Product.model";

export const getProductsFromDataSource = async () => {
  const products = await ProductModel.find();
  return products;
};

const getProductFromDataSource = async (name: string, category: string) => {
  const product = await ProductModel.findOne({ name, category });
  return product;
};

export const addProductToDataSource = async (
  name: string,
  category: string
) => {
  const existingProduct = await getProductFromDataSource(name, category);
  if (existingProduct) {
    existingProduct.amount += 1;
    await existingProduct.save();
  } else {
    const newProduct = new ProductModel({ name, category, amount: 1 });
    await newProduct.save();
  }
};

export const deleteProductFromDataSource = async (
  name: string,
  category: string
) => {
  const existingProduct = await getProductFromDataSource(name, category);
  if (existingProduct) {
    if (existingProduct.amount === 1) {
      await ProductModel.deleteOne({ name, category });
    } else {
      existingProduct.amount--;
      await existingProduct.save();
    }
  }
};
