import React, { useState } from 'react';
import AddInput from "./components/AddInput.tsx";
import RecipeList from './components/RecipeList';
import Navbar from './components/navbar.tsx';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<string[]>([]);

  const addRecipeToArr = (ingredients: string[]) => {
    setRecipes(ingredients);
  };


  return (
    <main className="flex flex-col items-center min-h-screen pt-36" style={{ background: 'linear-gradient(to bottom, #FFFFF4, #551B14)' }}>
      <Navbar />
      <AddInput addInput={addRecipeToArr} />
      <RecipeList allIngredients={recipes} />
      {/* <PhonePhoto />  */}
      {/* <ImageUpload /> */}
      {/* <SearchHistory /> */}
    </main>
  );
};

export default App;