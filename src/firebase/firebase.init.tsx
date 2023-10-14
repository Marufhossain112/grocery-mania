// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2wTte53LkxJSARaiOp7obTjPxcCCHrYU",
    authDomain: "grocery-mania-92271.firebaseapp.com",
    projectId: "grocery-mania-92271",
    storageBucket: "grocery-mania-92271.appspot.com",
    messagingSenderId: "33192333465",
    appId: "1:33192333465:web:1b888a49bb700704f72808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;