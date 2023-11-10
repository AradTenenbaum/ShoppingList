import { Container } from "@mui/material";
import "../css/ShoppingList.css";
import AddItemForm from "../components/AddItemForm";
import SeparationLine from "../components/SeparationLine";
import Products from "../components/Products";
import { Categories } from "../interfaces/category.interface";
import { useState } from "react";

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

  const onAddProduct = (name: string, category: string) => {
    console.log(name, category);
  };

  return (
    <Container maxWidth="md">
      <h1 className="title">Shopping List</h1>
      <h3 className="total-items">
        Total items: <span className="items-amount">2</span>
      </h3>
      <AddItemForm onAddProduct={onAddProduct} categories={categories} />
      <SeparationLine />
      <Products productsToCategory={productsToCategory} />
    </Container>
  );
}

export default ShoppingList;
