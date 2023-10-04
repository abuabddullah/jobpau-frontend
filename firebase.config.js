// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBra8-Z8Ig3K3-JQrgNTGIprbvckooz8cc",
  authDomain: "jobpau-23c89.firebaseapp.com",
  projectId: "jobpau-23c89",
  storageBucket: "jobpau-23c89.appspot.com",
  messagingSenderId: "750059822631",
  appId: "1:750059822631:web:13ddb7bc1b18698f277802",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
