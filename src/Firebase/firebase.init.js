// From starting the Firebase App
import { initializeApp } from "firebase/app";

// Getting the Firebase configuration
import firebaseConfig from "./firebase.config";

// Initialize Firebase Authentication
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
