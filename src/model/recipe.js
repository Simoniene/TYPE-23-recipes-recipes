import mongoose from "mongoose";
const recipesSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  recipe: { type: String, required: true },
  ingredients: { type: String, required: true },
});

export default mongoose.model("Recipe", recipesSchema);
