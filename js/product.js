import { allProducts } from "./allProducts.js";

import { Header } from "../components/site-Header/site-Header.js";

window.customElements.define("site-header", Header);

import { Footer } from "../components/site-Footer/site-Footer.js";

window.customElements.define("site-footer", Footer);

// ----------------------------------------- single product Generator -----------------------------------------------//

function singleProduct_Generator(product) {
  const parentElement = document.querySelector(".main");
  let singleProduct;
  if (product.tag === "sale") {
    singleProduct =
      `
      <div class="single-product" id=` +
      product.id +
      `>
      <div class="container">
        <div class="breadcrumb-navigation">
            <ul class="breadcrumb-navigation__list">
                <li class="breadcrumb-navigation__item">
                  <a class="breadcrumb-navigation__link" href="./index.html">
                      فروشگاه اینترنتی تکنولایف
                  </a>
                </li>  
                <li class="breadcrumb-navigation__item">
                  <a class="breadcrumb-navigation__link" href="#">
                      قیمت گوشی
                  </a>
                </li>  
                <li class="breadcrumb-navigation__item">
                  <a class="breadcrumb-navigation__link" href="#">
                      گوشی سامسونگ
                  </a>
                </li>  
                <li class="breadcrumb-navigation__item">
                  <a class="breadcrumb-navigation__link" href="#">
                  ` +
      product.title +
      `
                  </a>
                </li>  
              </ul>  
        </div>
        <div class="seprator">
          <span class="seprator-line"></span>
          <span class="seprator-line"></span>
        </div>
        <div class="product-section">
          <div class="product-section-right">
            <div class="product-section-right__content">
                <div class="product__title">
                    <h1 class="product__main-title">
                     ` +
      product.title +
      `
                    </h1>
                    <h2 class="product__english-title">
                    ${product.subTitle}
                    </h2> 
                </div>
                <div class="comments-info">
                    نظرات کاربران
                    :
                    <span class="comments-count">
                        56 نظر
                    </span>
                </div>
                <div class="product__colors-info">
                  <div class="product__colors-name">
                    <span>رنگ:</span>
                    <p class="product__colors">
                     مشکی
                    </p>
                  </div>
                  <div class="product__colors-palets">
                    <div class="product__colors-palet">
                      <div class="product__colors-palet-wrapper">
                        <p class="color">
                          <svg class="check-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>                          
                        </p>
                        <span class="color-name"> مشکی</span> 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-properties">
                  <h2 class="product-properties__label">
                    ویژگی های اصلی
                  </h2> 
                  <div class="product-properties__list">
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        نوع پردازنده - CPU:
                       </p> 
                       <p class="product-properties__item-value">
                        Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 نانومتری)
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        حافظه داخلی:
                       </p> 
                       <p class="product-properties__item-value">
                        256 گیگابایت
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        حافظه RAM:
                       </p> 
                       <p class="product-properties__item-value">
                        12 گیگابایت
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        سایز صفحه نمایش:
                       </p> 
                       <p class="product-properties__item-value">
                        6.8 اینچ
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        دوربین پشت:
                       </p> 
                       <p class="product-properties__item-value">
                        چهار گانه 200 مگاپیکسل + 50 مگاپیکسل + 10 مگاپیکسل + 12 مگاپیکسل 
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        ظرفیت باتری:
                       </p> 
                       <p class="product-properties__item-value">
                        5000 میلی‌ آمپر ساعت
                       </p> 
                    </div>
                  </div>
                </div>
            </div>
            <div class="product-section-right__banner">
              <div class="product-section-btns">
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                       </svg>
                       <span class="product-section-btn__tooltip">اشتراک گذاری</span>                                    
                    </button> 
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2962ff" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                       </svg> 
                       <span class="product-section-btn__tooltip"> نظرات کاربران </span>                                                                      
                    </button> 
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                       </svg>    
                       <span class="product-section-btn__tooltip"> مقایسه کالا </span>                                                                    
                    </button> 
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#b0882c" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                       </svg>  
                       <span class="product-section-btn__tooltip"> اطلاع رسانی تکنوآف </span>                                                                     
                    </button> 
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff1a34" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                       </svg> 
                       <span class="product-section-btn__tooltip"> مورد علاقه </span>                                                     
                    </button> 
              </div>
              <div class="product__images">
                <img class="product__main-img" src="` +
      product.src +
      `" alt="">
                <div class="product-gallery">
                    <div class="product-gallery__item">
                      <div class="product-gallery__banner">
                         <img class="product-gallery__img" src="./pictures/thumbnail.jpeg" alt="">
                      </div>  
                      <div class="product-gallery__icon-wrapper">
                        <svg  class="product-gallery__icon" fill="none" style="width: 16px ; height: 16px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" fill="#333" />
                        </svg>
                      </div>
                    </div> 
                    <div class="product-gallery__item">
                      <img class="product-gallery__img" src="` +
      product.src +
      `" alt="">  
                    </div> 
                    <div class="product-gallery__item">
                       <div class="product-gallery__banner">
                        <img class="product-gallery__img" src="` +
      product.src +
      `" alt="">
                       </div>
                       <span class="product-gallery__number">+9</span> 
                       <svg class="product-gallery__icon" fill="#fff" viewBox="0 0 24 24"  style="width: 24px ; height: 24px"  stroke-width="3px" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                      </svg>                        
                    </div> 
                </div>
              </div>
            </div>
          </div>  
          <div class="product-section-left">
            <div class="product-section-left__wrapper">
              <div class="purchase-section">
                <div class="insurance-section">
                  <div class="insurance__top">
                    <div class="insurance__title">
                      <svg fill="none" style="width: 20px; height:20px" viewBox="0 0 24 24" stroke-width="2px" stroke="#37a801">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>       
                      <h3>بیمه کالا</h3>               
                    </div>  
                    <a class="insurance__link" href="#">
                      نمایش جزئیات 
                      <svg fill="none" style="width:.6rem;height:.6rem" viewBox="0 0 24 24" stroke-width="4px" stroke="#2962ff">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>                      
                    </a>
                  </div>
                  <div class="insurance__bottom">
                    <button class="insurance-btn">
                      <span class="insurance-btn__text">خرید بیمه</span>
                      <div class="insurance-btn__icon">
                        <svg style="width: 16px; height: 16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2962ff">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </div>
                    </button>  
                    <div class="insurance__cost">
                      <span class="insurance__prev-cost">
                        2,974,500
                      </span>
                      <p>
                        <span class="insurance__finall-cost">
                          1,298,000
                        </span>
                        <span class="price-unite">
                          تومان
                        </span>
                      </p>
                    </div>
                  </div>
                </div> 
                <div class="sales-details">
                  <div class="sales-details__top">
                    <div class="saler">
                      <svg fill="none" style="width: 24px; height: 24px" viewBox="0 0 24 24" stroke-width="1.5px" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                      </svg>
                      تکنولایف
                    </div>
                    <div class="hyphen"></div>
                    <div class="stock-situation">
                       <svg fill="none"  style="width: 18px; height: 18px" viewBox="0 0 24 24" stroke-width="2px" stroke="#333" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                       </svg>                      
                       موجود در انبار تکنولایف( ارسال فوری )
                      </div>
                  </div>
                  <div class="sales-details__bottom">
                    <div class="product__garantie">
                      <svg fill="none" style="width: 20px; height: 20px" viewBox="0 0 24 24" stroke-width="2px" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                      18 ماه گارانتی شرکتی      
                    </div>
                  </div>
                </div> 
                <div class="purchase-detail purchase-detail--sale">
                  <div class="stock-count stock-count--sale">
                    <svg fill="none"  style="width: 18px; height: 18px" viewBox="0 0 24 24" stroke-width="2px" stroke="#333" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg> 
                    <span>2 عدد در انبار باقی مانده</span> 
                  </div>
                  <div class="product-price product-price--sale">
                    <div class="product-sale">
                      <span class="product-sale__price">` +
      numberWithCommas(salePriceCalc(product)) +
      `</span>
                      <span class="product-sale__text">تومان تخفیف</span>
                    </div>
                    <div class="product-price__main">
                      <span class="prev-price">` +
      numberWithCommas(product.prevPrice) +
      `</span>
                      <p class="finall-price finall-price--sale">
                        ` +
      numberWithCommas(product.price) +
      ` 
                      <span class="price-unite">
                        تومان
                      </span>
                    </p>
                    </div>
                  </div>
                </div>
                <div class="product-cart">
                  <button class="product-cart__btn">
                    افزودن به سبدخرید
                    <svg class="product-cart__icon" fill="none" style="width: 22px; height: 22px" viewBox="0 0 24 24" stroke-width="2px" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>                
                  </button>   
                </div>
              </div>
              <div class="delivery-section">
                <div class="fast-delivery">
                  <div class="fast-delivery__wrapper">
                    <div class="fast-delivery__content">
                      <span> ارسال امروز </span>
                      <a class="fast-delivery__link" href="#">
                        توضیحات بیشتر
                        <svg style="width: .6rem;height:.6rem"  fill="none" viewBox="0 0 24 24" stroke-width="4px" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>                    
                      </a>
                    </div>
                    <div class="fast-delivery__banner">
                      <img class="fast-delivery__img" src="./pictures/static_pdp_delivery_tomorrow.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="bying-in-preson">
                  <div class="bying-in-preson__content">
                    <img class="bying-in-preson__img" src="./pictures/icons8-shop-94.png">
                    <p class="bying-in-preson__text">امکان تحویل حضوری در شعب تکنولایف</p>
                  </div>
                  <div class="bying-in-preson__icon">
                    <svg fill="none" style="width:.6rem;height:.6rem" viewBox="0 0 24 24" stroke-width="4px" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg> 
                  </div>               
                </div>
              </div>
            </div>  
          </div>  
        </div> 
        <div class="free-space"></div>
        <div class="seprator">
          <span class="seprator-line"></span>
          <span class="seprator-line"></span>
        </div>
        <div class="facilities">
          <div class="facility">
            <div class="facility__img">
              <img src="./pictures/static_payment-in-installments.svg" alt="">
            </div>
            <h5 class="facility__title"> 7 روز ضمانت بازگشت کالا </h5>
          </div>
          <div class="facility">
            <div class="facility__img">
              <img src="./pictures/static_refund-money.svg" alt="">
            </div>
            <h5 class="facility__title"> پرداخت اقساطی </h5>
          </div>
          <div class="facility">
            <div class="facility__img">
              <img src="./pictures/static_original-warranty.svg" alt="">
            </div>
            <h5 class="facility__title"> ضمانت اصالت کالا </h5>
          </div>
          <div class="facility">
            <div class="facility__img">
              <img src="./pictures/static_pay-at-home.svg" alt="">
            </div>
            <h5 class="facility__title"> پرداخت در محل </h5>
          </div>
        </div>
      </div>
    </div> 
      `;
  } else {
    singleProduct =
      `
      <div class="single-product" id=` +
      product.id +
      `>
      <div class="container">
        <div class="breadcrumb-navigation">
            <ul class="breadcrumb-navigation__list">
                <li class="breadcrumb-navigation__item">
                  <a class="breadcrumb-navigation__link" href="./index.html">
                      فروشگاه اینترنتی تکنولایف
                  </a>
                </li>  
                <li class="breadcrumb-navigation__item">
                  <a class="breadcrumb-navigation__link" href="#">
                      قیمت گوشی
                  </a>
                </li>  
                <li class="breadcrumb-navigation__item">
                  <a class="breadcrumb-navigation__link" href="#">
                      گوشی سامسونگ
                  </a>
                </li>  
                <li class="breadcrumb-navigation__item">
                  <a class="breadcrumb-navigation__link" href="#">
                  ` +
      product.title +
      `
                  </a>
                </li>  
              </ul>  
        </div>
        <div class="seprator">
          <span class="seprator-line"></span>
          <span class="seprator-line"></span>
        </div>
        <div class="product-section">
          <div class="product-section-right">
            <div class="product-section-right__content">
                <div class="product__title">
                    <h1 class="product__main-title">
                     ` +
      product.title +
      `
                    </h1>
                    <h2 class="product__english-title">
                        ${product.subTitle}
                    </h2> 
                </div>
                <div class="comments-info">
                    نظرات کاربران
                    :
                    <span class="comments-count">
                        56 نظر
                    </span>
                </div>
                <div class="product__colors-info">
                  <div class="product__colors-name">
                    <span>رنگ:</span>
                    <p class="product__colors">
                     مشکی
                    </p>
                  </div>
                  <div class="product__colors-palets">
                    <div class="product__colors-palet">
                      <div class="product__colors-palet-wrapper">
                        <p class="color">
                          <svg class="check-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>                          
                        </p>
                        <span class="color-name"> مشکی</span> 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-properties">
                  <h2 class="product-properties__label">
                    ویژگی های اصلی
                  </h2> 
                  <div class="product-properties__list">
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        نوع پردازنده - CPU:
                       </p> 
                       <p class="product-properties__item-value">
                        Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 نانومتری)
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        حافظه داخلی:
                       </p> 
                       <p class="product-properties__item-value">
                        256 گیگابایت
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        حافظه RAM:
                       </p> 
                       <p class="product-properties__item-value">
                        12 گیگابایت
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        سایز صفحه نمایش:
                       </p> 
                       <p class="product-properties__item-value">
                        6.8 اینچ
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        دوربین پشت:
                       </p> 
                       <p class="product-properties__item-value">
                        چهار گانه 200 مگاپیکسل + 50 مگاپیکسل + 10 مگاپیکسل + 12 مگاپیکسل 
                       </p> 
                    </div>
                    <div class="product-properties__item">
                       <p class="product-properties__item-label">
                        ظرفیت باتری:
                       </p> 
                       <p class="product-properties__item-value">
                        5000 میلی‌ آمپر ساعت
                       </p> 
                    </div>
                  </div>
                </div>
            </div>
            <div class="product-section-right__banner">
              <div class="product-section-btns">
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                       </svg>
                       <span class="product-section-btn__tooltip">اشتراک گذاری</span>                                    
                    </button> 
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2962ff" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                       </svg> 
                       <span class="product-section-btn__tooltip"> نظرات کاربران </span>                                                                      
                    </button> 
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                       </svg>    
                       <span class="product-section-btn__tooltip"> مقایسه کالا </span>                                                                    
                    </button> 
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#b0882c" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                       </svg>  
                       <span class="product-section-btn__tooltip"> اطلاع رسانی تکنوآف </span>                                                                     
                    </button> 
                    <button class="product-section-btn">
                       <svg fill="none" style="width: 20px ; height : 20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff1a34" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                       </svg> 
                       <span class="product-section-btn__tooltip"> مورد علاقه </span>                                                     
                    </button> 
              </div>
              <div class="product__images">
                <img class="product__main-img" src="` +
      product.src +
      `" alt="">
                <div class="product-gallery">
                    <div class="product-gallery__item">
                      <div class="product-gallery__banner">
                         <img class="product-gallery__img" src="./pictures/thumbnail.jpeg" alt="">
                      </div>  
                      <div class="product-gallery__icon-wrapper">
                        <svg  class="product-gallery__icon" fill="none" style="width: 16px ; height: 16px" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" fill="#333" />
                        </svg>
                      </div>
                    </div> 
                    <div class="product-gallery__item">
                      <img class="product-gallery__img" src="` +
      product.src +
      `" alt="">  
                    </div> 
                    <div class="product-gallery__item">
                       <div class="product-gallery__banner">
                        <img class="product-gallery__img" src="` +
      product.src +
      `" alt="">
                       </div>
                       <span class="product-gallery__number">+9</span> 
                       <svg class="product-gallery__icon" fill="#fff" viewBox="0 0 24 24"  style="width: 24px ; height: 24px"  stroke-width="3px" stroke="#fff">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                      </svg>                        
                    </div> 
                </div>
              </div>
            </div>
          </div>  
          <div class="product-section-left">
            <div class="product-section-left__wrapper">
              <div class="purchase-section">
                <div class="insurance-section">
                  <div class="insurance__top">
                    <div class="insurance__title">
                      <svg fill="none" style="width: 20px; height:20px" viewBox="0 0 24 24" stroke-width="2px" stroke="#37a801">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>       
                      <h3>بیمه کالا</h3>               
                    </div>  
                    <a class="insurance__link" href="#">
                      نمایش جزئیات 
                      <svg fill="none" style="width:.6rem;height:.6rem" viewBox="0 0 24 24" stroke-width="4px" stroke="#2962ff">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                      </svg>                      
                    </a>
                  </div>
                  <div class="insurance__bottom">
                    <button class="insurance-btn">
                      <span class="insurance-btn__text">خرید بیمه</span>
                      <div class="insurance-btn__icon">
                        <svg style="width: 16px; height: 16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2962ff">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </div>
                    </button>  
                    <div class="insurance__cost">
                      <span class="insurance__prev-cost">
                        2,974,500
                      </span>
                      <p>
                        <span class="insurance__finall-cost">
                          1,298,000
                        </span>
                        <span class="price-unite">
                          تومان
                        </span>
                      </p>
                    </div>
                  </div>
                </div> 
                <div class="sales-details">
                  <div class="sales-details__top">
                    <div class="saler">
                      <svg fill="none" style="width: 24px; height: 24px" viewBox="0 0 24 24" stroke-width="1.5px" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                      </svg>
                      تکنولایف
                    </div>
                    <div class="hyphen"></div>
                    <div class="stock-situation">
                       <svg fill="none"  style="width: 18px; height: 18px" viewBox="0 0 24 24" stroke-width="2px" stroke="#333" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                       </svg>                      
                       موجود در انبار تکنولایف( ارسال فوری )
                      </div>
                  </div>
                  <div class="sales-details__bottom">
                    <div class="product__garantie">
                      <svg fill="none" style="width: 20px; height: 20px" viewBox="0 0 24 24" stroke-width="2px" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                      18 ماه گارانتی شرکتی      
                    </div>
                  </div>
                </div> 
                <div class="purchase-detail">
                  <div class="stock-count">
                    <svg fill="none"  style="width: 18px; height: 18px" viewBox="0 0 24 24" stroke-width="2px" stroke="#333" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg> 
                    <span>2 عدد در انبار باقی مانده</span> 
                  </div>
                  <div class="finall-price">
                    ` +
      numberWithCommas(product.price) +
      `
                    <span class="price-unite">تومان</span>
                  </div>
                </div>
                <div class="product-cart">
                  <button class="product-cart__btn">
                    افزودن به سبدخرید
                    <svg class="product-cart__icon" fill="none" style="width: 22px; height: 22px" viewBox="0 0 24 24" stroke-width="2px" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>                
                  </button>   
                </div>
              </div>
              <div class="delivery-section">
                <div class="fast-delivery">
                  <div class="fast-delivery__wrapper">
                    <div class="fast-delivery__content">
                      <span> ارسال امروز </span>
                      <a class="fast-delivery__link" href="#">
                        توضیحات بیشتر
                        <svg style="width: .6rem;height:.6rem"  fill="none" viewBox="0 0 24 24" stroke-width="4px" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>                    
                      </a>
                    </div>
                    <div class="fast-delivery__banner">
                      <img class="fast-delivery__img" src="./pictures/static_pdp_delivery_tomorrow.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="bying-in-preson">
                  <div class="bying-in-preson__content">
                    <img class="bying-in-preson__img" src="./pictures/icons8-shop-94.png">
                    <p class="bying-in-preson__text">امکان تحویل حضوری در شعب تکنولایف</p>
                  </div>
                  <div class="bying-in-preson__icon">
                    <svg fill="none" style="width:.6rem;height:.6rem" viewBox="0 0 24 24" stroke-width="4px" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg> 
                  </div>               
                </div>
              </div>
            </div>  
          </div>  
        </div> 
        <div class="free-space"></div>
        <div class="seprator">
          <span class="seprator-line"></span>
          <span class="seprator-line"></span>
        </div>
        <div class="facilities">
          <div class="facility">
            <div class="facility__img">
              <img src="./pictures/static_payment-in-installments.svg" alt="">
            </div>
            <h5 class="facility__title"> 7 روز ضمانت بازگشت کالا </h5>
          </div>
          <div class="facility">
            <div class="facility__img">
              <img src="./pictures/static_refund-money.svg" alt="">
            </div>
            <h5 class="facility__title"> پرداخت اقساطی </h5>
          </div>
          <div class="facility">
            <div class="facility__img">
              <img src="./pictures/static_original-warranty.svg" alt="">
            </div>
            <h5 class="facility__title"> ضمانت اصالت کالا </h5>
          </div>
          <div class="facility">
            <div class="facility__img">
              <img src="./pictures/static_pay-at-home.svg" alt="">
            </div>
            <h5 class="facility__title"> پرداخت در محل </h5>
          </div>
        </div>
      </div>
    </div> 
      `;
  }

  parentElement.insertAdjacentHTML("beforeend", singleProduct);

  let addToCart_btn = parentElement.querySelector(".product-cart__btn");
  addToCart_btn.addEventListener("click", () => {
    let modal = document
      .querySelector(".modal__container") 
      .classList.add("d-flex");
    addToCart(product.id);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// -------------------------------------------------window loading---------------------------------------------------------

let cartArray = [];
window.addEventListener("load", function () {
  getDataFromLocalStorage();
  let productId = this.location.search.slice(4);
  let mainProduct = allProducts.find((product) => {
    return product.id === Number(productId);
  });
  singleProduct_Generator(mainProduct);
});

//----------------------------------------------Get Data From LocalStorage---------------------------------------

function getDataFromLocalStorage() {
  let localArray = JSON.parse(localStorage.getItem("userBasket"));

  if (localArray) {
    cartArray = localArray;
  }
}

//----------------------------------------------------add To Cart-----------------------------------------------

function addToCart(productId) {
  let mainProduct = allProducts.find((product) => {
    return product.id === productId;
  });

  let repetitiusProduct = cartArray.find((item) => {
    return item.id === productId;
  });

  if (repetitiusProduct) {
    repetitiusProduct.quantity++;
  } else {
    cartArray.push(mainProduct);
  }
  setToLocalStorage(cartArray);
}

// ----------------------------------------------sale price Calculator-----------------------------------------

function salePriceCalc(product) {
  let salePrice = product.prevPrice - product.price;
  return salePrice;
}

// ------------------------------------------------close cart Modale------------------------------------------

let closeModalBtn = document.querySelector(".modal__close-btn");
let modal = document.querySelector(".modal__container");

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("d-flex");
});

//--------------------------------------------------set Cart To LocalStorage--------------------------------------

function setToLocalStorage(array) {
  localStorage.setItem("userBasket", JSON.stringify(array));
}
