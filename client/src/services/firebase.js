// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhVXMt-wHVGA5uIWzdT0DWklXClPIR0UI",
  authDomain: "recipe-recommendation-sy-657c3.firebaseapp.com",
  projectId: "recipe-recommendation-sy-657c3",
  storageBucket: "recipe-recommendation-sy-657c3.appspot.com",
  messagingSenderId: "863995068199",
  appId: "1:863995068199:web:e32da2a53f569469d13302",
  measurementId: "G-E7TWFFB4XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//           test area for adding and making an object 
// try {
//     const docRef = await addDoc(collection(db, "recipeHistory"), {
//       userId: userId,
//       recipeHistory: 'eggs and cheese'
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

const analytics = getAnalytics(app);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt : "select_account "
});

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export { auth, signInWithGooglePopup};


// // Get a list of cities from your database
// async function getRecipes(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }