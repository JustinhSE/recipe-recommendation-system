// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './Login';

const Navbar = () => {
  const [userPhoto, setUserPhoto] = useState(null);
  const { handleSignOut } = Login();

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
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
      {/* Other navbar content */}
      {userPhoto && (
        <>
          <img src={userPhoto} alt="User profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          <button onClick={handleSignOut} style={{ padding: '0.5rem 1rem' }}>Sign Out</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
