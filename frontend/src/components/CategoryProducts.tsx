import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import "../css/CategoryProducts.css";

function CategoryProducts({
  handleVerticalScroll,
}: {
  handleVerticalScroll: (e: React.TouchEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      className="category-products-container"
      onScroll={handleVerticalScroll}
    >
      <List>
        <ListSubheader>{`Dairy - 2 products`}</ListSubheader>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}

export default CategoryProducts;
