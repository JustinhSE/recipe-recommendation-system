// // import React, { useState, useRef } from "react";
// // import { Camera } from "react-camera-pro";
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// // import { GoogleAIFileManager } from "@google/generative-ai/server";

// // // Access your API key as an environment variable
// // const apiKey: string = import.meta.env.VITE_GEMINI || '';

// // const genAI = new GoogleGenerativeAI(apiKey);

// // const model = genAI.getGenerativeModel({
// //   // Choose a Gemini model.
// //   model: "gemini-1.5-pro",
// // });

// // // Initialize GoogleAIFileManager with your API_KEY.
// // const fileManager = new GoogleAIFileManager(apiKey);

// // const PhonePhoto: React.FC = () => {
// //   const camera = useRef<typeof Camera & { takePhoto?: () => string | null } | null>(null);
// //   const [image, setImage] = useState<string | null>(null);
// //   const [generatedContent, setGeneratedContent] = useState<string | null>(null);

// //   const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = event.target.files?.[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = async (e) => {
// //         const base64Image = e.target?.result as string;
// //         setImage(base64Image);

// //         // Upload the file to Google Generative AI
// //         const uploadResponse = await fileManager.uploadFile(base64Image, {
// //           mimeType: file.type,
// //           displayName: file.name,
// //         });

// //         // Get the previously uploaded file's metadata.
// //         await fileManager.getFile(uploadResponse.file.name);

// //         const contentResponse: string[] = (await model.generateContent([
// //           {
// //             fileData: {
// //               mimeType: uploadResponse.file.mimeType,
// //               fileUri: uploadResponse.file.uri,
// //             },
// //           },
// //           { text: "Identify the objects within this image. Only include ones that are ingredients in recipes. Return them comma separated." },
// //         ])) as unknown as string[];
        
// //         // Set the generated content
// //         console.log(contentResponse[0]);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* <Camera ref={camera} errorMessages={{}} /> */}
// //       <button onClick={() => setImage(camera.current?.takePhoto?.() || null)}>Take photo</button>
// //       <input type="file" accept="image/*" onChange={handleUpload} />
// //       {image && <img src={image} alt="Uploaded or taken photo" />}
// //       {generatedContent && <div>{generatedContent}</div>}
// //     </div>
// //   );
// // };

// // export default PhonePhoto;
// import { useState, useEffect, useRef } from 'react';
// import * as mobilenet from "@tensorflow-models/mobilenet";
// import './photo.scss'

// function PhonePhoto() {
//     const [isModelLoading, setIsModelLoading] = useState(false)
//     const [model, setModel] = useState(null)
//     const [imageURL, setImageURL] = useState(null);
//     const [results, setResults] = useState([])
//     const [history, setHistory] = useState([])

//     const imageRef = useRef()
//     const textInputRef = useRef()
//     const fileInputRef = useRef()

//     const loadModel = async () => {
//         setIsModelLoading(true)
//         try {
//             const model = await mobilenet.load()
//             setModel(model)
//             setIsModelLoading(false)
//         } catch (error) {
//             console.log(error)
//             setIsModelLoading(false)
//         }
//     }

//     const uploadImage = (e) => {
//         const { files } = e.target
//         if (files.length > 0) {
//             const url = URL.createObjectURL(files[0])
//             setImageURL(url)
//         } else {
//             setImageURL(null)
//         }
//     }

//     const identify = async () => {
//         textInputRef.current.value = ''
//         const results = await model.classify(imageRef.current)
//         setResults(results)
//     }

//     const handleOnChange = (e) => {
//         setImageURL(e.target.value)
//         setResults([])
//     }

//     const triggerUpload = () => {
//         fileInputRef.current.click()
//     }

//     useEffect(() => {
//         loadModel()
//     }, [])

//     useEffect(() => {
//         if (imageURL) {
//             setHistory([imageURL, ...history])
//         }
//     }, [imageURL])

//     if (isModelLoading) {
//         return <h2>Model Loading...</h2>
//     }

//     return (
//         <div className="App">
//             <h1 className='header'>Image Identification</h1>
//             <div className='inputHolder'>
//                 <input type='file' accept='image/*' capture='camera' className='uploadInput' onChange={uploadImage} ref={fileInputRef} />
//                 <button className='uploadImage' onClick={triggerUpload}>Upload Image</button>
//                 <span className='or'>OR</span>
//                 <input type="text" placeholder='Paster image URL' ref={textInputRef} onChange={handleOnChange} />
//             </div>
//             <div className="mainWrapper">
//                 <div className="mainContent">
//                     <div className="imageHolder">
//                         {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
//                     </div>
//                     {results.length > 0 && <div className='resultsHolder'>
//                         {results.map((result, index) => {
//                             return (
//                                 <div className='result' key={result.className}>
//                                     <span className='name'>{result.className}</span>
//                                     <span className='confidence'>Confidence level: {(result.probability * 100).toFixed(2)}% {index === 0 && <span className='bestGuess'>Best Guess</span>}</span>
//                                 </div>
//                             )
//                         })}
//                     </div>}
//                 </div>
//                 {imageURL && <button className='button' onClick={identify}>Identify Image</button>}
//             </div>
//             {history.length > 0 && <div className="recentPredictions">
//                 <h2>Recent Images</h2>
//                 <div className="recentImages">
//                     {history.map((image, index) => {
//                         return (
//                             <div className="recentPrediction" key={`${image}${index}`}>
//                                 <img src={image} alt='Recent Prediction' onClick={() => setImageURL(image)} />
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>}
//         </div>
//     );
// }

// export default PhonePhoto;