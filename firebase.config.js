// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCRXhFCfbmed5ahe_ubzWHvNx4L1mNkevw",
	authDomain: "portfolio-creative.firebaseapp.com",
	projectId: "portfolio-creative",
	storageBucket: "portfolio-creative.firebasestorage.app",
	messagingSenderId: "894975504223",
	appId: "1:894975504223:web:913a1d4d117c0398c010ea",
	measurementId: "G-N97RBVL9Z4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
