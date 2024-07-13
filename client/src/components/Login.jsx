import { signInWithGooglePopup } from "../services/firebase";
import { useState } from 'react';

function Login () {
    const [userId, setUserId] = useState('');

    const logGoogleUser = async () => { 
        const response = await signInWithGooglePopup();
        setUserId(response.user.uid);
    };

    const SignInButton = () => {
        return (
            <div>
                <button onClick={logGoogleUser}>Sign In With Google</button>
            </div>
        )
    }

    return { userId, SignInButton }
};

export default Login;
