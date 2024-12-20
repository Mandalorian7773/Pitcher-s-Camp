// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQoJCRjDsRV2_u2y_eINdQuR7m0iZ0dPA",
  authDomain: "pitch1-9c6a3.firebaseapp.com",
  projectId: "pitch1-9c6a3",
  storageBucket: "pitch1-9c6a3.firebasestorage.app",
  messagingSenderId: "448449550386",
  appId: "1:448449550386:web:9acd38f86f7dc87a25842b",
  measurementId: "G-3PX75W9JEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);