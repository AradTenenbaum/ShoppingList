import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Category", CategoryScheme);
