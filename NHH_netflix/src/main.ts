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
  apiKey: "AIzaSyAYbNeZPGHQwrta_GhE8i1d4-Rq_W_XcmE",
  authDomain: "nhh-netflix.firebaseapp.com",
  projectId: "nhh-netflix",
  storageBucket: "nhh-netflix.appspot.com",
  messagingSenderId: "234168675310",
  appId: "1:234168675310:web:a4f6f546c6eb6876acfcff",
  measurementId: "G-S8H8VC9MF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);