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
  apiKey: "AIzaSyCrPCpMDU5MwfTZkVthhhc2wXWUL5Z5A44",
  authDomain: "nhh-netflix-27874.firebaseapp.com",
  projectId: "nhh-netflix-27874",
  storageBucket: "nhh-netflix-27874.appspot.com",
  messagingSenderId: "108201249022",
  appId: "1:108201249022:web:59e25864b41a30a9cdfdaf",
  measurementId: "G-E1PK8PGVQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);