import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//sign in
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export { auth, signInWithGooglePopup, db};
