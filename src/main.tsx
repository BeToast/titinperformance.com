import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBKj9LlG7LaMLL9oJUT8DtLxvZZko6hJF8",
   authDomain: "titinperformance-lukespates.firebaseapp.com",
   projectId: "titinperformance-lukespates",
   storageBucket: "titinperformance-lukespates.appspot.com",
   messagingSenderId: "813573312229",
   appId: "1:813573312229:web:e43b5e5c43ec0641dace0c",
   measurementId: "G-3QDC7823QH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
   // <React.StrictMode>
   <App />,
   // </React.StrictMode>,
);
