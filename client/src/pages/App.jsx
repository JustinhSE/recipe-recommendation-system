// App.jsx
import React, { useState } from 'react';
import AddInput from '../components/AddInput.jsx';
import RecipeList from '../components/RecipeList.jsx';
import Login from '../components/Login.jsx';

function App() {
  const [recipes, setRecipes] = useState([]);
  
  const addRecipeToArr = (ingredients) => {
    setRecipes(ingredients);
  };
  console.log("Sign in", Login);
  const { userId, SignInButton } = Login();
  console.log('APP login User ID', userId);
 
  return (
    <main className="flex flex-col items-center h-full pt-36">
      <h1 className="text-8xl font-black mb-6 font-grandstander text-[#EB5E28]">Recipe Generator</h1>
      <AddInput addInput={addRecipeToArr} />
      <RecipeList allIngredients={recipes} />
      <SignInButton /> 
    </main>
  );
}

export default App;
