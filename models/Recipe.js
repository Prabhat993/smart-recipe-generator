// models/Recipe.js
import mongoose from 'mongoose';

const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
}, { _id: false });

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  servings: { type: Number, default: 1 },
  tags: [{ type: String }],
  ingredients: [IngredientSchema],
  instructions: [{ type: String }],
  nutritionalInfo: {
    calories: String,
    protein: String,
  },
}, { timestamps: true });

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);