import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import { productCard } from "./templates/productCard";  

function pageInit(){
    const key = sessionStorage.getItem('key')
    console.log("delete page")
    console.log(key)
    // ref with the key
    const productRef = dataRef(db, 'products/');
    const productSnapShot = await get(productRef)
    const data = productSnapShot.val();

    delete productCard.key;
    // remove(ref)
  }
  
  pageInit()