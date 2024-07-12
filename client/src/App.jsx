// App.jsx
import React, { useState } from 'react';
import AddInput from './components/AddInput.jsx';
import RecipeList from './components/RecipeList.jsx';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipeToArr = (ingredients) => {
    setRecipes(ingredients);
  };

  return (
    <main className="flex flex-col items-center h-full pt-36">
      <h1 className="text-8xl font-black mb-6 font-grandstander text-[#EB5E28]">Recipe Generator</h1>
      <AddInput addInput={addRecipeToArr} />
      <RecipeList allIngredients={recipes} />
    </main>
  );
}

export default App;
