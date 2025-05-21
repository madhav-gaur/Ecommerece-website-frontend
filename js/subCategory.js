document.addEventListener('DOMContentLoaded', () => {

  const categoryMap = {};

  products.forEach(product => {
    const category = product.category?.toLowerCase();
    const sub = product.sub?.toLowerCase();
    if (!category || !sub) return;

    if (!categoryMap[category]) {
      categoryMap[category] = new Set();
    }
    categoryMap[category].add(sub);
  });

  const categoryHero = document.querySelector('.category-hero');

  if (categoryHero) {
    for (const category in categoryMap) {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('categ');

      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category;
      categoryDiv.appendChild(categoryTitle);

      // Swiper container
      const swiperContainer = document.createElement('div');
      swiperContainer.classList.add('swiper');

      // Wrapper for slides
      const swiperWrapper = document.createElement('div');
      swiperWrapper.classList.add('swiper-wrapper');

      // Slides (subcategory cards)
      Array.from(categoryMap[category]).forEach(sub => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        const subcategoryItem = document.createElement('div');
        subcategoryItem.className = 'subcategoryItem';

        const subcategoryLink = document.createElement('a');
        subcategoryLink.href = `subCategory.html?categId=${category}&subId=${sub}`;
        subcategoryLink.textContent = sub;

        const subcategoryImg = document.createElement('img');
        subcategoryImg.src = `../assests/subCategory/${sub}.png`;

        subcategoryLink.appendChild(subcategoryImg);
        subcategoryItem.appendChild(subcategoryLink);
        slide.appendChild(subcategoryItem);
        swiperWrapper.appendChild(slide);
      });

      swiperContainer.appendChild(swiperWrapper);

      // Optional: Navigation buttons
      
      const pagination = document.createElement('div')
      pagination.classList.add('swiper-pagination')
      const nextBtn = document.createElement('div');
      nextBtn.classList.add('swiper-button-next');
      const prevBtn = document.createElement('div');
      prevBtn.classList.add('swiper-button-prev');
      
      swiperContainer.appendChild(pagination);      
      swiperContainer.appendChild(prevBtn);
      swiperContainer.appendChild(nextBtn);
      
      categoryDiv.appendChild(swiperContainer);
      categoryHero.appendChild(categoryDiv);
    }

    // Initialize all Swipers (after DOM is updated)
    new Swiper('.swiper', {
      slidesPerView: 10,
      spaceBetween: 30,
      speed: 600,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        300: { slidesPerView: 1, slidesPerGroup: 1 },
        500: { slidesPerView: 2, slidesPerGroup: 2 },
        600: { slidesPerView: 3, slidesPerGroup: 3 },
        // 680: { slidesPerView: 4, slidesPerGroup: 4 },
        768: { slidesPerView: 4, slidesPerGroup: 4 },
        868: { slidesPerView: 5, slidesPerGroup: 5 },
        // 1190: { slidesPerView: 5, slidesPerGroup: 5 },
        1180: { slidesPerView: 5, slidesPerGroup: 5 },
        1280: { slidesPerView: 6, slidesPerGroup: 6 },
        1440: { slidesPerView: 7, slidesPerGroup: 7 },
      }
    });
  }    
// Now handle filtering and displaying products
const categCont = document.querySelector('#categProdCont');
const toastHero = document.querySelector('.toastHero');

const params = new URLSearchParams(window.location.search);
const category = params.get('categId')?.toLowerCase().trim();
const sub = params.get('subId')?.toLowerCase().trim();

const filteredProducts = products.filter(product =>
  product.category?.toLowerCase().trim() === category &&
  product.sub?.toLowerCase().trim() === sub
);

if (categCont) {
  if (filteredProducts.length === 0) {
    categCont.innerHTML = `<p>No product found</p>`;
  } else {
    categCont.innerHTML = '';
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'info';
      productCard.innerHTML = `
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
      


      categCont.appendChild(productCard);

      const removeBtn = productCard.querySelector('.removeItem');
      const addBtn = productCard.querySelector('.addItem');
      const quantityText = productCard.querySelector('.prodQnt');
      const cartBtn = productCard.querySelectorAll('.addToCart');
      const prodQnt = productCard.querySelector('.prodQnt');
      const inStock = productCard.querySelector('.inStock');

      
      stockStatusFunc(product, productCard)


      // Quantity controls
      
let stockStatus = product.inStock.toLowerCase();
if (stockStatus === 'no') {
  return;
} else {
  // cartBtn.classList.remove('disable');
}

function updateQuantity(button, quantityElem, change) {
  if (!button || !quantityElem) return;

  button.addEventListener('click', () => {
    let current = parseInt(quantityElem.innerText);
    let updated = current + change;

    let maxLimit = product.onlyLeft !== '' ? parseInt(product.onlyLeft) : 10;

    if (updated >= 1 && updated <= maxLimit) {
      quantityElem.innerText = updated;
    }
  });
}


updateQuantity(addBtn, prodQnt, 1); // For increment
updateQuantity(removeBtn, prodQnt, -1); // For decrement


        // totalWishCount();
        addToCartFunc(product, productCard)
        addToWish(product, productCard)
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
	updateGrandTotal();
  totalWishCount()
});

























});

