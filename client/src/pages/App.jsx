import React, { useState } from 'react';
import AddInput from '../components/AddInput.jsx';
import RecipeList from '../components/RecipeList.jsx';
import Login from '../components/Login.jsx';
import Navbar from '../components/navbar.jsx';
import {useDropzone} from 'react-dropzone'
import './App.css'
import ImageUpload from '../userData/ImageUpload.jsx';
import SearchHistory from '../components/SearchHistory.jsx';


function App() {
  const [recipes, setRecipes] = useState([]);
  
  const addRecipeToArr = (ingredients) => {
    setRecipes(ingredients);
  };

  const { userId, SignInButton } = Login();
  // console.log('APP login User ID', userId);

  return (
    <main className="flex flex-col items-center min-h-screen pt-36" style={{ background: 'linear-gradient(to bottom, #FFFFF4, #551B14)' }}>
      <Navbar />
      <AddInput addInput={addRecipeToArr} />
      <RecipeList allIngredients={recipes} />
      {/* <ImageUpload /> */}
      {/* <SearchHistory /> */}
    </main>
  );
  
}

export default App;
