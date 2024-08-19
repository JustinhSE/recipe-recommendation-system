import { getAuth, signOut } from 'firebase/auth';
import { signInWithGooglePopup } from '../services/firebase.js'
// import updateRecipeHistory from '../userData/updateRecipeHistory.tsx'
import { useState } from 'react';

function Login() {
  const [userId, setUserId] = useState<string | null>('');
  const auth = getAuth();

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    setUserId(response.user.uid);
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
      <button onClick={logGoogleUser} className="text-xl font-grandstander hover:bg-gray-100 text-gray-800  py-2 px-4 rounded">
        {/* <img src="https://p7.hiclipart.com/preview/344/344/59/google-logo-g-suite-google.jpg" alt="Google Logo" className="h-5 mr-2" /> */}
        Sign In
      </button>
    );
  };

  return { userId, SignInButton, handleSignOut };
};

export default Login;