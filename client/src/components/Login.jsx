// Login.jsx
import { getAuth, signOut } from 'firebase/auth';
import { signInWithGooglePopup } from "../services/firebase";
import updateRecipeHistory from './../userData/updateRecipeHistory.jsx'
import { useState } from 'react';

function Login() {
  const [userId, setUserId] = useState('');
  const auth = getAuth();

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    setUserId(response.user.uid);
    updateRecipeHistory(response.user.uid);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      setUserId(null);
    } catch (error) {
      console.error('Sign out error', error);
    }
  };

  const SignInButton = () => {
    return (
      <button onClick={logGoogleUser} className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        <img src="https://icon2.cleanpng.com/20180423/rjw/kisspng-google-logo-logo-logo-5ade7dc7134299.2873015115245306310789.jpg" alt="Google Logo" className="h-5 mr-2" />
        Sign In
      </button>
    );
  };

  return { SignInButton, handleSignOut };
};

export default Login;
