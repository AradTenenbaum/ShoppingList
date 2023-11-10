import { Button, TextField } from "@mui/material";
import { useForm } from "../hooks/useForm";

function AddProductForm({
  categories,
  onAddProduct,
}: {
  categories: string[];
  onAddProduct: (name: string, category: string) => void;
}) {
  const { onChange, onSubmit, Clear, values } = useForm(
    () => {
      onAddProduct(values.name, values.category);
      Clear();
    },
    { name: "", category: "" }
  );

  return (
    <form className="" onSubmit={onSubmit}>
      <TextField
        label="Item Name"
        variant="outlined"
        value={values.name}
        name="name"
        onChange={onChange}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Category"
        value={values.category}
        name="category"
        onChange={onChange}
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add to List
      </Button>
    </form>
  );
}

export default AddProductForm;
