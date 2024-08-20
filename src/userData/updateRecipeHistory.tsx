import { firestore } from "../services/firebase";
import { collection, addDoc  } from "firebase/firestore";

interface Recipe {
    id: number;
    title: string;
    missedIngredientCount: number;
    unusedIngredients: { name: string }[];
    usedIngredientCount: number; 
    likes: number;
    missedIngredients: {name: string}[];
    image: string;
}

const updateRecipeHistory = async (allIngredients: string, recipes: Recipe[]) => {
  const mappedRecipes = recipes.map(recipe => ({
    title: recipe.title,
    usedIngredientCount: recipe.usedIngredientCount,
    missedIngredientCount: recipe.missedIngredientCount,
    likes: recipe.likes,
    missedIngredients: recipe.missedIngredients,
    image: recipe.image,
  }));

  

  try {
    const docRef = await addDoc(collection(firestore, "recipeHistory"), {ingredients: allIngredients,
        recipes: mappedRecipes, });
    console.log("Document written with ID: ", docRef.id, mappedRecipes);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default updateRecipeHistory;