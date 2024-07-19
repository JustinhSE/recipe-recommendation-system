import React, { useEffect, useState } from 'react';
import updateRecipeHistory from './../userData/updateRecipeHistory.jsx';

function RecipeList({ allIngredients }) {
  const apiKey = import.meta.env.VITE_RECIPE;
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const sendToAPI = allIngredients.join(',');
  const [showFavorites, setShowFavorites] = useState(false);

  const addToFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  // const fetchRecipeUrl = async (title) => {
  //   try {
  //     const response = await openai.createCompletion({
  //       model: "text-davinci-003", // or the latest available model
  //       prompt: `What is the URL for the recipe titled "${title}"?`,
  //       temperature: 0.7,
  //       max_tokens: 150,
  //       top_p: 1,
  //       frequency_penalty: 0,
  //       presence_penalty: 0,
  //       apiKey: import.meta.env.VITE_OPENAI, // Securely accessing the API key
  //     });
  //     setUrl(response.choices[0].text); // Update the URL state
  //   } catch (error) {
  //     console.error('Error fetching the URL:', error);
  //   }
  // };

  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${sendToAPI}&apiKey=${apiKey}`;

    const fetchRecipes = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const sortedRecipes = data.sort((a, b) => {
          const aMissing = a.missedIngredientCount + a.unusedIngredients.length;
          const bMissing = b.missedIngredientCount + b.unusedIngredients.length;
          return aMissing - bMissing;
        });
        setRecipes(sortedRecipes);
        updateRecipeHistory(allIngredients, recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    if (allIngredients.length > 0) {
      fetchRecipes();
    }
  }, [allIngredients]);

  const clearRecipes = () => {
    setRecipes([]);
  };

  return (
    <div>
      <center> <div> 
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowFavorites(!showFavorites)}>Favorites</button>
      {showFavorites && (
        <ul className="space-y-4">
          {favorites.map((recipe) => (
            <li key={recipe.id} className="flex justify-between items-center">
              <div style={{ paddingRight: '10px' }}>{recipe.title}</div>
            </li>
          ))}
        </ul>
      )}
      <button style={{ marginLeft: '20px' }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={clearRecipes}>Clear Recipes</button>
      </div> </center>
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="flex justify-between items-center">
            <div style={{ paddingRight: '10px' }}>{recipe.title}</div>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-32" onClick={() => addToFavorites(recipe)}>⭐ Add to Favorites</button>
            </div>
          </li>
        ))}
      </ul>
      {/* {url && window.location.assign(url)} */}
    </div>
  );
}


export default RecipeList;
