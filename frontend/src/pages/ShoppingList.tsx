import { Container } from "@mui/material";
import "../css/ShoppingList.css";
import AddProductForm from "../components/AddProductForm";
import SeparationLine from "../components/SeparationLine";
import Products from "../components/Products";
import { Categories } from "../interfaces/category.interface";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { addItem } from "../reducers/totalItems";

function ShoppingList() {
  const categories = [
    "מוצרי ניקיון",
    "גבינות",
    "ירקות ופירות",
    "בשר ודגים",
    "מאפים",
  ];
  const productObj: Categories = {};
  categories.forEach((category) => {
    productObj[category] = {};
  });

  const [productsToCategory, setProductsToCategory] =
    useState<Categories>(productObj);
  const totalItems = useAppSelector((state) => state.totalItems);
  const dispatch = useAppDispatch();

  const onAddProduct = (name: string, category: string) => {
    setProductsToCategory((productsToCategoryTemp) => {
      const newProductsToCategory = productsToCategoryTemp;
      if (newProductsToCategory[category][name]) {
        newProductsToCategory[category][name]++;
      } else {
        newProductsToCategory[category][name] = 1;
      }
      return { ...newProductsToCategory };
    });
    dispatch(addItem());
  };

  return (
    <Container maxWidth="md">
      <h1 className="title">Shopping List</h1>
      <h3 className="total-items">
        Total items: <span className="items-amount">{totalItems}</span>
      </h3>
      <AddProductForm onAddProduct={onAddProduct} categories={categories} />
      <SeparationLine />
      <Products productsToCategory={productsToCategory} />
    </Container>
  );
}

export default ShoppingList;
