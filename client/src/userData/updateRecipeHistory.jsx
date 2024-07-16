import React from 'react';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import Login from './../components/Login';

// method currently working on to use the userId and add it , need to console.log userId as it can get passed to App.jsx 
async function updateRecipeHistory({ingredients = [], recipes = [], userData = {}}){
    if(!userData) {
        console.log("User is not logged in.");
        return;
    } 
    //upload payload to firebase
   
    const { userId } = Login();
    console.log('APP login User ID', userId);

    try {
        const docRef = await addDoc(collection(db, "recipeHistory"), {
        userId: userId,
        recipeHistory: recipes
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    });
}

export default updateRecipeHistory;

    
    // const searchResults = {
    //     ingredients, 
    //     recipes
    // };

    // var database = firebase.database();
    // var root = database.ref();


    // console.log("String", root);
    // var userId = userData?.uid; //null check
    // var currentSearchResults = userData?.searchResults;
    // console.log("Current Search Results" , currentSearchResults);
    // var ref = new Firebase('https://docs-examples.firebaseio.com/web/data');
    // var userRef = ref.child('users/' + userId);
    // userRef.set({
    //     searchResults: [...currentSearchResults, searchResults]
    // })
    // console.log("Search results" , searchResults)
    // console.log("Updated user recipe history! ");

