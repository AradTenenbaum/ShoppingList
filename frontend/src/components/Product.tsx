import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Product as ProductInterface } from "../interfaces/product.interface";
import { useState } from "react";
import "../css/Product.css";

function Product({
  name,
  category,
  amount,
  onRemoveProduct,
}: {
  name: string;
  category: string;
  amount: number;
  onRemoveProduct: Function;
}) {
  const [displayRemove, setDisplayRemove] = useState(false);

  const onClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setDisplayRemove(!displayRemove);
  };

  return (
    <ListItem
      disablePadding
      key={name}
      secondaryAction={
        displayRemove ? (
          <div
            onClick={() => onRemoveProduct(name, category)}
            className="remove-item"
          >
            -
          </div>
        ) : (
          <div />
        )
      }
    >
      <ListItemButton onClick={onClick}>
        <ListItemText
          style={{ textAlign: "center" }}
          primary={`${name}${amount > 1 ? ` (${amount})` : ""}`}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default Product;
