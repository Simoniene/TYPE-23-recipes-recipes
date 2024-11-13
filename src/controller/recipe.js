import { v4 as uuidv4 } from "uuid";

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

export { GET_ALL_RECIPES, GET_RECIPES_BY_ID };
