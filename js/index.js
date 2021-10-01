// ITERATION 1
let totalPrice = 0;



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const subTotal = priceValue * quantityValue;
  const subTotalLocation = product.querySelector('.subtotal span');
  subTotalLocation.textContent = subTotal;
  return subTotal;
  //console.log(productValue);
  //... your code goes here
}


function calculateAll() {
  // ITERATION 2

  const products = document.getElementsByClassName('product');
  const productsArray = [...products];

  productsArray.forEach(product => {
    // updateSubtotal(product)
    // console.log(updateSubtotal(product));//c'est iciii que ça bug
    totalPrice += updateSubtotal(product);
    // totalPrice += product.subTotal;
    const totalValue = document.getElementById('total-value');
    totalValue.innerText = `$${totalPrice}`;
    //the DOM element that needs to be targeted id "total-value"   
  }
  );

  // ITERATION 3


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

}

// ITERATION 4

// CODE DE BASE
function removeProduct(event) {
const target = event.currentTarget;
//qu'est-ce qu'on veut retirer de où?
target.parentNode.parentNode.remove();
console.log('The target in remove is:', target);
}



// function removeProduct(click) {

// removedBtns.forEach(button => {
// button.addEventListener('click', removeProduct);
// })
// }


//   // loop through them, and add a click event listener to each, 



//   // passing a named function removeProduct as the callback argument. 
//   // If you need a hint on how to do this, just take a look at how we did 
//   // it with adding event listener on the calculatePricesBtn.


// ITERATION 5

// Add a click event handler to the "Create Product" that will take a function named createProduct as a callback.

function createProduct() {

  //In createProduct you should target the name and unit price input 
  //DOM nodes, extract their values
  const inputName = document.querySelector('type="text"')
  console.log(inputName);
  const inputPrice = 
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.getElementsByClassName('btn-remove');
  let removedBtns = [...removeBtns];
  removedBtns.forEach(button =>( button.addEventListener('click', removeProduct)
  ))
//Create product
const createBtn = document.getElementById('create');
createBtn.addEventListener('click', createProduct);

});

