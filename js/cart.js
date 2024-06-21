import { Header } from "../components/site-Header/site-Header.js";

window.customElements.define("site-header" , Header) ;

import { Footer } from "../components/site-Footer/site-Footer.js";

window.customElements.define("site-footer" , Footer);


// ----------------------------------------- Cart Product Generator -----------------------------------------------//


let cartArray = [] ;


function cartProductGenerator(cartArray){
    const parentElem = document.querySelector(".cart-items") ;
    parentElem.innerHTML = "";
    let cartTempelate ;
    
    cartArray.forEach(product => {

      if(product.tag === "sale"){
        cartTempelate = `
        <div class="cart-item">
        <div class="cart-item__head">
          <img src="./pictures/static_techno-off.svg" alt="">
          <button class="cart-item__remove-btn" onclick="removeItem(${product.id})">
            <svg style="width: 1rem; height:1rem" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9c9d9e" >
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg> 
          </button>
        </div>
        <div class="cart-item__body">
          <div class="cart-item__body-content">
            <a href="#">
              <h2 class="product__title">
              `+ product.title +`
              </h2>
            </a>
            <div class="product-facilities">
              <div class="product-facilitie">
                  <div class="product-facilitie__icon">
                    <svg fill="none" style="width: 24px; height: 24px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>                              
                  </div>
                  6ماه گارامنی شرکتی
              </div>
              <div class="product-facilitie">
                   <div class="product-facilitie__icon">
                    <svg fill="none" style="width: 24px; height: 24px" viewBox="0 0 24 24" stroke-width="1.5px" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                   </div>                      
                   تامین کالا اطمینان
              </div>
              <div class="hyphen"></div>
              <div class="product-facilitie product-facilitie--brown">
                <div class="product-facilitie__icon">
                  <svg fill="none"  style="width: 18px; height: 18px" viewBox="0 0 24 24" stroke-width="2px" stroke="#333" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                </div>
                  موجود د رانبار فروشنده     
              </div>
            </div>
          </div>
          <div class="cart-item__body-banner">
            <a href="#" class="product__banner">
              <img src="`+ product.src +`" alt="">
            </a>
          </div>
        </div>
        <div class="cart-item-footer">
          <div class="cart-item-footer__wrapper">
            <div class="product__colors-palet">
              <div class="product__colors-palet-wrapper">
                <p class="color">                       
                </p>
                <span class="color-name">مشکی</span> 
              </div>
            </div>
            <div class="cart-item-footer__left">
              <div class="product__price">
                <div class="product-percantage">
                  <img class="product-percantage__img" src="./pictures/percentage-sign-svgrepo-com.svg" alt="">
                  <span class="product-percantage__number">2</span>
                </div>
                <div class="product__price-main">
                  <span class="product__prev-price">
                    `+ (numberWithCommas(product.prevPrice)) +`
                  </span>
                  <p class="product__finall-price">
                  `+ (numberWithCommas(product.price)) +`
                    <span class="price-unite">تومان</span>
                  </p>
                </div>
              </div>
              <div class="product-count-section">
                <button class="add-item-btn" onclick="addProduct(`+ product.id +`)">
                  <svg style="width: 16px; height: 16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9c9d9e">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                <div class="product-count">
                  <p>حداقل</p>
                  <p class="product-count__number">`+ product.quantity +`</p>
                </div>
                <button class="remove-item-btn" onclick="reduceProductCount(`+ product.id +`)">
                  <svg style="width:1rem; height:1rem" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2962ff" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
      }else{
        cartTempelate = `
        <div class="cart-item">
        <div class="cart-item__head">
          <img src="./pictures/static_techno-off.svg" alt="" style="visibility:hidden;">
          <button class="cart-item__remove-btn" onclick="removeItem(${product.id})">
            <svg style="width: 1rem; height:1rem" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9c9d9e" >
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg> 
          </button>
        </div>
        <div class="cart-item__body">
          <div class="cart-item__body-content">
            <a href="#">
              <h2 class="product__title">
              `+ product.title +`
              </h2>
            </a>
            <div class="product-facilities">
              <div class="product-facilitie">
                  <div class="product-facilitie__icon">
                    <svg fill="none" style="width: 24px; height: 24px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>                              
                  </div>
                  6ماه گارامنی شرکتی
              </div>
              <div class="product-facilitie">
                   <div class="product-facilitie__icon">
                    <svg fill="none" style="width: 24px; height: 24px" viewBox="0 0 24 24" stroke-width="1.5px" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                   </div>                      
                   تامین کالا اطمینان
              </div>
              <div class="hyphen"></div>
              <div class="product-facilitie product-facilitie--brown">
                <div class="product-facilitie__icon">
                  <svg fill="none"  style="width: 18px; height: 18px" viewBox="0 0 24 24" stroke-width="2px" stroke="#333" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                </div>
                  موجود د رانبار فروشنده     
              </div>
            </div>
          </div>
          <div class="cart-item__body-banner">
            <a href="#" class="product__banner">
              <img src="`+ product.src +`" alt="">
            </a>
          </div>
        </div>
        <div class="cart-item-footer">
          <div class="cart-item-footer__wrapper">
            <div class="product__colors-palet">
              <div class="product__colors-palet-wrapper">
                <p class="color">                       
                </p>
                <span class="color-name">مشکی</span> 
              </div>
            </div>
            <div class="cart-item-footer__left">
              <div class="product__price">
                <div class="product__price-main">
                  <p class="product__finall-price">
                  `+ numberWithCommas(product.price) +`
                    <span class="price-unite">تومان</span>
                  </p>
                </div>
              </div>
              <div class="product-count-section">
                <button class="add-item-btn" onclick="addProduct(`+ product.id +`)>
                  <svg style="width: 16px; height: 16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9c9d9e">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                <div class="product-count">
                  <p>حداقل</p>
                  <p class="product-count__number">`+ product.quantity +`</p>
                </div>
                <button class="remove-item-btn" onclick="reduceProductCount(`+ product.id +`)">
                  <svg style="width:1rem; height:1rem" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2962ff" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
      }
      parentElem.insertAdjacentHTML("beforeend",cartTempelate) ;
    });
    
    totalPriceCalc(cartArray) ;
    discountPriceCalc(cartArray) ;
    finallPriceCalc(cartArray);
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//-------------------------------------------------- window loading --------------------------------------------------

window.addEventListener("load",function(){
      getDataFromLocalStorage() ;
      cartProductGenerator(cartArray) ;
      BasketProductsNumberCalc(cartArray) ;
})


// ------------------------------------------------- get Data From LocalStorage --------------------------------------

function getDataFromLocalStorage () {
      let localArray = [] ;
      localArray = JSON.parse(localStorage.getItem("userBasket")) ;
      if(localArray){
        cartArray = localArray ;
      }
}

//--------------------------------------------- total Price Calculate ------------------------------------------------

function totalPriceCalc(cartArray){
  let sum = 0 ;
  const parentElem = document.querySelector(".price__number--total") ;
  cartArray.forEach( product => {
    sum += Number(product.price * product.quantity)
  })
  parentElem.innerHTML = numberWithCommas(sum) ;
  return sum ;
}


//------------------------------------------------- discount Price Calculate -------------------------------------------

function discountPriceCalc(cartArray){
  let sum = 0 ;
  let discountPrice ;
  const parentElem = document.querySelector(".price__number--discount") ;
  cartArray.forEach( product => {
    if(product.prevPrice){
       discountPrice = (product.prevPrice - product.price)* product.quantity ;
      }else{
        discountPrice = 0 ;
      }
      sum += discountPrice ;
  })
  parentElem.innerHTML = numberWithCommas(sum) ;
  return sum ;
}


//----------------------------------------------- finallPriceCalc ------------------------------------------------

function finallPriceCalc(cartArray){
  let totalPrice = totalPriceCalc(cartArray);
  let discountPrice = discountPriceCalc(cartArray) ;
  let finalPrice =  totalPrice - discountPrice ;
  document.querySelector(".price__number--finall").innerHTML = numberWithCommas(finalPrice) ;
}


//-------------------------------------------------- set to LocalStorage -----------------------------------------

function setToLocalstorage(cartArray){
   localStorage.setItem("userBasket",JSON.stringify(cartArray)) ;
}


//---------------------------------------------------- remove All Products ----------------------------------------

function removeProducts(cartArray){
  cartArray = [] ;
  setToLocalstorage(cartArray);
  cartProductGenerator(cartArray) ;
  BasketProductsNumberCalc(cartArray) ;

}

// ----------------------------------------------------- remove product -------------------------------------------

function removeItem(productId){
  getDataFromLocalStorage();
  let productIndex = localArray.findIndex(product =>{
    return product.id === productId ;
  })
  localArray.splice(productIndex,1) ;
  setToLocalstorage(cartArray);
  cartProductGenerator(cartArray);
  BasketProductsNumberCalc(cartArray) ;
  
}

finallPriceCalc(cartArray)

//---------------------------------------- cart products number -----------------------------------------------

function BasketProductsNumberCalc(cartArray){
  let ProductsNumberElem = document.querySelector(".cart-products-number");
  let sum = 0 ;
  cartArray.forEach( product => {
  sum += product.quantity ;
  })
  ProductsNumberElem.innerHTML = sum + " کالا"
}

//---------------------------------------- add product Count -----------------------------------------------------

export function addProduct(productId){
  let mainProduct = cartArray.find(product => {
    return product.id === productId ;
  }) 

  mainProduct.quantity ++ ;
  setToLocalstorage(cartArray) ;
  cartProductGenerator(cartArray) ;
}

// reduce product count

function reduceProductCount(productId){
  let mainProduct = cartArray.find(product => {
    return product.id === productId ;
  }) 
  if(mainProduct.quantity > 1){
    mainProduct.quantity -- ;
    setToLocalstorage(cartArray) ;
    cartProductGenerator(cartArray) ;
  }
  
}
