const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./components/site-Footer/site-Footer.css">
<footer class="footer">
      <div class="footer-top">
        <div class="footer-logo">
          <img class="footer-logo__img" src="./pictures/static_logo_techno.svg" width="174px" height="55px" alt=""> 
        </div>
        <button class="scroll-btn">
          <span>بازگشت به بالا</span>
          <svg fill="none" viewBox="0 0 24 24" style="width: .8rem; height:.8rem" stroke-width="5px" stroke="#333">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>          
        </button>
      </div>
      <div class="footer-main">
        <div class="footer-contact">
          <div class="footer-contact__right">
             <div class="phone">
               <p class="phone-label"> تلفن : </p>
               <p class="phone-number">
                <span>021-44084900</span>
                <span>-</span>
                <span>021-91077500</span>
               </p>
             </div>
             <div class="email">
              <span class="email-label">
                ایمیل :
              </span>
              <p class="email-address">
                info@technolife.ir
              </p>
             </div>
          </div>
          <div class="footer-contact__left">
            <div class="social-medias__section">
              <h5 class="social-medias__title">
                شبکه ها اجتماعی
              </h5>
              <div class="social-medias">
                <a class="social-media">
                  <img class="social-media__img" src="./pictures/static_instagram.svg" alt="">
                </a>
                <a class="social-media">
                  <img class="social-media__img" src="./pictures/static_aparat.svg" alt="">
                </a>
                <a class="social-media">
                  <img class="social-media__img" src="./pictures/static_telegram.svg" alt="">
                </a>
                <a class="social-media">
                  <img class="social-media__img" src="./pictures/static_youtube.svg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-menu__col">
            <h5 class="footer-menu__title">
              دسترسی سریع
            </h5>
            <ul class="footer-menu__items">
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  بلاگ
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  قیمت روز گوشی  
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                 گوشی سامسونگ
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                گوشی آیفون
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                 گوشی شیائومی
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                 گوشی پوکو
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                 مقایسه گوشی
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                 قیمت لپتاپ
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  هندزفری بلوتوثی
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                 لپ تاپ ایسوس
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-menu__col">
            <h5 class="footer-menu__title">
              پرفروش ترین محصولات
            </h5>
            <ul class="footer-menu__items">
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  شیائومی نوت 11
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  گوشی a32 سامسونگ
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  پوکو x4 پرو
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  گوشی A23 سامسونگ
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  گوشی A53 سامسونگ
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  گوشی S23 Ultra سامسونگ
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  ساعت هوشمند
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  پرینتر
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  هارد اکسترنال
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  پنکه
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  ایرپاد qcy t13
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-menu__col">
            <h5 class="footer-menu__title">
              درباره ما
            </h5>
            <ul class="footer-menu__items">
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  تکنولایف در یک نگاه
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  اهداف و تعهدهای ما
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  سرگذشت تکنولایف
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-menu__col">
            <h5 class="footer-menu__title">
              پیش از خرید
            </h5>
            <ul class="footer-menu__items">
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  راهنمای خرید از تکنولایف
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  راهنمای خرید اقساطی
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  روش های خرید از تکنولایف
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  ضمانت 7 روزه تکنولایف
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  شیوه ها و هزینه ارسال
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-menu__col">
            <h5 class="footer-menu__title">
              پس از خرید
            </h5>
            <ul class="footer-menu__items">
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  ضمانت رجیستری
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  رویه های بازگرداندن کالا
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  سوالات متداول رجیستری
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  رهگیری سفارش ها
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-menu__col">
            <h5 class="footer-menu__title">
              قوانین و مقررات
            </h5>
            <ul class="footer-menu__items">
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  حریم خصوصی کاربران
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  از زبان کشتریان تکنولایف
                </a>
              </li>
              <li class="footer-menu__item">
                <a class="footer-menu__link" href="#">
                  چرا تکنولایف؟
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-Licenses">
          <a class="footer-License" href="#">
            <img class="footer-License__img" src="./pictures/footer-banner1.svg" alt="">
          </a>
          <a class="footer-License" href="#">
            <img class="footer-License__img" src="./pictures/footer-banner2.webp" alt="">
          </a>
          <a class="footer-License" href="#">
            <img class="footer-License__img" src="./pictures/footer-banner3.webp" alt="">
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="technolife-age">
          1391-
          <span class="this-year">1402</span>
        </p>
        <p class="footer-bottom__text">
          تمامی حقوق مادی و معنوی این سایت متعلق به تکنولایف می‌باشد.
        </p>
    </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const scrollBtn = this.shadowRoot.querySelector(".scroll-btn");

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

export { Footer };
