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
  apiKey: "AIzaSyDxyAKQSSK6UFq99d1-BcX-z1nUvVRaIS8",
  authDomain: "netflix-v2-52dbb.firebaseapp.com",
  projectId: "netflix-v2-52dbb",
  storageBucket: "netflix-v2-52dbb.appspot.com",
  messagingSenderId: "948576670532",
  appId: "1:948576670532:web:b8e43766f3a99d7b6e7d11",
  measurementId: "G-N1KSL3PEXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);