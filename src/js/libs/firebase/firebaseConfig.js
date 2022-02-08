// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtvC36OHSJHMOH4qmnMfX93ixWuaZ6fiU",
  authDomain: "yoomieco-75413.firebaseapp.com",
  databaseURL: "https://yoomieco-75413-default-rtdb.firebaseio.com",
  projectId: "yoomieco-75413",
  storageBucket: "yoomieco-75413.appspot.com",
  messagingSenderId: "990273068719",
  appId: "1:990273068719:web:49ba811f86be72d3e7fe5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const storage = getStorage(app)
export {db, storage}