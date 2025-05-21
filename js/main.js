
document.addEventListener('DOMContentLoaded', () => {



const header = document.querySelector('header')
header.innerHTML = `
      <div class="head-cont">
        <div class="left-head-div" >
          <a title="discount" href="#">Best special offers! 40% Off!</a>
        </div>
        <div class="name">
          <a class="name-a " href="index.html">Shop</a>
        </div>

        <div class="nav-cont">
          <nav class="nav-resp">
            <div class="nav-item search-nav search-btn-resp">
              <a title="search" class="nav-a" href="#"><i class="bi bi-search" aria-hidden="true"></i><span class="theme-tooltip">Search Shop</span></a>
            </div>
            <div class="nav-item login-nav">
              <a class="nav-a" href="#">‎ <i class="bi bi-person"></i><span class="theme-tooltip">Profile</span></a>
            </div>
            <div class="nav-item cart">
              <a class="nav-a cart-a" href="cart.html">‎ <i class="bi bi-bag"></i>
                <span class="totalProd">0</span> <span class="theme-tooltip">Bag</span>
              </a>
            </div>
            <div class="nav-item wishlist">
              <a class="nav-a wishlist-a" href="wishlist.html">‎ <i class="bi bi-suit-heart"></i>
                <span class="totalWish">0</span><span class="theme-tooltip">Wishlist</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
`
const respSearch = document.querySelector('.resp-search')
respSearch.innerHTML = `
          <form action="#">
            <div class="resp-search-area">
              <div class="resp-search-area-hero">
                <h2>What are you looking for?</h2>
                <i class="fa fa-times close-search " aria-hidden="true"></i>
                <div class="search-area">
                  <input class="resp-search-inp" placeholder="Start Typing..." type="text">
                </div>
                <span class="search-msg">Start Typing...</span>
                <div class="search-details"></div>
              </div>
            </div>
          </form>
`
const footer = document.querySelector('footer')
footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-col about-us">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div class="footer-col customer-service">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div class="footer-col quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Best Sellers</a>
            </li>
            <li>
              <a href="#">Promotions</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
          </ul>
        </div>
        <div class="footer-col stay-connected">
          <h3>Stay Connected</h3>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <div class="newsletter">
            <form action="#">
              <input type="email" placeholder="Your email address">
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div class="social-links">
            <a href="#" title="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" title="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" title="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" title="Pinterest">
              <i class="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="copyright"> &copy; 2025 Shop. All rights reserved. </div>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div class="payment-methods">
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-paypal"></i>
        </div>
      </div>
`


let searchNav = document.querySelector('.search-btn-resp');
let respArea = document.querySelector('.resp-search-area');
let overlayWhite = document.querySelector('.overlay-full-white');
let isSearch = false;
let closeSearch = document.querySelector('.close-search');

// respSearch.forEach(search => {
	searchNav.addEventListener('click', () => {
		if (!isSearch) {
			respArea.style.display = 'flex';
			overlayWhite.style.display = 'block';
			isSearch = true;
			// document.body.style.overflow = 'hidden'
		}
		window.closeSearchHandler = function() {
			respArea.style.display = 'none';
			overlayWhite.style.display = 'none';
			input.value = ''
			resultsBox.innerHTML =''
			isSearch = false;
		};
		if (isSearch) {
			// overlayWhite.addEventListener('click', closeSearchHandler);
			closeSearch.addEventListener('click', closeSearchHandler);
		}
	// });
});



const input = document.querySelector('.resp-search-inp');
const resultsBox = document.querySelector('.search-details');
const searchMsg = document.querySelector('.search-msg');

input.addEventListener('keyup', (e) => {
  const value = e.target.value.toLowerCase().trim();

  const filtered = products.filter(prod =>
    prod.name.toLowerCase().includes(value) ||
    prod.brand.toLowerCase().includes(value) ||
    prod.category?.toLowerCase().includes(value) ||
    prod.sub?.toLowerCase().includes(value)
  );
  // Clear previous content initially
  resultsBox.innerHTML = '';
  searchMsg.innerText = '';

  if (value === '') {
  	searchMsg.innerText = 'Start Typing...';	
    return;
  }

  if (filtered.length > 0) {
	  showLoader()
  	  setTimeout(()=>{
		hideLoader();
  	  }, 300)
    resultsBox.innerHTML = filtered.map(p => `
      <li>
        <a href="product-desc.html?id=${p.id}" class="search-result">
          <div class="resultItem">
            <img src="${p.image}" alt="${p.name}">
            <p>${p.name}</p>
          </div>
        </a>
      </li>
    `).join('');
  } else {
    	showLoader()
  	  		setTimeout(()=>{
			hideLoader();
		    searchMsg.innerText = `No Results Found for ${value}`;
  	  	}, 800)
  }
});


window.checkStockStatus = function (product, productArea){

	
	if (product.inStock.toLowerCase() === 'yes') {
		productArea.querySelector('.inStock').textContent = 'In Stock';
	} else {
		productArea.querySelector('.inStock').textContent = 'Out of Stock';
		productArea.querySelector('.inStock').style.color = 'red';
	}
}	
});



