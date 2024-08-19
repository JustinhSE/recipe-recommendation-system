// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GoogleAIFileManager } from "@google/generative-ai/server";

// // Access your API key as an environment variable
// const apiKey: string = import.meta.env.VITE_GEMINI || '';


// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     // Choose a Gemini model.
//     model: "gemini-1.5-pro",
//   });

// // Initialize GoogleAIFileManager with your API_KEY.
// const fileManager = new GoogleAIFileManager(apiKey);

// // Upload the file and specify a display name.
// const uploadResponse = await fileManager.uploadFile("jetpack.jpg", {
//   mimeType: "image/jpeg",
//   displayName: "Jetpack drawing",
// });

// // Get the previously uploaded file's metadata.
// await fileManager.getFile(uploadResponse.file.name);


// // Generate content using text and the URI reference for the uploaded file.
// await model.generateContent([
//     {
//       fileData: {
//         mimeType: uploadResponse.file.mimeType,
//         fileUri: uploadResponse.file.uri
//       }
//     },
//     { text: "Identify the objects within this image. Only include ones that are ingredients in recipes. Return them comma seperated. " },
//   ]);

// export default genAI;