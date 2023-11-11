import mongoose from "mongoose";

const ProductScheme = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
});

export default mongoose.model("Product", ProductScheme);
