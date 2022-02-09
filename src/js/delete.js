import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get, remove, getDatabase, child} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";



async function pageInit( productName, urlPath, productDetails, like, price){
    const key = sessionStorage.getItem('key')
    console.log("update page")
    console.log(key)
    // ref with key   rental/key
    const productRef = databaseRef(db, `products/${key}`);
    remove(productRef)
  }
  pageInit()