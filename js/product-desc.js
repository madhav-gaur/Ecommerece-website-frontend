// import { checkStockStatus} from './main.js';
// import {funcAddToCart } from './main.js'
// import {products} from "./products";
document.addEventListener('DOMContentLoaded', () => {


// showLoader()
// setTimeout(()=>{
//   hideLoader()
// }, 500)

const overlay = document.querySelector('.overlay')
const toastHero = document.querySelector('.toastHero')
const detailHero = document.querySelector('.detailHero')
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const product = products.find(p => p.id == id);
if (product) {
  detailHero.innerHTML = 
  `       <div class= "imageWrapper">
                <div class="left-col">
                    <div class ="wishlistBtn bi bi-suit-heart">
                      <span class='wishToolTip'> Add To WishList</span>
                </div>
                    <div class="visibleImg"><img src="${product.image}" alt="${product.name}"> <span href='' class="category">${product.category}</span></div>
                    <div class="extraImg"></div>
                    <div class="product-add-buy">
                      <div class= "resp-price">₹${product.price}</div>
                      <div class="addToCart theme-btn"> <i style ="margin-right : 1rem;" class="bi bi-bag"> </i>Add to Bag</div>
                      <div class="buyNow theme-btn">Buy Now</div>
                    </div>                    
                </div>
          </div>
          <div class = "detailWrapper">
                <div class="center-col">
                    <div class="product-desc">${product.description}</div>
                    <div class="prodRatingElem">
                        <p class="prod-rate">${product.rating}</p>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="priceArea">
                        <span class ='priceHero'>
                            <span class="percentOff">-${product.percentOff}%</span>
                            <span class="price">₹${product.price}</span>
                            <p>Inclusive Of all Taxes</p>
                        </span>
                        <span class= "mrp">M.R.P.: <span>₹${product.price + (product.percentOff)*product.price}</span></span>
                        <span class="checkInStock inStock"></span>
                        <div class="prodQntElem"> Quantity
                          <div class="stockElem">
                            <button class="removeItem"><i class="bi bi-dash"></i>
                              <span class='theme-tooltip'>Decrease Quantity</span>
                            </button>
                            <p class="prodQnt">${product.quantity || 1}</p>
                          <button class="addItem "><i class="bi bi-plus"></i>
                              <span class='theme-tooltip'>Increase Quantity</span>
                          </button>
                          </div>
                        </div>
  
                    </div>
                    <div class="bankOffers"><h2>Offers</h2></div>
                    <div class="shopFeature"><h2>Features</h2></div>
                    <!-- like refund COD secure -->
                    <div class="productSmallDetails"></div>
                    <div class="productLargeDetails"></div>

                    <div class="about">About this Item
                      <div class="aboutArea"></div>
                    </div>
                    <div class="report"><a href="#">Report an issue with this product </a></div>
                      </div>
                </div>
                `
addToWish(product, document)

checkStockStatus(product, document)

  const moreDetails = (detailArr, detailContainer) => {
    let detailHTML = '<ul>';
                
    if (Array.isArray(detailArr)) {
      // If detailArr is an array
      detailArr.forEach(item => {
        detailHTML += `<li>${item}</li>`;
      });
      } else {
        // If detailArr is an object
        for (let key in detailArr) {
          detailHTML += `<li><strong>${key}</strong> <span> ${detailArr[key]} </span></li>`;
        }
      }
                
    detailHTML += '</ul>';
    document.querySelector(`.${detailContainer}`).innerHTML = detailHTML;
    }
                
   moreDetails(product.moreSmallDetails, 'productSmallDetails')
   moreDetails(product.moreLargeDetails, 'productLargeDetails')
   moreDetails(product.about, 'aboutArea')


   const percentOff = document.querySelector('.percentOff')
	if(product.percentOff === null){
		percentOff.style.display = 'none'
}


const addToCart = document.querySelector('.addToCart')


let stockStatus = product.inStock.toLowerCase();
if (stockStatus === 'no') {
  addToCart.classList.add('disable');
  return;
} else {
  addToCart.classList.remove('disable');
}


let addItem = document.querySelector('.addItem');
let removeItem = document.querySelector('.removeItem');
let prodQnt = document.querySelector('.prodQnt');
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
cartItems.forEach((index)=>{
  window.updateQuantity = function(buttons, quantities, change) {
			buttons.addEventListener('click', () => {
				let current = parseInt(quantities.innerText);
				let updated = current + change;
				if (updated >= 1 && updated <= 10) {
          showLoader();
          setTimeout(() => {
				    updateGrandTotal()
            quantities.innerText = updated;
            hideLoader();
          }, 600);
					cartItems[index]= updated;
					localStorage.setItem('cartItems', JSON.stringify(cartItems));
				}
			});
		}
  
});

updateQuantity(addItem, prodQnt, 1); // For increment
updateQuantity(removeItem, prodQnt, -1); // For decrement


addToCartFunc(product, document)

const visibleImg = document.querySelector('.visibleImg')
const imageModal = document.querySelector('.imageModal')

imageModal.innerHTML = `
<span class="imgModalClose"><i class="fa fa-close"></i></span>
<div class="visibleImgModal"><img src="${product.image}" alt="${product.name}"></div>
<div class="extraImg"></div>`
visibleImg.addEventListener('click', ()=>{
  
  imageModal.style.display = 'flex'
  overlay.style.display = 'flex '

});

let imgModalCloseBtn = document.querySelector('.imgModalClose');
function imageModalClose(closeElem){
  closeElem.addEventListener('click', ()=>{
    imageModal.style.display = 'none'
    overlay.style.display = 'none '
})
} 
imageModalClose(imgModalCloseBtn)
imageModalClose(overlay)

// imgModalCloseBtn.addEventListener('click', ()=>{
//   imageModalClose()
// })






}

});


// const allProducts = JSON.parse(localStorage.getItem('allProducts')); // Or fetch from JSON
const urlParams = new URLSearchParams(window.location.search);
const currentId = urlParams.get('id');
const currentProduct = products.find(prod => prod.id === currentId)

const recommendationsContainer = document.getElementById('recommendedProducts');

const recommended = products
.filter(prod => prod.sub === currentProduct.sub && prod.id !== currentProduct.id)
.slice(0, 4);
  recommended.forEach(product => {
  const card = document.createElement('div');
  card.className = 'recommended-card info';

      card.innerHTML = `
          <div class="stock">
            <div class="inStock"></div>
            <div class="percentOffHero"></div>
          </div>
        <div class="up-card">
          <div class="imgCont">
            <div class ="wishlistBtn bi bi-suit-heart">
              <span class="wishToolTip">Add to Wishlist</span>
            </div>
            <a href="product-desc.html?id=${product.id}">
              <img class="prod-img" src="${product.image}" alt="${product.name}">
            </a>
            <div class='info-btns'>
              <div class="theme-btn">
              <a class= "bi bi-eye" href="product-desc.html?id=${product.id}"><i style="margin-right: 0.3rem;" class=""></i> View Item</a>                
              </div>
              <div class="addToCart theme-btn">
                <i style="margin-right: 0.3rem;" class="bi bi-bag"></i> Add To Bag
              </div>
            </div>
            <div class='info-btns-resp'>
              <div class="theme-btn">
              <a href="product-desc.html?id=${product.id}"><i style="margin-right: 0.3rem;" class="bi bi-eye"></i></a>                
              </div>
              <div class="addToCart addToCartResp theme-btn">
                <i style="margin-right: 0.3rem;" class="bi bi-bag"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="down-card">
          <div class="nameRate">
            <a class="prodName"><h2 class="prodName">${product.name}</h2></a>
            <div class="prodRatingElem" style = 'display: none;'>
              <p class="prod-rate">${product.rating}</p>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <a href="product-desc.html?id=${product.id}" class="prod-desc">${product.description}</a>

          <div class="prodQntElem"> Quantity
            <div class="stockElem">
              <button class="removeItem"><i class="bi bi-dash"></i><span class= 'theme-tooltip'> Decrease quantity</span></button>
              <p class="prodQnt">1</p>
              <button class="addItem"><i class="bi bi-plus"></i><span class= 'theme-tooltip'> Increase quantity</span></button>
            </div>
          </div>
                    <div class="prod-price-cont">
            <p class="prod-price">₹${product.price}</p>
          </div>
        </div>`;

  recommendationsContainer.appendChild(card);
});

