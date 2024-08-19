// // to do: 
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../services/firebase';
// import RecipeList from './RecipeList'; // Use this - task 
 
// const SearchHistory = () => {
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch search history from Firestore
//     const fetchSearchHistory = async () => {
//       try {
//         const q = query(collection(db, 'recipeHistory'));
//         const querySnapshot = await getDocs(q);
//         const historyData = querySnapshot.docs.map((doc) => doc.data());
//         setSearchHistory(historyData);
//       } catch (error) {
//         console.error('Error fetching search history:', error);
//       }
//     };

//     fetchSearchHistory();
//   }, []);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const ingredientsArray = searchTerm.split(',').map(ingredient => ingredient.trim());
//     try {
//       // Search for documents containing any of the search terms in the ingredients array
//       const q = query(collection(db, 'recipeHistory'), where('ingredients', 'array-contains-any', ingredientsArray));
//       const querySnapshot = await getDocs(q);
//       const matchingHistory = querySnapshot.docs.map((doc) => doc.data());
//       setSearchHistory(matchingHistory); // Update the state with the search results
//     } catch (error) {
//       console.error('Error searching history:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <form onSubmit={handleSearch} className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by ingredients..."
//           className="border p-2 w-full"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
//           Search
//         </button>
//       </form>
//       {/* Display search history here */}
//       {searchHistory.length > 0 ? (
//         <div>
//           {searchHistory.map((historyItem, index) => (
//             <div key={index}>
//               <h3>{historyItem.title}</h3>
//               {/* Display other details of the history item */}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No search history found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchHistory;
