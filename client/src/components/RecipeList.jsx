// RecipeList.jsx
import React, { useEffect, useState } from 'react';

function RecipeList({ allIngredients }) {
  const apiKey = 'my_api_key'
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${allIngredients.join(',')}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Sort recipes by the least unused and missing ingredients
        const sortedRecipes = data.sort((a, b) => {
          const aMissing = a.missedIngredientCount + a.unusedIngredients.length;
          const bMissing = b.missedIngredientCount + b.unusedIngredients.length;
          return aMissing - bMissing;
        });

        setRecipes(sortedRecipes);
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
