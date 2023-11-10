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
import { getCategoryAmount } from "../utils/object";

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
      <div className="category-name">{`${categoryName} - ${getCategoryAmount(
        products
      )}`}</div>
      <List>
        {Object.keys(products).map((productName) => (
          <ListItem disablePadding key={productName}>
            <ListItemButton>
              <ListItemText
                style={{ textAlign: "center" }}
                primary={`${productName}${
                  products[productName] > 1 ? ` (${products[productName]})` : ""
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
