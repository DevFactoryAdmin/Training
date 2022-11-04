import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiPI01b8gO5KQoCnK-c-g9CzhKs_JYyqE",
  authDomain: "testproject-fb29c.firebaseapp.com",
  projectId: "testproject-fb29c",
  storageBucket: "testproject-fb29c.appspot.com",
  messagingSenderId: "345303961659",
  appId: "1:345303961659:web:f3053591ea4c92da1e4c1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)