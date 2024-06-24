import { allProducts } from "./allProducts.js";


import { Header } from "../components/site-Header/site-Header.js";

window.customElements.define("site-header" , Header);


import { Footer } from "../components/site-Footer/site-Footer.js";

window.customElements.define("site-footer" , Footer);


// ----------------------------------------- * -----------------------------------------------//

// Slider

const sliderItems = document.querySelectorAll(".slider-item") ;
const sliderDots = document.querySelectorAll(".slider__dot") ;
const slider_nextBtn = document.querySelector(".slider-next__btn") ;
const slider_PrevBtn = document.querySelector(".slider-prev__btn") ;


let sliderIndex = 0 ;
function sliderGenerate(){
  for(let i = 0 ; i < sliderItems.length  ; i ++){
     sliderItems[i].style.display = "none" ;
  }

  sliderItems[sliderIndex].style.display = "block" ;

  
  for( let i = 0 ; i < sliderDots.length  ; i ++){
    sliderDots[i].classList.remove("slider__dot--active");
  }
  
 sliderDots[sliderIndex].classList.add("slider__dot--active");
}

sliderGenerate()

function minusSlide(){
  sliderIndex ++ ;
  if(sliderIndex > sliderItems.length - 1){
    sliderIndex = 0
  }
  sliderGenerate()
}

function plusSlide(){
  sliderIndex -- ;
  if(sliderIndex < 0){
    sliderIndex = sliderItems.length - 1
  }
  sliderGenerate()
}

setInterval(function(){
  plusSlide()
},5000)




// swipers


const storiesSwiper = new Swiper('.stories-container', {
  direction: 'horizontal', // Default, but just to be explicit
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  slidesPerView: 2,
  breakpoints: {
    430: {
      slidesPerView : 3,
    },
    576: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 7,
    },
  }

});


const productsSwiper = new Swiper('.products-container', {
  direction: 'horizontal', // Default, but just to be explicit
  loop: true,


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 6,
    },
  }

});


const blogsSwiper = new Swiper('.blogs-container', {
  direction: 'horizontal', // Default, but just to be explicit
  loop: true,


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  slidesPerView: 1,
  spaceBetween:38 ,
  breakpoints: {
    576: {
      slidesPerView: 2,
    }, 
    700: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 6,
    },
  }

});



// sale product generator

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 
function saleProduct__generator(){
allProducts.forEach( product => {
  const ProductsElem = document.querySelector(".sale-products") ;

     if( product.tag === "sale"){
      let newProduct = `
      <div class="swiper-slide product" id="`+ product.id +`">
        <div class="product__wrapper">
          <header class="product__head">
            <div class="product__head-wrapper">
              <p class="product__tag"> تکنوآف </p>
              <p class="product__countdown">${countDownCalc(product.Date)}</p>
            </div>
            <div class="product__line"></div>
          </header>
          <main class="product__main">
            <a class="product__link" href="../TechnoLife/product.html?id=`+ product.id +`" target="_blank">
              <img class="product__img" src=`+ product.src +` alt="">
            </a>
          </main>
          <footer class="product__footer">
            <a class="product-title" href="../product.html?id=`+ product.id +`" target="_blank">
            ` + product.title + `
            </a>
            <div class="product__cost">
              <div class="product-cost__wrapper">
                <div class="product-percantage">
                  <img class="product-percantage__img" src="./pictures/percentage-sign-svgrepo-com.svg" alt="">
                  <span class="product-percantage__number"> `+ product.perecentag +` </span>
                </div>
                <div class="product__price product__price--off">
                   <span class="product-perice__number"> `+ numberWithCommas(product.price) +` </span>
                   <span class="product__price-unit"> تومان </span>
                </div>
              </div>
              <div class="product__price  product__price--previous">
                 <span class="product__price-number"> `+ numberWithCommas(product.prevPrice) +` </span>
                 <span class="product__price-unit"> تومان </span>
              </div>
          </footer>
        </div>
      </div>
     `
     ProductsElem.insertAdjacentHTML("beforeend" , newProduct)
    }
})

}

saleProduct__generator()


// countDown timer

let saleProducts = document.querySelector(".sale-products");
let furnitureProducts = document.querySelector(".furnitures-products");
let accessoriesProducts = document.querySelector(".accessories-products");
let tabletsProducts = document.querySelector(".tablets-products");

function countDownCalc(productDate){
  const countDown = new Date(productDate).getTime();
  
    let timer = setInterval (function(){
      const now = new Date().getTime() ;
      const reminder = countDown - now ;

    
      if( reminder < 0 ){
        clearInterval(timer);
        return "00 : 00 : 00"
      }
    
      
      let hours = Math.floor((reminder / (1000 * 60 * 60))) ;
      let minutes = Math.floor((reminder % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((reminder % (1000 * 60)) / 1000); 
      
      if(hours < 10){
        hours = "0" + hours
      }
      if(minutes < 10){
        minutes = "0" + minutes
      }
      if(seconds < 10){
        seconds = "0" + seconds
      }
  
      let newCountDown = hours + " : " + minutes + " : " + seconds ;
      
      return  newCountDown;
      
    },1000)

}



// flagSip Products 


function flagProduct__generator(){
    
  const ProductsElem = document.querySelector(".Flagships-products") ;
  
     allProducts.forEach( product => {
       if( product.tag === "flagShip"){
        let newProduct = `
        <div class="swiper-slide product" id="`+ product.id +`">
        <div class="product__wrapper">
          <header class="product__head">
            <div class="product__head-wrapper" style="visibility: hidden;">
              <p class="product__tag"> تکنوآف </p>
              <p class="product__countdown" style="direction : ltr ; display:none" ></p>
            </div>
            <div class="product__line" style="visibility: hidden;"></div>
          </header>
          <main class="product__main">
            <a class="product__link" href="../TechnoLife/product.html?id=`+ product.id +`" target="_blank">
              <img class="product__img" src=`+ product.src +` alt="">
            </a>
          </main>
          <footer class="product__footer">
            <a class="product-title" href="../product.html?id=`+ product.id +`" target="_blank">
            ` + product.title + `
            </a>
            <div class="product__cost">
              <div class="product-cost__wrapper">
                <div class="product-percantage" style="visibility: hidden;">
                  <img class="product-percantage__img" src="./pictures/percentage-sign-svgrepo-com.svg" alt="">
                  <span class="product-percantage__number"> `+ product.perecentag +` </span>
                </div>
                <div class="product__price">
                   <span class="product-perice__number"> `+ numberWithCommas(product.price) +` </span>
                   <span class="product__price-unit"> تومان </span>
                </div>
              </div>
              <div class="product__price  product__price--previous" style="visibility: hidden;">
                 <span class="product__price-number"> `+ numberWithCommas(product.prevPrice) +` </span>
                 <span class="product__price-unit"> تومان </span>
              </div>
          </footer>
        </div>
      </div>
     `
       
       ProductsElem.insertAdjacentHTML("beforeend",newProduct);
      }
       
       
     })
  
}
  
flagProduct__generator()



// flagSip Products 


function laptopProduct__generator(){
    
  const ProductsElem = document.querySelector(".laptops-products") ;
  
     allProducts.forEach( product => {
       if( product.category === "laptop"){
        let newProduct = `
        <div class="swiper-slide product" id="`+ product.id +`">
        <div class="product__wrapper">
          <header class="product__head">
            <div class="product__head-wrapper" style="visibility: hidden;">
              <p class="product__tag"> تکنوآف </p>
              <p class="product__countdown" style="direction : ltr ; display:none" >${countDownCalc(product.Date)}</p>
            </div>
            <div class="product__line" style="visibility: hidden;"></div>
          </header>
          <main class="product__main">
            <a class="product__link" href="../TechnoLife/product.html?id=`+ product.id +`" target="_blank">
              <img class="product__img" src=`+ product.src +` alt="">
            </a>
          </main>
          <footer class="product__footer">
            <a class="product-title" href="../product.html?id=`+ product.id +`" target="_blank">
            ` + product.title + `
            </a>
            <div class="product__cost">
              <div class="product-cost__wrapper">
                <div class="product-percantage" style="visibility: hidden;">
                  <img class="product-percantage__img" src="./pictures/percentage-sign-svgrepo-com.svg" alt="">
                  <span class="product-percantage__number"> `+ product.perecentag +` </span>
                </div>
                <div class="product__price">
                   <span class="product-perice__number"> `+ numberWithCommas(product.price) +` </span>
                   <span class="product__price-unit"> تومان </span>
                </div>
              </div>
              <div class="product__price  product__price--previous" style="visibility: hidden;">
                 <span class="product__price-number"> `+ numberWithCommas(product.prevPrice) +` </span>
                 <span class="product__price-unit"> تومان </span>
              </div>
          </footer>
        </div>
      </div>
       `
       
       ProductsElem.insertAdjacentHTML("beforeend",newProduct);
      }
       
       
     })
  
}
  
laptopProduct__generator()


// furniture Products


function furnitureProduct__generator(){
    
  allProducts.forEach( product => {
    const ProductsElem = document.querySelector(".furnitures-products") ;
  
       if( product.tag === "sale" && product.category === "furniture"){
        let newProduct = `
        <div class="swiper-slide product" id="`+ product.id +`">
          <div class="product__wrapper">
            <header class="product__head">
              <div class="product__head-wrapper">
                <p class="product__tag"> هواتو داریم </p>
                <p class="product__countdown" style="direction : ltr ;">`+ countDownCalc(product.Date) +`</p>
              </div>
              <div class="product__line"></div>
            </header>
            <main class="product__main">
              <a class="product__link" href="../TechnoLife/product.html?id=`+ product.id +`" target="_blank">
                <img class="product__img" src=`+ product.src +` alt="">
              </a>
            </main>
            <footer class="product__footer">
              <a class="product-title" href="../product.html?id=`+ product.id +`" target="_blank">
              ` + product.title + `
              </a>
              <div class="product__cost">
                <div class="product-cost__wrapper">
                  <div class="product-percantage">
                    <img class="product-percantage__img" src="./pictures/percentage-sign-svgrepo-com.svg" alt="">
                    <span class="product-percantage__number"> `+ product.perecentag +` </span>
                  </div>
                  <div class="product__price product__price--off">
                     <span class="product-perice__number"> `+ numberWithCommas(product.price) +` </span>
                     <span class="product__price-unit"> تومان </span>
                  </div>
                </div>
                <div class="product__price  product__price--previous">
                   <span class="product__price-number"> `+ numberWithCommas(product.prevPrice) +` </span>
                   <span class="product__price-unit"> تومان </span>
                </div>
            </footer>
          </div>
        </div>
       `
       ProductsElem.insertAdjacentHTML("beforeend",newProduct);
      }
      
      
    })
    
  }
  
  furnitureProduct__generator()


  // accessory Products


function accessoryProduct__generator(){
    
    allProducts.forEach( product => {
      const ProductsElem = document.querySelector(".accessories-products") ;
    
         if( product.category === "accessory"){
          let newProduct = `
          <div class="swiper-slide product" id="`+ product.id +`">
            <div class="product__wrapper">
              <header class="product__head">
                <div class="product__head-wrapper">
                  <p class="product__tag"> هواتو داریم </p>
                  <p class="product__countdown" style="direction : ltr ;"></p>
                </div>
                <div class="product__line"></div>
              </header>
              <main class="product__main">
                <a class="product__link" href="../TechnoLife/product.html?id=`+ product.id +`" target="_blank">
                  <img class="product__img" src=`+ product.src +` alt="">
                </a>
              </main>
              <footer class="product__footer">
                <a class="product-title" href="../product.html?id=`+ product.id +`" target="_blank">
                ` + product.title + `
                </a>
                <div class="product__cost">
                  <div class="product-cost__wrapper">
                    <div class="product-percantage">
                      <img class="product-percantage__img" src="./pictures/percentage-sign-svgrepo-com.svg" alt="">
                      <span class="product-percantage__number"> `+ product.perecentag +` </span>
                    </div>
                    <div class="product__price product__price--off">
                       <span class="product-perice__number"> `+ numberWithCommas(product.price) +` </span>
                       <span class="product__price-unit"> تومان </span>
                    </div>
                  </div>
                  <div class="product__price  product__price--previous">
                     <span class="product__price-number"> `+ numberWithCommas(product.prevPrice) +` </span>
                     <span class="product__price-unit"> تومان </span>
                  </div>
              </footer>
            </div>
          </div>
         `
         ProductsElem.insertAdjacentHTML("beforeend",newProduct);
        }
         
         
    })
    
}
    
accessoryProduct__generator()


 // tablet Products


function tabletProduct__generator(){
    
  allProducts.forEach( product => {
    const ProductsElem = document.querySelector(".tablets-products") ;
  
       if( product.tag === "sale" && product.category === "tablet"){
        let newProduct = `
        <div class="swiper-slide product" id="`+ product.id +`">
          <div class="product__wrapper">
            <header class="product__head">
              <div class="product__head-wrapper">
                <p class="product__tag"> هواتو داریم </p>
                <p class="product__countdown" style="direction : ltr ;"></p>
              </div>
              <div class="product__line"></div>
            </header>
            <main class="product__main">
              <a class="product__link" href="../TechnoLife/product.html?id=`+ product.id +`" target="_blank">
                <img class="product__img" src=`+ product.src +` alt="">
              </a>
            </main>
            <footer class="product__footer">
              <a class="product-title" href="../product.html?id=`+ product.id +`" target="_blank">
              ` + product.title + `
              </a>
              <div class="product__cost">
                <div class="product-cost__wrapper">
                  <div class="product-percantage">
                    <img class="product-percantage__img" src="./pictures/percentage-sign-svgrepo-com.svg" alt="">
                    <span class="product-percantage__number"> `+ product.perecentag +` </span>
                  </div>
                  <div class="product__price product__price--off">
                     <span class="product-perice__number"> `+ numberWithCommas(product.price) +` </span>
                     <span class="product__price-unit"> تومان </span>
                  </div>
                </div>
                <div class="product__price  product__price--previous">
                   <span class="product__price-number"> `+ numberWithCommas(product.prevPrice) +` </span>
                   <span class="product__price-unit"> تومان </span>
                </div>
            </footer>
          </div>
        </div>
       `
       ProductsElem.insertAdjacentHTML("beforeend",newProduct);
      }
       
       
  })
  
}
  
tabletProduct__generator()


// articels


const articlesArray = [
  { id : 1 , title : "بررسی ساعت میبرو a2" , src : "./pictures/banner_ArticleBanners_1.webp"} ,
  { id : 2 , title : "بهترین لپ تاپ های بازار" , src : "./pictures/banner_ArticleBanners_2.webp"} ,
  { id : 3 , title : "بررسی poco f5 pro به همراه تست گیم و دوربین" , src : "./pictures/banner_ArticleBanners_3.webp"} ,
  { id : 4 , title : "بررسی qcy t13 anc" , src : "./pictures/banner_ArticleBanners_4.webp"} ,
  { id : 5 , title : "همه چیز درباره آیفون 15" , src : "./pictures/banner_ArticleBanners_5.webp"} ,
  { id : 6 , title : "بهترین فیلم های جنگ جهانی" , src : "./pictures/banner_ArticleBanners_7.webp"} ,
]

function articleGenerate(){
  const articles = document.querySelector(".blogs-wrapper") ;

  articlesArray.forEach( article => {
    let newArticle = `
    <div class="swiper-slide blog">
      <a class="blog__banner" href="#">
        <img class="blog__img" src=" ` + article.src + ` ">
      </a>
      <div class="blog__title">
        <a href="#">
          <h4 class="blog__heading"> `+ article.title +` </h4>
        </a>
      </div>
    </div>
    `
    
    articles.insertAdjacentHTML("beforeend",newArticle)
  });
}

articleGenerate()


// descriptions btn

const more_Descriptions_Btn = document.querySelector(".more-descriptions__btn") ;

more_Descriptions_Btn.onclick = showMore;


let isDescriptionOpen = false ;

function showMore(){
  const descriptions = document.querySelector(".descriptions__content") ;
  const whiteCover = document.querySelector(".cover--white") ;
  const btnText = document.querySelector(".more-descriptions__text") ;
  const btnIcon = document.querySelector(".more-descriptions__icon") ;
  
  if(isDescriptionOpen){
    descriptions.classList.remove("show-more") ;
    whiteCover.style.display = "block" ;
    btnText.innerHTML= "نمایش بیشتر" ;
    btnIcon.style.transform = "rotateX(0deg)" ;
    isDescriptionOpen = false ;
  }else{
    descriptions.classList.add("show-more") ;
    whiteCover.style.display = "none" ;
    btnText.innerHTML= "بستن" ;
    btnIcon.style.transform = "rotateX(180deg)" ;
    isDescriptionOpen = true ;
  }
}




