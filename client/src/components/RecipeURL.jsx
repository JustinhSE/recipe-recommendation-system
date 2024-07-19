// import React, { useState } from 'react';
// import openai from 'openai';

// const RecipeFinder = (title ) => {
//   const [url, setUrl] = useState('');

  
// const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await openai.createCompletion({
//         model: "text-davinci-003", 
//         prompt: `What is the URL for the recipe titled "${title}"?`,
//         temperature: 0.7,
//         max_tokens: 150,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         apiKey: import.meta.env.VITE_OPENAI, 
//       });
  
//       // Assuming the response contains the URL
//       setUrl(response.choices[0].text);
//     } catch (error) {
//       console.error('Error fetching the URL:', error);
//     }
//   };
  

//   return (
//     <form onSubmit={handleSubmit}>
//       {url && <p>Recipe URL: {url}</p>}
//     </form>
//   );
// };

// export default RecipeFinder;