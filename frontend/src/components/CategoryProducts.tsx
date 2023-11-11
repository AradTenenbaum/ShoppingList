import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import "../css/CategoryProducts.css";
import { Products } from "../interfaces/product.interface";
import { getCategoryAmount } from "../utils/functions";
import Product from "./Product";

function CategoryProducts({
  handleVerticalScroll,
  products,
  categoryName,
  onRemoveProduct,
}: {
  handleVerticalScroll: (e: React.TouchEvent<HTMLDivElement>) => void;
  products: Products;
  categoryName: string;
  onRemoveProduct: Function;
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
          <Product
            name={productName}
            category={categoryName}
            amount={products[productName]}
            onRemoveProduct={onRemoveProduct}
          />
        ))}
      </List>
    </div>
  );
}

export default CategoryProducts;
