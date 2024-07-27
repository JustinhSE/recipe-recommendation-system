import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

const updateRecipeHistory = async (allIngredients, recipes ) => {
    const mappedRecipes = recipes.map(recipe => ({
        title: recipe.title,
        usedIngredientCount: recipe.usedIngredientCount,
        missedIngredientCount: recipe.missedIngredientCount,
        likes: recipe.likes,
        missedIngredients: recipe.missedIngredients.map(ingredient => ingredient.name)
    }));

    try {
        const docRef = await addDoc(collection(db, "recipeHistory"), {
            ingredients: allIngredients,
            recipes: mappedRecipes,
        });
        console.log("Document written with ID: ", docRef.id, mappedRecipes);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
export default updateRecipeHistory; 