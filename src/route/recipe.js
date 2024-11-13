import express from "express";

import {
  //   GENERATE_ID,
  INSERT_RECIPES,
  GET_ALL_RECIPES,
  GET_RECIPES_BY_ID,
  UPGRADE_RECIPE_BY_ID,
} from "../controller/recipe.js";

const router = express.Router();

// router.get("/recipes", GENERATE_ID);
router.post("/recipes", INSERT_RECIPES);
router.get("/recipes", GET_ALL_RECIPES);
router.get("/recipes/:id", GET_RECIPES_BY_ID);
router.put("/recipes", UPGRADE_RECIPE_BY_ID);

export default router;
