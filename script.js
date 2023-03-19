let productsinCart = [];
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("sum-prices");
const products = document.querySelectorAll('.product-under');


const countTheSumPrice = function() {
  let sumPrice = 0;
  productsinCart.forEach(product => {
    sumPrice += product.price;
  });
  return sumPrice;
}

const updateShoppingCartHtml = function () {
  if(productsinCart.length > 0){
    let results = productsinCart.map(product => {
      return `
      <li class="buyItem">
						<img src="${product.image}" alt=" a very nice Microlight Jacket">
						<div>
							<h5>${product.name}</h5>
							<h6>kr ${product.price}</h6>
							<div>
								<button class="button-minus" data-id='${product.id}'>-</button>
								<span class="countOfProduct">${product.count}</span>
                <button class="button-plus" data-id='${product.id}'>+</button>
                <br>
                <a href="checkout2page.html">
                <button class="button-checkout">Checkout</button> 
                </a>
							</div>
						</div>
					</li>
      
      `
    })
    parentElement.innerHTML = results.join('');
    document.querySelector('.checkout').classList.remove('hidden');
    cartSumPrice.innerHTML = '$' + countTheSumPrice(); 
  }
  else{
    document.querySelector('.checkout').classList.add('hidden');
    parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
    cartSumPrice.innerHTML = ''; 
  }
}

function updateProductInCart(product) {
   for(let i=0; i < productsinCart.length; i++) {
    if(productsinCart[i].id == product.id) {
      productsinCart[i].count += 1;
      productsinCart[i].price =   productsinCart[i].basePrice + productsinCart[i].count;
      return;
    }
   }
    productsinCart.push(product);
}

products.forEach(product => {
  product.addEventListener('click', (e) =>{
      if (e.target.classList.contains('addToCart')){
        const productID = e.target.dataset.productId;
        const productName = product.querySelector('.productName').innerHTML;
        const productPrice = product.querySelector('.priceValue').innerHTML;
        const productImage = product.querySelector('img').src;
        let productToCart = {
          name: productName,
          image: productImage,
          id: productID,
          count : 1,
          price: +productPrice,
          basePrice : +productPrice,
        }
        updateProductInCart(productToCart);
        updateShoppingCartHtml();
      }
  });
});

parentElement.addEventListener('click', (e) =>{
  const isPlusButton = e.target.classList.contains('button-plus');
  const isMinusButton = e.target.classList.contains('button-minus');
  if(isPlusButton || isMinusButton) {
    for(let i=0; i < productsinCart.length; i++){
      if(productsinCart[i].id === e.target.dataset.id){
        if(isPlusButton){
          productsinCart[i].count += 1;

        }
        else if(isMinusButton){
          productsinCart[i].count -= 1;
        }
        productsinCart[i].price = productsinCart[i].basePrice *productsinCart[i].count;
      }
      if(productsinCart[i].count <= 0){
        productsinCart.splice(i, 1);
      }
      
    }
    updateShoppingCartHtml();
  }

});