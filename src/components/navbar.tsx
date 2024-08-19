import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './Login';

const Navbar = () => {
    const [userPhoto, setUserPhoto] = useState<string | null>(null);
    const { SignInButton, handleSignOut } = Login();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserPhoto(user.photoURL);
            } else {
                setUserPhoto(null);
            }
        });
    }, []);

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center space-x-4">
                {!userPhoto && (
                    <>
                        <SignInButton />
                        <div className="border-r border-gray-400 opacity-50 h-6"></div>
                    </>
                )}
                <h2 className="text-4xl font-black font-grandstander text-[#EB5E28]">Recipe Generator &nbsp;</h2>
            </div>
            {userPhoto && (
                <div className="flex items-center space-x-4">
                    <div className="border-r border-gray-400 opacity-50 h-6"></div>
                    <button onClick={handleSignOut} className="text-xl font-grandstander hover:bg-gray-100 text-gray-800  py-2  ">Sign Out</button>
                    <img src={userPhoto} alt="User profile" className="w-10 h-10 rounded-full" />
                </div>
            )}
        </nav>

    );

};

export default Navbar;