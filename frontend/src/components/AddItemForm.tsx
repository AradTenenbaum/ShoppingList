import { Button, TextField } from "@mui/material";

function AddItemForm({
  categories,
  onAddProduct,
}: {
  categories: string[];
  onAddProduct: (name: string, category: string) => void;
}) {
  return (
    <form className="" onSubmit={() => {}}>
      <TextField
        label="Item Name"
        variant="outlined"
        // value={newItem.name}
        // onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Category"
        // value={newItem.category}
        // onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
        fullWidth
        margin="normal"
      >
        <option value="" />
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </TextField>
      <Button variant="contained" color="primary" fullWidth>
        Add to List
      </Button>
    </form>
  );
}

export default AddItemForm;
