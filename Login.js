
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "./firebase/app";
 import { getAnalytics } from "./firebase/analytics";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDVHD50Hlc5gsX2rZP45eZLSLzkuZ7yh7k",
   authDomain: "planner-4de9d.firebaseapp.com",
   projectId: "planner-4de9d",
   storageBucket: "planner-4de9d.appspot.com",
   messagingSenderId: "974223851746",
   appId: "1:974223851746:web:271a4995827d21d9619ebb",
   measurementId: "G-W04DNTXNMY"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);