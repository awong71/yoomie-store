import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {productCard} from './templates/productCard'
// Find and assign your constant.


// Create a click event for it that toggles a CSS class. 
const iconToggle = document.querySelector('.menu-icon');

iconToggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active-nav');
});


async function pageInit(){
    const productRef = dataRef(db, 'products/');
    const productSnapShot = await get(productRef)
    const data = productSnapShot.val();
   
    // Object of Objects  rental{{},{},{}}
    // Arrays of Objects
    // map filter reduce sort find ....
    // Object.keys()  Object.enteries() Object.values();

    // const productCard =   Object.values(data).map(product=>{
    //         const card = productCard(product)
    //         // layout thrashing
    //         document.body.append(card)
    //         return card
    //   })

    Object.values(data).map(product=>{
        const card = productCard(product)
        document.querySelector('.card').append(card)
    })
      
      


    
}

pageInit()