// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX8f7kcRvIyVoH2iS6ZvYbngcuVk4tpuo",
  authDomain: "drinkstore-cb55c.firebaseapp.com",
  projectId: "drinkstore-cb55c",
  storageBucket: "drinkstore-cb55c.appspot.com",
  messagingSenderId: "568347295021",
  appId: "1:568347295021:web:25080a0210c3c84a35e7a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnections = ()=> app