// product-item.js

class ProductItem extends HTMLElement {
  localStorage = window.localStorage;

  constructor(id, title, price, image, status) {

    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadowRoot = this.attachShadow({mode: 'open'});



    const product = document.createElement('li');
    product.setAttribute('class', 'product');

    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', title);
    img.setAttribute('width', 200);
    product.appendChild(img);

    const pTitle = document.createElement('p');
    pTitle.setAttribute('class', 'title');
    pTitle.textContent = title;
    product.appendChild(pTitle);

    const pPrice = document.createElement('p');
    pPrice.setAttribute('class', 'price');
    pPrice.textContent = "$" + price;
    product.appendChild(pPrice);
    
    const button = document.createElement('button');
    button.textContent = status;
    product.appendChild(button);

    button.onclick = function() {
      let count = document.getElementById('cart-count');
      
      if(button.textContent == "Add to Cart") {
        cart.push(id);
        button.textContent = "Remove from Cart";
        alert('Added to Cart!');
      }
      else {
        cart.splice(cart.indexOf(id), 1);
        button.textContent = "Add to Cart";
        alert('Removed from Cart!');
      }
      count.textContent = cart.length;
      localStorage.setItem('cart', JSON.stringify(cart));
    }


    let style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(product);
  }
}

customElements.define('product-item', ProductItem);
