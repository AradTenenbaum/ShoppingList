import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import "../css/CategoryProducts.css";
import { Products } from "../interfaces/product.interface";

function CategoryProducts({
  handleVerticalScroll,
  products,
  categoryName,
}: {
  handleVerticalScroll: (e: React.TouchEvent<HTMLDivElement>) => void;
  products: Products;
  categoryName: string;
}) {
  return (
    <div
      className="category-products-container"
      onScroll={handleVerticalScroll}
    >
      <List>
        <ListSubheader>{categoryName}</ListSubheader>
        {Object.keys(products).map((productName) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary={`${productName}${
                  products[productName] > 1 ? ` ${products[productName]}` : ""
                }`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CategoryProducts;
