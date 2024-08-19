// import React, { useState } from 'react';
// import axios from 'axios'; 

// function ImageUpload() {
//   const [image, setImage] = useState('');

//   function handleImage(e) {
//     setImage(e.target.files[0]);
//   }

//   async function handleApi() {
//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       // Initialize Google Cloud Vision client
//       const vision = require('@google-cloud/vision');
//       const client = new vision.ImageAnnotatorClient();
      
//       // Replace 'url' with your actual server endpoint
//       const response = await axios.post('https://vision.googleapis.com/v1/images:annotate', formData);
//       console.log('Image uploaded successfully:', response.data);


//       // Perform label detection on the uploaded image
//       const [result] = await client.labelDetection(image.path);
//       const labels = result.labelAnnotations;
//       console.log('Detected Labels:');
//       labels.forEach(label => console.log(label.description));
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   }

//   return (
//     <div>
//       <input type="file" name="file" accept="image/png, image/jpeg" onChange={handleImage} />
//       <button onClick={handleApi}>Submit</button>
//     </div>
//   );
// }

// export default ImageUpload;

// // import { useState } from "react";
// // import {Axios} from 'axios';

// // function ImageUpload(){
// //     const [image, setImage] = useState('')
// //     function handleImage(e){
// //         setImage(e.target.files[0])
// //     }
// //     function handleApi(){
// //         const formData  = new FormData()
// //         formData.append('image', image)
// //         axios.post('url', formData).then((res) => {
// //             console.log(res)
// //         })
// //     }
// //     return(
// //         <div>
// //             <input type='file' name='file' onChange={handleImage}/>
// //             <button onClick={handleApi}> Submit</button>
// //         </div>
// //     )
// // }
// // async function quickstart() {
// //     // Imports the Google Cloud client library
// //     const vision = require('@google-cloud/vision');
  
// //     // Creates a client
// //     const client = new vision.ImageAnnotatorClient();
  
// //     // Performs label detection on the image file
// //     const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
// //     const labels = result.labelAnnotations;
// //     console.log('Labels:');
// //     labels.forEach(label => console.log(label.description));
// //   }
// //   quickstart();
// // export default ImageUpload;