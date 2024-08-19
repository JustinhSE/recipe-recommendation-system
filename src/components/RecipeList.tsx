import React, { useEffect, useState } from 'react';
import updateRecipeHistory from '../userData/updateRecipeHistory';

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

interface RecipeListProps {
  allIngredients: string[];
}

const RecipeList: React.FC<RecipeListProps> = ({ allIngredients }) => {
  const apiKey = import.meta.env.VITE_RECIPE as string;
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const sendToAPI = allIngredients.join(',');
  const [showFavorites, setShowFavorites] = useState(false);

  const addToFavorites = (recipe: Recipe) => {
    setFavorites([...favorites, recipe]);
  };

  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${sendToAPI}&apiKey=${apiKey}`;

    const fetchRecipes = async () => {
      try {
        const response = await fetch(apiUrl);
        const data: Recipe[] = await response.json();
        const sortedRecipes = data.sort((a, b) => {
          const aMissing = a.missedIngredientCount + a.unusedIngredients.length;
          const bMissing = b.missedIngredientCount + b.unusedIngredients.length;
          return aMissing - bMissing;
        });
        setRecipes(sortedRecipes);
        updateRecipeHistory(allIngredients.join(','), sortedRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    if (allIngredients.length > 0) {
      fetchRecipes();
    }
  }, [allIngredients, apiKey, sendToAPI]);

  const clearRecipes = () => {
    setRecipes([]);
  };

  return (
    <div>
      <center>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            Favorites
          </button>
          {showFavorites && (
            <ul className="space-y-4">
              {favorites.map((recipe) => (
                <li key={recipe.id} className="flex justify-between items-center">
                  <div style={{ paddingRight: '10px' }}>{recipe.title}</div>
                </li>
              ))}
            </ul>
          )}
          <button
            style={{ marginLeft: '20px' }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={clearRecipes}
          >
            Clear Recipes
          </button>
        </div>
      </center>
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="flex justify-between items-center">
            <div style={{ paddingRight: '10px' }}>{recipe.title}</div>
            <div className="flex space-x-4">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-32"
                onClick={() => addToFavorites(recipe)}
              >
                ⭐ Add to Favorites
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {/* {url && window.location.assign(url)} */}
    </div>
    
  );
};

export default RecipeList;