const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./components/site-Header/site-Header.css">
<header class="header">
        <div class="container">
          <nav class="nav">
            <div class="nav-top">
              <div class="nav-top__right"> 
                <button class="mobile-menu-open__btn">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 24px; height:24px">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
                <div class="app-logo"> 
                  <a href="./index.html" class="app-logo__link">
                    <img class="app-logo__img" src="./pictures/static_technolife-brand.svg" alt="">             
                  </a>
                  <a href="./index.html" class="title-logo__link">
                    <img class="title-logo__img" src="./pictures/static_technolife-title.svg">
                  </a>
                </div>
                <div class="search-box">
                  <button type="button" class="search-box__btn">
                    <svg style="width: 1.5rem ; height: 1.5rem " fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>                      
                  </button>
                  <input type="text" class="search-box__input" placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"> 
                </div>
              </div>
              <div class="nav-top__left">
                  <div class="login-btn">
                      <a class="login-btn__link" href="#">
                        <span  class="login-btn__login">ورود</span>
                        <span class="login-btn__register">ثبت نام</span>
                      </a>
                  </div>
                  <div class="mobile-login-btn">
                    <a class="mobile-login-btn__link" href="#">
                      <span>ورود</span>
                      <img class="mobile-login__img" src="./pictures/icons8-login-32.png" alt="">
                    </a>
                  </div>
                  <a href="./cart.html" class="cart">
                    <svg style="width: 1.5rem; height: 1.5rem" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>                  
                  </a> 
              </div>
              <div class="mobile-menu">
                <div class="mobile-menu__head">
                  <button class="mobile-menu__close-btn">
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg> 
                  </button>              
                  <img class="mobile-menu__logo" src="./pictures/static_technolife-brand.svg" alt="">
                </div>
                <a class="mobile-menu__link mobile-menu__link--Become-a-seller" href="#">
                  <span class="mobile-menu__title">
                      فروشنده شو
                  </span>
                  <svg class="mobile-menu__down-arrow mobile-menu__left-arrow--Become-a-seller" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>                      
                </a>
                <a class="mobile-menu__link mobile-menu__link--Organizational-purchase" href="#">
                  <span class="mobile-menu__title">
                      خرید سازمانی
                  </span>
                  <svg class="mobile-menu__down-arrow mobile-menu__left--Organizational-purchase" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </a>
                <ul class="mobile-menu__items">
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        گوشی موبایل
                      </span>
                      <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                    <div class="mobile-subMenu">
                      <div class="mobile-subMenu__item">
                        <div class="mobile-subMenu__item-main">
                          <span>موبایل</span>
                          <svg class="mobile-subMenu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                        <div class="mobile-subMenu-products">
                          <div class="mobile-subMenu-products__head">
                            <span>قیمت گوشی</span>
                            <span>(همه ی محصولات)</span>
                            <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                          </div>
                          <ul class="mobile-subMenu-products__body">
                            <li class="mobile-subMenu-product">
                              <a class="mobile-subMenu-product__link" href="#">
                                گوشی اپل
                              </a>
                            </li>
                            <li class="mobile-subMenu-product">
                              <a class="mobile-subMenu-product__link" href="#">
                                گوشی سامسونگ
                              </a>
                            </li>
                            <li class="mobile-subMenu-product">
                              <a class="mobile-subMenu-product__link" href="#">
                                گوشی نوکیا
                              </a>
                            </li>
                            <li class="mobile-subMenu-product">
                              <a class="mobile-subMenu-product__link" href="#">
                                گوشی تاپ
                              </a>
                            </li>
                            <li class="mobile-subMenu-product">
                              <a class="mobile-subMenu-product__link" href="#">
                                گوشی شیائومی
                              </a>
                            </li>
                          </ul>
                        </div> 
                      </div>
                      <div class="mobile-subMenu__item">
                        <div class="mobile-subMenu__item-main">
                          <span>لوازم جانبی موبایل</span>
                          <svg class="mobile-subMenu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                      <div class="mobile-subMenu__item">
                        <div class="mobile-subMenu__item">
                          <div class="mobile-subMenu__item-main">
                            <span>قطعات موبایل</span>
                            <svg class="mobile-subMenu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="mobile-subMenu__item">
                        <div class="mobile-subMenu__item-main">
                          <span>موبایل براساس حافظه </span>
                          <svg class="mobile-subMenu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg> 
                        </div>
                      </div>
                      <div class="mobile-subMenu__item">
                        <div class="mobile-subMenu__item-main">
                          <span>موبایل براساس عملکرد</span>
                          <svg class="mobile-subMenu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg> 
                        </div>
                      </div>
                      <div class="mobile-subMenu__item">
                        <div class="mobile-subMenu__item">
                          <div class="mobile-subMenu__item-main">
                            <span>موبایل براساس قیمت</span>
                            <svg class="mobile-subMenu__icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg> 
                          </div>
                        </div>
                      </div>
                    </div> 
                  </li>
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        لپ تاپ و تپلت
                     </span>
                     <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </div>
                  </li>
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        هدفون و هندزفری
                      </span>
                      <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </li>
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        ساعت و بندهوشمند
                     </span>
                     <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                       <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                     </svg>
                    </div>
                  </li>
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        کامپیوتر و ماشین های اداری
                      </span>
                      <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </li>
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        شبکه و تجهیزات ذخیره سازی
                      </span>
                      <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </li>
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        گیمینگ
                      </span>
                      <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </li>
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        صوتی و تصویری
                      </span>
                      <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </li>
                  <li class="mobile-menu__item">
                    <div class="mobile-menu__item-main">
                      <span class="mobile-menu__title">
                        لوازم خانگی
                     </span>
                     <svg class="mobile-menu__left-arrow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                       <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                     </svg>
                    </div>
                  </li>
                </ul>
                <a class="mobile-menu__link mobile-menu__link--magazine" href="#">
                  <span class="mobile-menu__title">
                      مجله آنلاین تکنولایف
                  </span>
                  <svg class="mobile-menu__left-arrow mobile-menu__left-arrow--magazine" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg> 
                </a> 
              </div>
              <div class="cover cover--black"></div>
            </div>
            <div class="nav-bottom">
              <ul class="nav-menu">
                <li class="nav-menu__item">
                  <div href="#" class="nav-menu__link">
                      <span class="nav-menu__title">گوشی موبایل</span> 
                      <div class="sub-menu">
                       <div class="sub-menu-container">
                          <ul class="sub-menu-category-list">
                            <li class="sub-menu-category-list__item" data-id="mobile">
                              <div class="sub-menu__category-list__item-main">
                                  <div class="sub-menu-category-icon">
                                      <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                      </svg> 
                                  </div>
                                  موبایل
                              </div> 
                              <svg class="sub-menu-category__arrow sub-menu-category__arrow--show" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                                 <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg>
                            </li>
                            <li class="sub-menu-category-list__item" data-id="mobile-equipment"> 
                              <div class="sub-menu__category-list__item-main">
                                  <div class="sub-menu-category-icon">
                                      <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                      </svg> 
                                  </div>
                                  لوازم جانبی موبایل
                              </div>
                              <svg class="sub-menu-category__arrow" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                                 <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg> 
                            </li>
                            <li class="sub-menu-category-list__item" data-id="mobile-parts"> 
                              <div class="sub-menu__category-list__item-main">
                                  <div class="sub-menu-category-icon">
                                      <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                      </svg> 
                                  </div>
                                  قطعات موبایل
                              </div>
                              <svg class="sub-menu-category__arrow" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                                 <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg> 
                            </li>
                            <li class="sub-menu-category-list__item" data-id="Phone-based-on-memory">
                              <div class="sub-menu__category-list__item-main">
                                  <div class="sub-menu-category-icon">
                                      <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                      </svg> 
                                  </div>
                                  گوشی براساس حافظه
                              </div> 
                              <svg class="sub-menu-category__arrow" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                              viewBox="0 0 330 330" xml:space="preserve">
                              <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                              l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                           </svg>
                            </li>
                            <li class="sub-menu-category-list__item"  data-id="Phone-based-on-price">
                              <div class="sub-menu__category-list__item-main">
                                  <div class="sub-menu-category-icon">
                                      <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                      </svg> 
                                  </div>
                                  گوشی براساس قیمت
                              </div> 
                              <svg class="sub-menu-category__arrow" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                                 <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg>
                            </li>
                          </ul>
                          <div class="sub-menu-products sub-menu-products--show" id="mobile">
                             <div class="sub-menu-products__head">
                              <span class="sub-menu-products__title">
                               قیمت گوشی
                              </span>
                              <span class="sub-menu-products__count">(همه ی محصولات)</span>
                              <svg class="sub-menu-products__arrow sub-menu-products__arrow--show" data-class="one" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                  viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg>
                             </div> 
                             <div class="sub-menu-products__body">
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                              </ul>
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                 </li> 
                                 
                              </ul>
                             </div> 
                          </div>
                          <div class="sub-menu-products" id="mobile-equipment">
                             <div class="sub-menu-products__head">
                              <span class="sub-menu-products__title">
                                  لوازم جانبی موبایل
                              </span>
                              <span class="sub-menu-products__count">(همه ی محصولات)</span>
                              <svg class="sub-menu-products__arrow" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                                 <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg>
                             </div> 
                             <div class="sub-menu-products__body">
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                              </ul>
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                 </li> 
                                 
                              </ul>
                             </div> 
                          </div>
                          <div class="sub-menu-products" id="mobile-parts">
                             <div class="sub-menu-products__head">
                              <span class="sub-menu-products__title">
                                  قطعات گوشی
                              </span>
                              <span class="sub-menu-products__count">(همه ی محصولات)</span>
                              <svg class="sub-menu-products__arrow" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                                 <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg>
                             </div> 
                             <div class="sub-menu-products__body">
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                              </ul>
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                 </li> 
                                 
                              </ul>
                             </div> 
                          </div>
                          <div class="sub-menu-products" id="Phone-based-on-memory">
                             <div class="sub-menu-products__head">
                              <span class="sub-menu-products__title">
                                  گوشی براساس حافظه
                              </span>
                              <span class="sub-menu-products__count">(همه ی محصولات)</span>
                              <svg class="sub-menu-products__arrow" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                                 <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg>
                             </div> 
                             <div class="sub-menu-products__body">
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                              </ul>
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                 </li> 
                              </ul>
                             </div> 
                          </div>
                          <div class="sub-menu-products" id="Phone-based-on-price">
                             <div class="sub-menu-products__head">
                              <span class="sub-menu-products__title">
                                  گوشی براساس قیمت
                              </span>
                              <span class="sub-menu-products__count">(همه ی محصولات)</span>
                              <svg class="sub-menu-products__arrow" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                                 <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                              </svg>
                             </div> 
                             <div class="sub-menu-products__body">
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                              </ul>
                              <ul class="sub-menu-products-list">
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu-products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 <li class="sub-menu-products-list__item">
                                  <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                 </li> 
                                 
                              </ul>
                             </div> 
                          </div>
                       </div>
                      </div>
                  </div>
                </li>
                <li class="nav-menu__item">
                  <span class="nav-menu__title">
                      لپ تاپ و تپلت
                  </span>
                  <div class="sub-menu">
                      <div class="sub-menu-container">
                         <ul class="sub-menu-category-list">
                           <li class="sub-menu-category-list__item" data-id="mobile">
                             <div class="sub-menu__category-list__item-main">
                                 <div class="sub-menu-category-icon">
                                     <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                     </svg> 
                                 </div>
                                 موبایل
                             </div> 
                             <svg class="sub-menu-category__arrow sub-menu-category__arrow--show" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg>
                           </li>
                           <li class="sub-menu-category-list__item" data-id="mobile-equipment"> 
                             <div class="sub-menu__category-list__item-main">
                                 <div class="sub-menu-category-icon">
                                     <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                     </svg> 
                                 </div>
                                 لوازم جانبی موبایل
                             </div>
                             <svg class="sub-menu-category__arrow" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg> 
                           </li>
                           <li class="sub-menu-category-list__item" data-id="mobile-parts"> 
                             <div class="sub-menu__category-list__item-main">
                                 <div class="sub-menu-category-icon">
                                     <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                     </svg> 
                                 </div>
                                 قطعات موبایل
                             </div>
                             <svg class="sub-menu-category__arrow" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg> 
                           </li>
                           <li class="sub-menu-category-list__item" data-id="Phone-based-on-memory">
                             <div class="sub-menu__category-list__item-main">
                                 <div class="sub-menu-category-icon">
                                     <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                     </svg> 
                                 </div>
                                 گوشی براساس حافظه
                             </div> 
                             <svg class="sub-menu-category__arrow" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                             viewBox="0 0 330 330" xml:space="preserve">
                             <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                             l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                          </svg>
                           </li>
                           <li class="sub-menu-category-list__item"  data-id="Phone-based-on-price">
                             <div class="sub-menu__category-list__item-main">
                                 <div class="sub-menu-category-icon">
                                     <svg style="width: 2rem; height:2rem"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                     </svg> 
                                 </div>
                                 گوشی براساس قیمت
                             </div> 
                             <svg class="sub-menu-category__arrow" fill="blue" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg>
                           </li>
                         </ul>
                         <div class="sub-menu-products sub-menu-products--show" id="mobile">
                            <div class="sub-menu-products__head">
                             <span class="sub-menu-products__title">
                              قیمت گوشی
                             </span>
                             <span class="sub-menu-products__count">(همه ی محصولات)</span>
                             <svg class="sub-menu-products__arrow sub-menu-products__arrow--show" data-class="one" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                 viewBox="0 0 330 330" xml:space="preserve">
                               <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                               l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg>
                            </div> 
                            <div class="sub-menu-products__body">
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                             </ul>
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی اپل</a>
                                </li> 
                                
                             </ul>
                            </div> 
                         </div>
                         <div class="sub-menu-products" id="mobile-equipment">
                            <div class="sub-menu-products__head">
                             <span class="sub-menu-products__title">
                                 لوازم جانبی موبایل
                             </span>
                             <span class="sub-menu-products__count">(همه ی محصولات)</span>
                             <svg class="sub-menu-products__arrow" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg>
                            </div> 
                            <div class="sub-menu-products__body">
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                             </ul>
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی سامسونگ</a>
                                </li> 
                                
                             </ul>
                            </div> 
                         </div>
                         <div class="sub-menu-products" id="mobile-parts">
                            <div class="sub-menu-products__head">
                             <span class="sub-menu-products__title">
                                 قطعات گوشی
                             </span>
                             <span class="sub-menu-products__count">(همه ی محصولات)</span>
                             <svg class="sub-menu-products__arrow" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg>
                            </div> 
                            <div class="sub-menu-products__body">
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                             </ul>
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی شیائومی</a>
                                </li> 
                                
                             </ul>
                            </div> 
                         </div>
                         <div class="sub-menu-products" id="Phone-based-on-memory">
                            <div class="sub-menu-products__head">
                             <span class="sub-menu-products__title">
                                 گوشی براساس حافظه
                             </span>
                             <span class="sub-menu-products__count">(همه ی محصولات)</span>
                             <svg class="sub-menu-products__arrow" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg>
                            </div> 
                            <div class="sub-menu-products__body">
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                             </ul>
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی داریا</a>
                                </li> 
                             </ul>
                            </div> 
                         </div>
                         <div class="sub-menu-products" id="Phone-based-on-price">
                            <div class="sub-menu-products__head">
                             <span class="sub-menu-products__title">
                                 گوشی براساس قیمت
                             </span>
                             <span class="sub-menu-products__count">(همه ی محصولات)</span>
                             <svg class="sub-menu-products__arrow" fill="#333" height="800px" width="800px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 330 330" xml:space="preserve">
                                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                             </svg>
                            </div> 
                            <div class="sub-menu-products__body">
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                             </ul>
                             <ul class="sub-menu-products-list">
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu-products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                <li class="sub-menu-products-list__item">
                                 <a href="#" class="sub-menu__products__link">گوشی نوکیا</a>
                                </li> 
                                
                             </ul>
                            </div> 
                         </div>
                      </div>
                  </div>
                </li>
                <li class="nav-menu__item">
                  <a href="#" class="nav-menu__link">
                      هدفون و هندزفری
                  </a>
                </li>
                <li class="nav-menu__item">
                  <a href="#" class="nav-menu__link">
                      ساعت و بندهوشمند
                  </a>
                </li>
                <li class="nav-menu__item">
                  <a href="#" class="nav-menu__link">
                      کامپیوتر و ماشین های اداری
                  </a>
                </li>
                <li class="nav-menu__item">
                  <a href="#" class="nav-menu__link">
                      شبکه و تجهیزات ذخیره سازی
                  </a>
                </li>
                <li class="nav-menu__item">
                  <a href="#" class="nav-menu__link">
                      گیمینگ
                  </a>
                </li>
                <li class="nav-menu__item">
                  <a href="#" class="nav-menu__link">
                      صوتی و تصویری
                  </a>
                </li>
                <li class="nav-menu__item">
                  <a href="#" class="nav-menu__link">
                      لوازم خانگی
                  </a>
                </li>
                <li class="nav-menu__item nav-menu__item--Organizational-purchase">
                  <a href="#" class="nav-menu__link">
                      خرید سازمانی
                  </a>
                </li>  
                <li class="nav-menu__item nav-menu__item--Become-a-seller">
                  <a href="#" class="nav-menu__link">
                      فروشنده شو
                  </a>
                </li>  
              </ul>
            </div>
          </nav>
        </div>
    </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    let subMenuItems = this.shadowRoot.querySelectorAll(
      ".sub-menu-category-list__item"
    );
    subMenuItems.forEach((subMenuItem) => {
      subMenuItem.addEventListener("mouseover", function () {
        id = subMenuItem.getAttribute("data-id");

        this.shadowRoot
          .querySelector(".sub-menu-products--show")
          .classList.remove("sub-menu-products--show");

        this.shadowRoot
          .getElementById(id)
          .classList.add("sub-menu-products--show");

        this.shadowRoot
          .querySelector(".sub-menu-category__arrow--show")
          .classList.remove("sub-menu-category__arrow--show");

        subMenuItem.children[1].classList.add("sub-menu-category__arrow--show");
      });
    });

    // mobile menu

    const mobileMenu = this.shadowRoot.querySelector(".mobile-menu");
    const coverElem = this.shadowRoot.querySelector(".cover--black");
    const mobileMenu_Open_Btn = this.shadowRoot.querySelector(
      ".mobile-menu-open__btn"
    );
    const mobileMenu_Close_Btn = this.shadowRoot.querySelector(
      ".mobile-menu__close-btn"
    );
    const mobileMenuItems = this.shadowRoot.querySelectorAll(
      ".mobile-menu__item-main"
    );
    const mobileMenuIcon = this.shadowRoot.querySelector(
      ".mobile-menu__left-arrow"
    );
    const mobile_SubMenu_Icon = this.shadowRoot.querySelector(
      ".mobile-subMenu__icon"
    );
    const mobile_SubMenu_Items = this.shadowRoot.querySelectorAll(
      ".mobile-subMenu__item-main"
    );

    mobileMenu_Open_Btn.addEventListener("click", function () {
      mobileMenu.classList.add("mobile-menu--show");
      coverElem.classList.add("cover--show");
    });

    mobileMenu_Close_Btn.addEventListener("click", function () {
      mobileMenu.classList.remove("mobile-menu--show");
      coverElem.classList.remove("cover--show");
    });

    mobileMenuItems.forEach((mobileMenuItem) => {
      mobileMenuItem.addEventListener("click", function () {
        mobileMenuItem.nextElementSibling.classList.toggle(
          "mobile-subMenu--show"
        );
        mobileMenuItem.children[1].classList.toggle("mobile-icon--active");
      });
    });

    mobile_SubMenu_Items.forEach((mobile_SubMenu_Item) => {
      mobile_SubMenu_Item.addEventListener("click", function () {
        mobile_SubMenu_Item.nextElementSibling.classList.toggle(
          "sub-menu-products--show"
        );
        mobile_SubMenu_Item.children[1].classList.toggle("mobile-icon--active");
      });
    });

    // header sticky

    let header_Bottom_Elem = this.shadowRoot.querySelector(".nav-bottom");
    window.addEventListener("scroll", function () {
      if (this.scrollY > 100) {
        header_Bottom_Elem.classList.add("nav-bottom--none");
      } else {
        header_Bottom_Elem.classList.remove("nav-bottom--none");
      }
    });
  }
}

export { Header };
