import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [userPhoto, setUserPhoto] = useState(null);
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, set the user photo URL
        setUserPhoto(user.photoURL);
      } else {
        // User is signed out
        setUserPhoto(null);
      }
    });
  }, []);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
      {/* Other navbar content */}
      {userPhoto && (
        <img src={userPhoto} alt="User profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      )}
    </nav>
  );
};

export default Navbar;
