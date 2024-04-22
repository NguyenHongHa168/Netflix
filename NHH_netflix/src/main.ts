import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB15-On0IQjsHlfUSSrb-4pN8n00uHMvfo",
  authDomain: "nguyenhongha-netflix.firebaseapp.com",
  projectId: "nguyenhongha-netflix",
  storageBucket: "nguyenhongha-netflix.appspot.com",
  messagingSenderId: "457190578466",
  appId: "1:457190578466:web:1270a1daf10a69b5aaad7b",
  measurementId: "G-EM14HKFRLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);