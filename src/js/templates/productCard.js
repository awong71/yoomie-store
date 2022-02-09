import {ref as dataRef, get, set, update, remove} from 'firebase/database';
import {db} from '../libs/firebase/firebaseConfig';
function productCard ({key, productName, urlPath, productDetails, like, price}){
  const template = `
      
  <aside class="vacation-rentals">

  <figure>
  <img src="${urlPath}" width="160" alt="teether">
      <figcaption> <h2>${productName}</h2></figcaption>
      <figcaption> <h2>${productDetails}</h2></figcaption>
      <figcaption> <h2>${like}</h2></figcaption>
      <figcaption> <h2>${price}</h2></figcaption>
  </figure>

  <footer>
      <button id="edit" data-key="${key}" >edit</button>
      <button id="delete" data-key="${key}" >delete</button>
  </footer>

</aside>
  `
  const element = document.createRange().createContextualFragment(template).children[0]
  addCardControls(element)
  return element
}

function addCardControls(product){
    product.querySelector('#edit').addEventListener('click', onEditProduct)
    product.querySelector('#delete').addEventListener('click', onRemoveProduct)
}


function onEditProduct(e){
    const key = e.target.dataset.key 
    sessionStorage.setItem('key', key)
    console.log(key)
    window.location.assign('update.html')
}

async function onRemoveProduct(e){
    const key = e.target.dataset.key 
    sessionStorage.setItem('key', key)
    // const key = sessionStorage.getItem('key')
    console.log("update page")
    console.log(key)
    // ref with key   rental/key
    const productRef = dataRef(db, `products/${key}`);
    
    window.location.assign('read.html')

    return remove(productRef)
}
export {productCard}