import { getAuth, signOut } from  'firebase/auth';
import {signInWithGooglePopup} from "../services/firebase";
import { useState } from 'react';

function Login () {
    const [userId, setUserId] = useState('');
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
            <div>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow flex items-center" onClick={logGoogleUser}>
                    <img src="https://icon2.cleanpng.com/20180423/rjw/kisspng-google-logo-logo-logo-5ade7dc7134299.2873015115245306310789.jpg" alt="Google Logo" className="h-5 mr-4" />
                    Sign In With Google
                </button>
            </div>
        )
    }

    return { SignInButton, handleSignOut }
};

export default Login;
