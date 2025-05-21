document.addEventListener('DOMContentLoaded', () => {


const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartProd = document.querySelector('.cartProd');
let cartH = document.querySelector('.cart-h')
let emptyCart = document.querySelector('.empty-cart')

if (cartItems.length === 0) {
  renderEmptyMessage(cartProd, cartH, emptyCart, 'Bag', 'bag')
} else {
	cartItems.forEach((prod, index) => {

		const cartInfo = document.createElement('div');
		cartInfo.className = 'info cartInfo';
    cartInfo.setAttribute('data-id', prod.id)
		cartInfo.innerHTML = 
`<div class="up-card">
  <div class="imgCont">
    <div class ="wishlistBtn bi bi-suit-heart">
        <span class='wishToolTip'> Add To WishList</span>
    </div>
      <button class="removeItemBtn theme-btn"><i class="bi bi-x"></i> <span class= 'theme-tooltip'> Remove Item </span></button>
    <a href="product-desc.html?id=${prod.id}">
      <img class="prod-img" src="${prod.image}" alt="${prod.name}">
    </a>
  </div>
</div>
<div class="down-card">
  <div class="nameRate">
    <a href="product-desc.html?id=${prod.id}" class="prodName">
      <h2 class="prodName">${prod.name}</h2>
    </a>
  </div>
  <a href="product-desc.html?id=${prod.id}" class="prod-desc">${prod.description}</a>
  <div class="prod-price-cont">
    <p class="prod-price" style = 'margin-bottom:0'>₹${prod.price}</p>
  </div>
  <div class="prodQntElem"> Quantity <div class="stockElem">
      <button class="removeItem"><i class="bi bi-dash"></i><span class= 'theme-tooltip'>decrease quantity</span></button>
      <p class="prodQnt">${prod.quantity || 1}</p>
      <button class="addItem"><i class="bi bi-plus"></i><span class= 'theme-tooltip'> Increase quantity</span></button>
    </div>
  </div>
</div>
<div class="remove-warn">
  <div class="warn-head" style="display: flex; justify-content: space-between;">
    <h2>Remove Item</h2>
    <i style="font-size: 1.3rem; cursor: pointer;" class="close-warn fa fa-close"></i>
  </div>
  <p>Are you sure you want to remove this item?</p>
  <div class="remove-warn-btns">
    <div style="width: 50%; justify-content: center; display: flex;" class="theme-btn removeItemCart">Yes, Remove</div>
    <div class="close-warn theme-btn">Cancel</div>
  </div>
</div>`;
    if(cartProd&& cartInfo){  
	  	cartProd.append(cartInfo);
      clearAllProduct(emptyCart, 'cartItems', cartProd, cartH, 'Bag', 'bag')
    }

		let addItem = cartInfo.querySelector('.addItem');
		let removeItem = cartInfo.querySelector('.removeItem');
		let prodQnt = cartInfo.querySelector('.prodQnt');

		function updateQuantity(buttons, quantities, change) {
			buttons.addEventListener('click', () => {
				let current = parseInt(quantities.innerText);
				let updated = current + change;
				if (updated >= 1 && updated <= 10) {
					quantities.innerText = updated;
					cartItems[index].quantity = updated;
					localStorage.setItem('cartItems', JSON.stringify(cartItems));
				}
        showLoader();
        setTimeout(() => {
				  updateGrandTotal()
          hideLoader();
        }, 600);
			});
		}

    addToWish(prod, cartInfo)
		// Handling Quantity Change
		updateQuantity(addItem, prodQnt, 1);
		updateQuantity(removeItem, prodQnt, -1);

		// Handling the removal of an item from the cart
		const removeItemBtn = cartInfo.querySelector('.removeItemBtn');
		const removeItemCart = cartInfo.querySelector('.removeItemCart');
		const removeWarn = cartInfo.querySelector('.remove-warn');
		const overlay = document.querySelector('.overlay')
		removeItemBtn.addEventListener('click', () => {
			removeWarn.style.display = 'flex';
			overlay.style.display = 'flex'
		});
    // Function to update the cart message if it's empty
function updateCartMessage() {
	if (cartItems.length === 0) {
    renderEmptyMessage(cartProd, cartH, emptyCart, 'Bag', 'bag')
	}
}
		function removeWarnClose() {
			removeWarn.style.display = 'none';
			overlay.style.display = 'none';
		}
		overlay.addEventListener('click', () => {
			removeWarnClose()
		})
		const closeWarn = cartInfo.querySelectorAll('.close-warn')
		closeWarn.forEach(close => {
			close.addEventListener('click', () => {
				removeWarnClose()
			})
		})
		removeItemCart.addEventListener('click', () => {
			updateGrandTotal()
			cartItems.splice(index, 1);
			localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
			cartInfo.remove(); 
			updateCartMessage(); 
      showLoader();
      setTimeout(() => {
			  updateGrandTotal()
        hideLoader();
      }, 500);
			removeWarnClose()
		});
	});
	updateGrandTotal()
}


function updateCartUI() {
	const cartContainer = document.querySelector('.cartProd');
	cartContainer.innerHTML = '';

	cartItems.forEach(item => {
		let cartItem = document.createElement('div');
		cartItem.classList.add('cart-item');
		cartItem.innerHTML = `
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-quantity">${item.quantity}</div>
            <div class="cart-item-price">${item.price}</div>`;
		cartContainer.appendChild(cartItem);
		updateGrandTotal()
	});
}







});

















// for wishlist




const wishlistItem = JSON.parse(localStorage.getItem('wishlistItem')) || [];
const wishlistProd = document.querySelector('#wishlistProd');
const wishlistH = document.querySelector('.wishlist-h');
const emptyWishlistBtn = document.querySelector('.empty-wishlist');
const clearWishlist = document.querySelector('.clearWishlist');
const overlay = document.querySelector('.overlay');

function updateWishCount() {
  const totalWish = document.querySelector	('.totalWish');
  if (totalWish) {
    totalWish.innerText = wishlistItem.length;
  }
}


if (wishlistItem.length === 0) {
  		  renderEmptyMessage(wishlistProd, wishlistH, emptyWishlistBtn, 'Wishlist', 'suit-heart');
;
} else {
  if(emptyWishlistBtn) emptyWishlistBtn.style.display = 'flex';
   if(wishlistH) wishlistH.style.justifyContent = 'space-between';

  wishlistItem.forEach((prod, index) => {
    const info = document.createElement('div');
    info.className = 'info';
    info.setAttribute('data-id',  prod.id)
    info.innerHTML = `
    <button class="selectWish"><i class="bi bi-square"></i></button>
      <button class="removeItemWish "><i class="bi bi-x"></i><span class="theme-tooltip">Remove item </span></button>
      
      <div class="up-card">
        <div class="imgCont">
          <a href="product-desc.html?id=${prod.id}">
            <img class="prod-img" src="${prod.image}" alt="${prod.name}">
          </a>
        </div>
      </div>
      <div class="down-card">
        <div class="nameRate">
          <a href="product-desc.html?id=${prod.id}" class="prodName">
            <h2 class="prodName">${prod.name}</h2>
          </a>
        </div>
        <a href="product-desc.html?id=${prod.id}" class="prod-desc">${prod.description}</a>
        <div class="prod-price-cont">
          <p class="prod-price">₹${prod.price}</p>
        </div>
        <button class="addToCart theme-btn">
          <i class="bi bi-bag" style="margin-right: 0.5rem;"></i> Add To Bag
        </button>
      </div>
      </div>`;
    if(wishlistProd) wishlistProd.appendChild(info);

    addToCartFunc(prod, info)
	  // const addAll = document.querySelector('.addAll')
    // addAll.addEventListener('click',()=>{

    // })

    addAllToCart()




    const removeWarn = info.querySelector('.remove-warn');
    const removeItemBtn = info.querySelector('.removeItemBtn');
    const closeBtns = info.querySelectorAll('.close-warn');
    const removeItemWish = info.querySelector('.removeItemWish');


    removeItemWish.addEventListener('click', () => {
      wishlistItem.splice(index, 1);
      localStorage.setItem('wishlistItem', JSON.stringify(wishlistItem));
      info.remove();
      // closeRemoveWarn();
      updateWishCount();

      if (wishlistItem.length === 0) {
        renderEmptyMessage(wishlistProd, wishlistH, emptyWishlistBtn, 'Wishlist', '-suit-heart');
      }
    });
  });
  clearAllProduct(emptyWishlistBtn, 'wishlistItem', wishlistProd, wishlistH, 'Wishlist', 'suit-heart')
}
updateGrandTotal()
updateWishCount();


let selectMode = false;

const infos = document.querySelectorAll('.info');
const onSelectFunc = document.querySelector('.onSelectFunc');
const functionBtn = document.querySelector('.function-btns')

function toggleSelectUI(enable) {
  selectMode = enable;
  infos.forEach(info => {
    const selectWish = info.querySelector('.selectWish');
    selectWish.style.transform = enable ? 'scale(1)' : 'scale(0)';
    selectWish.style.transition = 'transform 0.5s ease'


    enable ? functionBtn.classList.add('displayNone') : functionBtn.classList.remove('displayNone')
    const removeItemWish = info.querySelector('.removeItemWish')
    removeItemWish.style.display = enable ? 'none' : 'block ';
    removeItemWish.style.transition = 'transform 0.5s ease'

  });

  onSelectFunc.classList.toggle('displayNone', !enable);

}

function checkAnySelected() {
  const anySelected = [...infos].some(card => card.classList.contains('infoSelected'));
  toggleSelectUI(anySelected);
  checkSelectStatus()
}



infos.forEach(info => {
  const selectWish = info.querySelector('.selectWish');
  const selectIcon = selectWish.querySelector('i');
  
  selectWish.addEventListener('click', (e) => {
    e.stopPropagation();
    info.classList.toggle('infoSelected');
    selectIcon.classList.toggle('bi-check-square');
    selectIcon.classList.toggle('bi-square');
    checkAnySelected(); 

  });

  info.addEventListener('click', (e) => {
    if (selectMode) {
      info.classList.toggle('infoSelected');
      e.preventDefault(); 
      e.stopPropagation(); 
      const icon = info.querySelector('.selectWish i');
      icon.classList.toggle('bi-check-square');
      icon.classList.toggle('bi-square');

      checkAnySelected();
    }  
  });

});


const selectAll = document.querySelector('.selectAll')
const selectAllIcon = document.querySelector('.selectAll i')
const selectAllToolTip = document.querySelector('.selectAll span')
let allSelected = false

if(selectAll){

selectAll.addEventListener('click', (e) =>{
    e.stopPropagation();
    if (!selectMode) toggleSelectUI(true);

    infos.forEach(info =>{
      const icon = info.querySelector('.selectWish i');
      if(!allSelected){
        info.classList.add('infoSelected');
        icon.classList.add('bi-check-square');
        icon.classList.remove('bi-square');
      } else {
        info.classList.remove('infoSelected');
        icon.classList.remove('bi-check-square');
        icon.classList.add('bi-square');
      }
    });
    if (!allSelected) {
      selectAllIcon.classList.remove('bi-square');
      selectAllIcon.classList.add('bi-check2-square');
      selectAllToolTip.innerText = 'deselect all'
    } else {
      selectAllIcon.classList.remove('bi-check2-square');
      selectAllIcon.classList.add('bi-square');
      selectAllToolTip.innerText = 'select all'
    }
    allSelected = !allSelected
});
}
function checkSelectStatus() {
  const total = infos.length;
  const selected = [...infos].filter(info => info.classList.contains('infoSelected')).length;


  if (selected === total && total !== 0) {
    selectAllIcon.classList.remove('bi-square');
    selectAllIcon.classList.add('bi-check2-square');
    allSelected = true;
  } else {
    selectAllIcon.classList.remove('bi-check2-square');
    selectAllIcon.classList.add('bi-square');
    allSelected = false;
  }
}

const closeSelect = document.querySelector('.closeSelect')

const closePanel = function(){
  selectMode = false  
  onSelectFunc.classList.add('displayNone')
  functionBtn.classList.remove('displayNone')
  infos.forEach(info =>{
    const selectWish = info.querySelector('.selectWish');
    const icon = info.querySelector('.selectWish i');
    const removeItemWish = info.querySelector('.removeItemWish');
  
    info.classList.remove('infoSelected');
    removeItemWish.style.display = 'block'
    icon.classList.add('bi-square');
    icon.classList.remove('bi-check-square')
    selectWish.style.transform = 'scale(0)';
    // removeItemWish.style.transform = 'scale(1)';
  });
  allSelected = false;
}
if(closeSelect) closeSelect.addEventListener('click', closePanel)




const delSelected = document.querySelector('.delSelected')

if(closeSelect){
  delSelected.addEventListener('click', () =>{

    const selected = [...infos].filter(info => info.classList.contains('infoSelected'));
    if(selected.length === 0) return
    let wishlistItem = JSON.parse(localStorage.getItem('wishlistItem')) || [];
    const selectedId = selected.map(info => info.dataset.id)
    wishlistItem = wishlistItem.filter(item => !selectedId.includes(item.id));

    selected.forEach(info => info.remove());
    localStorage.setItem('wishlistItem', JSON.stringify(wishlistItem));


    checkAnySelected();
      if (wishlistItem.length === 0) {
        renderEmptyMessage(wishlistProd, wishlistH, delSelected, 'Wishlist', 'suit-heart');
      }

      showLoader()
      setTimeout(() => {
        hideLoader()
        toastSecondary('Selected items removed from wishlist', '<i class="bi bi-trash3"   style="margin-left: 1rem; font-size:1.5rem;"></i>');
        
        updateWishCount()
        closePanel()
      }, 500);

  });
}  
// }
// delSelectedItem()



