import { Container } from "@mui/material";
import "../css/ShoppingList.css";
import AddItemForm from "../components/AddItemForm";
import SeparationLine from "../components/SeparationLine";
import Products from "../components/Products";

function ShoppingList() {
  return (
    <Container maxWidth="md">
      <h1 className="title">Shopping List</h1>
      <h3 className="total-items">
        Total items: <span className="items-amount">2</span>
      </h3>
      <AddItemForm />
      <SeparationLine />
      <Products />
    </Container>
  );
}

export default ShoppingList;
