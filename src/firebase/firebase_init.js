// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvQPPszbNSaXFLfm5f-c0SgtLt9-dPxwU",
  authDomain: "dragon-news-faa25.firebaseapp.com",
  projectId: "dragon-news-faa25",
  storageBucket: "dragon-news-faa25.firebasestorage.app",
  messagingSenderId: "340822144530",
  appId: "1:340822144530:web:25ae4bed41838b6b9dcacb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
