import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as databaseRef, push, set, get, remove, getDatabase, child} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";



async function pageInit( productName, urlPath, productDetails, like, price){
    const key = sessionStorage.getItem('key')
    console.log("update page")
    console.log(key)
    // ref with key   rental/key
    const productRef = databaseRef(db, `products/${key}`);

    
    
    


document.querySelector("#productImage").addEventListener("change", onImageSelected);
document.forms["productForm"].addEventListener("submit", onAddProduct); 


    function onAddProduct(e) {
        e.preventDefault();
        uploadNewProduct();
    }
  

   function onImageSelected(e) {
    //selected file
    // file objets   [fileObj, fileObj, fileObj]
    let file = e.target.files[0];
    // update the display with the requested image
    document.querySelector(".display img").src = URL.createObjectURL(file);
}

    async function uploadNewProduct() {
        // form data
        const productName = document.querySelector('#productName').value.trim();
        const productDetails = document.querySelector('#productDetails').value.trim();
        const like = document.querySelector('#productDetails').value.trim();
        const price = document.querySelector('#productPrice').value.trim();
        const file = document.querySelector('#productImage').files[0]
        
        // paths to the data to write
        const imageRef =     storageRef( storage, `images/${file.name}`);
        const dataRef =  databaseRef( db, `products`)


        // uploading file to the storage bucket
        const uploadResult = await uploadBytes(imageRef, file);
        // url to the image stored in storage bucket
        const urlPath =  await getDownloadURL(imageRef) 
        // path on the storage bucket to the image
        const storagePath = uploadResult.metadata.fullPath;

        remove(productRef)
        // firebase unique key
        const itemRef = await push(dataRef)
        // const itemRef = await push(dataRef).key;
        // const postData = 
        // {
        //     key:key,
            
        //     urlPath:urlPath,
        //     storagePath:storagePath,
        //     productName:productName,
        //     productDetails:productDetails,
        //     like:like,
        //     price:price
        // }
    
        set(itemRef,{
           key:itemRef.key,
           sku:`yc${itemRef.key}`,
           urlPath,
           storagePath,
           productName,
           productDetails,
           like,
           price: `$${price}`
        })
        
    }


    
  }
  pageInit()