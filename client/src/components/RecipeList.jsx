import updateRecipeHistory from './../userData/updateRecipeHistory.jsx'
import React, { useEffect, useState } from 'react';

function RecipeList({ allIngredients }) {
  const apiKey = 'my_api_key'
  const [recipes, setRecipes] = useState([]);
  const sendToAPI = allIngredients.join(',')


  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${sendToAPI})}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const sortedRecipes = data.sort((a, b) => {
          const aMissing = a.missedIngredientCount + a.unusedIngredients.length;
          const bMissing = b.missedIngredientCount + b.unusedIngredients.length;
          return aMissing - bMissing;
        });

        setRecipes(sortedRecipes);
        updateRecipeHistory(allIngredients, recipes);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, [allIngredients]);
  

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  );
}

export default RecipeList;
