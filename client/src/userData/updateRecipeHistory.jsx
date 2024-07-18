import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

const updateRecipeHistory = async (allIngredients, recipes) => {
    const recipesForFirestore = recipes.map(recipe => ({
        title: recipe.title,
        image: recipe.image,
        usedIngredientCount: recipe.usedIngredientCount,
        missedIngredientCount: recipe.missedIngredientCount,
        likes: recipe.likes,
        missedIngredients: recipe.missedIngredients.map(ingredient => ingredient.name)
    }));

    try {
        const docRef = await addDoc(collection(db, "recipeHistory"), {
            ingredients: allIngredients,
            recipes: recipesForFirestore,
            //to do userID: userId 
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
export default updateRecipeHistory; 