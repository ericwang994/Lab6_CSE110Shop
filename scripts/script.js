// Script.js

let localStorage = window.localStorage;

let cart = [];
let productList = document.getElementById('product-list');
let status = "";

window.addEventListener('DOMContentLoaded', () => {

  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
      if(localStorage.getItem('data') == null) {
        localStorage.setItem('data', JSON.stringify(json))
      }
      
      if (localStorage.getItem('cart') != null) {

        cart = JSON.parse(localStorage.getItem('cart'));
        document.getElementById('cart-count').textContent = cart.length;
      } 
      
      for (let i = 0; i < json.length; i++) {
        
        if (cart.includes(json[i].id)) {
          status = 'Remove from Cart';
        }
        else {
          status = 'Add to Cart';
        }
        productList.appendChild(new ProductItem(json[i].id, json[i].title,
          json[i].price, json[i].image, status))
      }
    })
});
