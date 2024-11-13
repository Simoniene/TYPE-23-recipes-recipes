import express from "express";

import { GET_ALL_RECIPES, GET_RECIPES_BY_ID } from "../controller/recipe.js";

const router = express.Router();

router.get("/recipes", GET_ALL_RECIPES);
router.get("/recipes/:id", GET_RECIPES_BY_ID);

export default router;
