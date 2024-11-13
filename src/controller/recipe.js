// import { v4 as uuidv4 } from "uuid";

// const GENERATE_ID = (req, res) => {
//   return res.status(200).json({ id: uuidv4() });
// };

const INSERT_RECIPES = async (req, res) => {
  try {
    const newRecipes = {
      id: uuidv4(),
      title: req.body.title,
      recipe: req.body.recipe,
      ingredients: req.body.ingredients,
    };

    const isRecipeExisting = recipe.some(
      (recipeExisting) => recipeExisting.id === newRecipes.id
    );

    if (isRecipeExisting) {
      return res
        .status(409)
        .send({ message: "This recommendation already exists." });
    }

    const recipe = new RecipeModel(newRecipes);

    const response = await recipe.save();

    return res.status(201).json({
      response: "recommendation was inserted successfully",
      recipes: response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "we have some problems" });
  }
};

const GET_ALL_RECIPES = async (req, res) => {
  try {
    const tasks = await RecipeModel.find();
    return res.status(200).json({ recipes: recipes });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "we have some problems" });
  }
};

const GET_RECIPES_BY_ID = async (req, res) => {
  try {
    const task = await RecipeModel.findOne({ id: req.params.id });

    if (!task) {
      return res
        .status(404)
        .json({ message: `no task with id ${req.params.id}` });
    }

    return res.status(200).json({ task: task });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "we have some problems" });
  }
};
const UPGRADE_RECIPE_BY_ID = async (req, res) => {
  try {
    const task = await RecipeModelModel.findeOneAndUpdate(
      { id: req.params.id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json({ message: "Recipe was updated", task: task });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "we have some problem" });
  }
};
const DELETE_RECIPE = async (req, res) => {
  const response = await RecipeModel.findOneAndDelete({ id: req.params.id });
  try {
    if (!response) {
      return res
        .status(404)
        .json({ response: `Recipe with ${req.params.id} does not exist` });
    }
    return res
      .status(200)
      .json({ response: "Recipe was deleted", task: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "we have some problem" });
  }
};
const GET_RANDOM_RECIPE = async (req, res) => {
  const recipes = [];
  try {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    return res.status(200).json({
      message: "Random recipe found successfully",
      recipe: randomRecipe,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "We have some problem" });
  }
};

export {
  INSERT_RECIPES,
  GET_ALL_RECIPES,
  GET_RECIPES_BY_ID,
  UPGRADE_RECIPE_BY_ID,
  DELETE_RECIPE,
  GET_RANDOM_RECIPE,
};
