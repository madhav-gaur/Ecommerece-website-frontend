// loading animation 

window.showLoader= function() {
	document.getElementById('loader').style.display = 'flex';
}  
window.hideLoader = function(){
	document.getElementById('loader').style.display = 'none';
}












// toast generator
window.showToast = function(productName, linkHref, linkText = 'View Wishlist') {
	const toast = document.createElement('div');
	toast.className = 'toastHero';
  
	const msg = document.createElement('div');
	msg.className = 'toast-msg';
	msg.innerText = `"${productName}" has been added to your Bag.`;
  
	const btn = document.createElement('a');
	btn.className = 'theme-btn';
	btn.innerText = linkText;
	btn.href = linkHref;
  
	toast.appendChild(msg);
	toast.appendChild(btn);
	document.querySelector('.toast-box').appendChild(toast);
  
	setTimeout(() => {
	  toast.style.opacity = '0';
	  toast.style.transform = 'translateY(-10px)';
	  setTimeout(() => toast.remove(), 300); 
	}, 4000);
  }
  


window.toastSecondary = function(toastMsg, icon) {
	const toast = document.createElement('div');
	toast.className = 'toastHero';
	toast.style.padding = '0.5rem'
	toast.style.maxWidth = '350px'
	const msgIcon = document.createElement('div')
	msgIcon.innerHTML = icon
	toast.appendChild(msgIcon)

	const msg = document.createElement('div');
	msg.className = 'toast-msg';
	msg.innerText = toastMsg;
	msg.style.marginBottom = '0'
	toast.appendChild(msg);
	document.querySelector('.toast-box').appendChild(toast);
	
	setTimeout(() => {
	  toast.style.opacity = '0';
	  toast.style.transform = 'translateY(-10px)';
	  setTimeout(() => toast.remove(), 300); 
	}, 4000);
  }
  

















// Function for adding items to cart
window.addToCartFunc = function(product, selector) {
	const addToCartbtns = selector.querySelectorAll('.addToCart');
	const prodQnt = selector.querySelector('.prodQnt');
  
	addToCartbtns.forEach(addToCart => {
	  addToCart.addEventListener('click', () => {
		updateGrandTotal();
		const quantity = prodQnt ? parseInt(prodQnt.innerText) : 1;
		product.quantity = quantity;
  
		let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
		let existingProduct = cartItems.find(item => item.id === product.id);
  
		if (existingProduct) {
		  existingProduct.quantity += quantity;
		} else {
		  cartItems.push(product);
		}
  
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
		// Show loader and then toast
		showLoader();
  
		setTimeout(() => {
		  showToast(product.name, 'cart.html', 'View Bag');
	     	totalWishCount();
			updateGrandTotal();
		  	hideLoader();
		}, 400);
	  });
	});
  }
  









// function for adding items to wishlist

window.addToWish = function(product, selector){
	let wishlistBtn = selector.querySelector('.wishlistBtn');
  	const productId = product.id;
  	let wishlistItem = JSON.parse(localStorage.getItem('wishlistItem')) || [];
  
  // Initial icon setup
  	const exists = wishlistItem.find(item => item.id === productId);
 	if (exists) {
		wishlistBtn.classList.remove('bi-suit-heart');
		wishlistBtn.classList.add('bi-suit-heart-fill');
  	}
  
  	wishlistBtn.addEventListener('click', () => {
		wishlistItem = JSON.parse(localStorage.getItem('wishlistItem')) || [];
		const index = wishlistItem.findIndex(item => item.id === productId);
		const wishToolTip = selector.querySelector('.wishToolTip')
		if (index > -1) {
	  // Product exists → remove
			wishToolTip.innerText = 'Add to Wishlist'
	  		wishlistItem.splice(index, 1);
	  		wishlistBtn.classList.remove('bi-suit-heart-fill');
	  		wishlistBtn.classList.add('bi-suit-heart');
		} else {
	  // Product doesn't exist → add
		  	wishToolTip.innerText = 'Remove from Wishlist'
	  		wishlistItem.push({ ...product });
	  		wishlistBtn.classList.remove('bi-suit-heart');
	     	wishlistBtn.classList.add('bi-suit-heart-fill');
	}
  
	localStorage.setItem('wishlistItem', JSON.stringify(wishlistItem));
	updateGrandTotal()
	totalWishCount();
  });

}
// add all to cart

window.addAllToCart = function () {
	const addAll = document.querySelector('.addAll');
	if (!addAll) return; // Safeguard in case button is not on the page

	// Prevent duplicate listeners by checking a custom flag
	if (addAll.dataset.listenerAttached === "true") return;

	addAll.addEventListener('click', () => {
		const wishlistItem = JSON.parse(localStorage.getItem('wishlistItem')) || [];
		const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

		wishlistItem.forEach(wish => {
			const existingIndex = cartItems.findIndex(cart => cart.id === wish.id);
			if (existingIndex !== -1) {
				cartItems[existingIndex].quantity += 1;
			} else {
				cartItems.push({ ...wish, quantity: 1 });
			}
		});

		localStorage.setItem('cartItems', JSON.stringify(cartItems));

		showLoader();
		setTimeout(() => {
			hideLoader();
			updateGrandTotal();
			toastSecondary(
				'All items Successfully Added to Bag',
				'<i class="bi bi-check-circle-fill" style="margin-left: 1rem; font-size:1.5rem; color: rgb(37, 185, 37);"></i>'
			);
		}, 1000);
	});

	// Mark that listener is now attached
	addAll.dataset.listenerAttached = "true";
};













// marking stock status




window.stockStatusFunc = function(product, selector){
		const percentOffHero = selector.querySelector('.percentOffHero')
	if(product.percentOff > 25 && percentOffHero){
		percentOffHero.innerText = `-${product.percentOff}%`
	}else{
		percentOffHero.style.display = 'none'
	}
	let inStock = selector.querySelector('.inStock')        

	if(product.onlyLeft != null){
	  inStock.innerText = `Only ${product.onlyLeft} left`
	  inStock.style.color = 'var(--global-color-text)';
	  inStock.style.borderColor = 'var(--global)';
	}
	if(product.onlyLeft === null){
	  if(product.inStock.toLowerCase() === 'yes'){
		inStock.style.display = 'none';
	  } else if(product.inStock.toLowerCase() === 'no'){
		inStock.innerText = 'Out of Stock';
		percentOffHero.style.display = 'none'
	  }
	}

}

  
// product qnt


// window.updateQuantity = function(button, quantityElem, change) {
//   	if (!button || !quantityElem) return;

//   	button.addEventListener('click', () => {
//     	let current = parseInt(quantityElem.innerText);
//     	let updated = current + change;

//     	let maxLimit = product.onlyLeft !== '' ? parseInt(product.onlyLeft) : 10;

//     	if (updated >= 1 && updated <= maxLimit) {
//       	quantityElem.innerText = updated;
//     	}
//   });
// }
// empty msg
// wishlistProd = document.querySelector('#wishlistProd')

window.renderEmptyMessage = function(container, containerH, emptyBtn, docName, iconName ) {
	const onSelectFunc = document.querySelector('.onSelectFunc')
	if(onSelectFunc){
		onSelectFunc.style.display = 'none'
	}
	const addAll = document.querySelector('.addAll')
	if(addAll){
	addAll.style.display = 'none'
	}
	container.innerHTML = `	
	  <div class="empty-wishlist-msg">
	  	<i class= "bi bi-${iconName} empty-icon"><span>0</span></i>
		<p class="empty-cart-msg">Your ${docName} is Currently Empty.</p>
		<a href="index.html"><button type="button" class="theme-btn">Return to Shop</button></a>
	  </div>`;
	containerH.style.justifyContent = 'center';
	emptyBtn.style.display = 'none';
	const billingAr = document.querySelector('.billing-ar');
	const cartFluid = document.querySelector('.cartFluid');
	if(billingAr){
	billingAr.style.display = 'none'
	}
	if(cartFluid){
	cartFluid.style.flexDirection = 'column'
	}
  }





// empty products 


window.clearAllProduct = function(emptyBtn, itemName, container, containerH, docName, iconName){

if(emptyBtn){
	emptyBtn.addEventListener('click', () => {
		const clearWarn = document.querySelector('.clear-warn');
		clearWarn.style.display = 'flex';
		overlay.style.display = 'flex';
	
		const closeClearBtns = clearWarn.querySelectorAll('.close-warn');
		const confirmClear = clearWarn.querySelector('.clearWishlist');
	
		const closeClear = () => {
		  clearWarn.style.display = 'none';
		  overlay.style.display = 'none';
		};
	
		closeClearBtns.forEach(btn => btn.addEventListener('click', closeClear));
		overlay.addEventListener('click', closeClear);
	
		confirmClear.addEventListener('click', () => {
			closeClear();

			showLoader();
			setTimeout(() => {	
				localStorage.setItem(itemName, JSON.stringify([]));
				updateGrandTotal()
				updateWishCount();
				totalWishCount()
				renderEmptyMessage(container, containerH, emptyBtn, docName, iconName);
			  hideLoader();
			}, 800);
		});
	  });
}
}

// empty-msg










// no of items in wishlist
window.totalWishCount = function() {
	const wishlistItem = JSON.parse(localStorage.getItem('wishlistItem')) || [];
	const totalWish = document.querySelector('.totalWish');
  
	if (wishlistItem.length === 0) {
	  totalWish.style.display = 'none';
	} else {
	  totalWish.style.display = 'inline-block';
	  totalWish.innerText = wishlistItem.length;
	}
}
  
  

// Call after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	updateGrandTotal();
	totalWishCount();
});















// billing


window.updateGrandTotal = function() {
	
	let totaAmt = document.querySelector('.total-amt');
	let totalProds = document.querySelectorAll('.totalProd');
	let deliveryCharge = document.querySelector('.deliveryCharge');
	let finalAmt = document.querySelector('.final-amt');
	let shipDisc = document.querySelector('.shipDisc')
	let deliveryChargePrice = 0;

	const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
	let totalPrice = 0;
	let totalItem = 0;

	cartItems.forEach(item => {
		totalItem += item.quantity;
		totalPrice += item.price * item.quantity;
	});

	if (totaAmt) {
		totaAmt.innerText = `${totalPrice} Rs`;
		if (totalPrice>0 &&  totalPrice <= 5000) {
			deliveryChargePrice = 500;			
			deliveryCharge.innerText = `${500} Rs`
			shipDisc.classList.add('displayNone')
		} else{
			deliveryCharge.innerText = '500 Rs'
			shipDisc.classList.remove('displayNone')
			deliveryChargePrice = 0
		}
		if (finalAmt) {
			const totalWithDelivery = totalPrice + deliveryChargePrice;
			const discountAmount = (finalDisc / 100) * totalWithDelivery;
			finalAmt.innerText = `${Math.floor(totalWithDelivery - discountAmount)} Rs`;
			finalAmt.style.letterSpacing = '1px'
}
	}

	// Always update total products if present
	totalProds.forEach(totalProd => {
		if(totalItem == 0){
			totalProd.style.display = 'none'
		}else{
			totalProd.textContent = totalItem;
		}
	});



}



const couponCodes = {'DISC20': 20,'DISC10': 10,'DISC15': 15, 'SHOP49': 49 }

const openCouponBtn = document.querySelector('.openCouponBtn');
const openCouponState = document.querySelector('.openCouponState');
const couponText = document.querySelector('.couponText');
const applyCoupon = document.querySelector('.applyCoupon');
const couponForm = document.querySelector('.couponForm');
const couponDisc = document.querySelector('.couponDisc')
const couponVal = document.querySelector('.couponVal')

let finalDisc = 0;
let isCoupon = false;
if(openCouponBtn &&couponText && applyCoupon){


openCouponBtn.addEventListener('click', () => {
	isCoupon = !isCoupon;
	openCouponState.innerText = isCoupon ? '-' : '+';
	couponForm.classList.toggle('active', isCoupon);
	couponText.focus()

	if (!isCoupon) {
		couponText.value = '';
		finalDisc = 0;
		updateGrandTotal();
	}
});

couponText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!applyCoupon.disabled) {
      applyCoupon.click();
      applyCoupon.disabled = true; 
      setTimeout(() => {
        applyCoupon.disabled = false; 
      }, 2000);
    }
  }
});

applyCoupon.addEventListener('click', ()=>{
	const couponTextVal = couponText.value.toLowerCase().trim();
	if(couponTextVal != ''){
		let isValid = false;
		for(let coupon in couponCodes){
			if(couponTextVal === coupon.toLowerCase()){		
				finalDisc = couponCodes[coupon]
				isValid = true
				showLoader();
        		setTimeout(() => {					
					toastSecondary(`${finalDisc}% Coupon applied to your Purchase`, '<i class="bi bi-check-circle-fill" style="margin-left: 1rem; font-size:1.5rem;   color: rgb(37, 185, 37);"></i>')
					couponVal.classList.remove('displayNone')
					couponDisc.innerText = `${couponCodes[coupon]}%`
				  	updateGrandTotal()
          		  	hideLoader();
        		}, 600);	
				break
			}
		}
		if(!isValid){
			showLoader();
        	setTimeout(() => {					
				toastSecondary(`Invalid Coupon`, '<i class="bi bi-exclamation-circle-fill" style="margin-left: 1rem; font-size:1.5rem;   color: rgb(207, 0, 0);"></i>')
				couponVal.classList.add('displayNone')
			  	updateGrandTotal()
				finalDisc = 0
          	  	hideLoader();
				couponText.value = ''
        	}, 600);
			}
	}
});
}