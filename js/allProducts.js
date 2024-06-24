const allProducts = [
  {
    id: 1,
    category: "mobile",
    tag: "sale",
    src: "./pictures/product.webp",
    title:
      "تبلت سامسونگ مدل (Galaxy Tab S9 FE Plus 5G SM-X616B) ظرفیت 256 گیگابایت رم 12 گیگابایت",
    subTitle: "Galaxy Tab S9 Ultra 5G SM-X916B 256GB 12G Tablet",
    price: "47199000",
    prevPrice: "49700000",
    perecentag: "2",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 2,
    category: "mobile",
    tag: "sale",
    src: "./pictures/product2.webp",
    title: "گوشی موبایل شیائومی Poco C40 - ظرفیت 64 گیگابایت - رم 4 گیگابایت",
    subTitle: "Xiaomi Poco C40 64/4GB",
    price: "23499000",
    prevPrice: "24700000",
    perecentag: "4",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 3,
    category: "mobile",
    tag: "sale",
    src: "./pictures/product3.webp",
    title:
      "گوشی موبايل سامسونگ مدل Galaxy A05 4G ظرفیت 128 گیگابایت رم 6 گیگابایت",
    subTitle: "Samsung Galaxy A05 4G 128/6GB",
    price: "4360000",
    prevPrice: "4400000",
    perecentag: "1",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 4,
    category: "mobile",
    tag: "sale",
    src: "./pictures/product4.webp",
    title:
      " تبلت سامسونگ مدل (Galaxy Tab S9 FE Plus 5G SM-X616B) ظرفیت 256 گیگابایت رم 12 گیگابایت",
    subTitle: "Galaxy Tab S9 Ultra 5G SM-X916B 256GB 12G Tablet",
    price: "5790000",
    prevPrice: "6800000",
    perecentag: "2",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 5,
    category: "mobile",
    tag: "sale",
    src: "./pictures/product5.webp",
    title:
      " گوشی موبایل ریلمی مدل 11Pro Plus 5G ظرفیت 512 گیگابایت رم 12 گیگابایت ",
    subTitle: "",
    price: "15600000",
    prevPrice: "15800000",
    perecentag: "2",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 6,
    category: "mobile",
    tag: "sale",
    src: "./pictures/product6.webp",
    title:
      "گوشی موبایل شیائومی مدل Redmi Note 13 Pro 4G ظرفیت 256 گیگابایت رم 8 گیگابایت ",
    subTitle: "Xiaomi Poco C40 64/4GB",
    price: "11260000",
    prevPrice: "11895000",
    perecentag: "6",
    Date: "Jun 30 2024",
    quantity: 1,
  },

  {
    id: 7,
    category: "mobile",
    tag: "flagShip",
    src: "./pictures/product7.webp",
    title:
      "گوشی موبایل سامسونگ Galaxy S24 Ultra 5G ظرفیت 256 گیگابایت رم 12 گیگابایت",
    subTitle: "Samsung Galaxy S24 Ultra 256/12GB Vietnam",
    price: "72699000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },
  {
    id: 8,
    category: "mobile",
    tag: "flagShip",
    src: "./pictures/product8.webp",
    title: "گوشی موبایل شیائومی مدل 13T 5G ظرفیت 256 گیگابایت رم 12 گیگابایت",
    subTitle: "Xiaomi 13T 5G 256/12GB",
    price: "24580000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },
  {
    id: 9,
    category: "mobile",
    tag: "flagShip",
    src: "./pictures/product9.webp",
    title:
      "گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت	-small-image",
    subTitle: "Apple iPhone 13 CH/A 128/4GB - Not Active",
    price: "38580000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },
  {
    id: 10,
    category: "mobile",
    tag: "flagShip",
    src: "./pictures/product10.webp",
    title:
      "گوشی موبايل سامسونگ مدل Galaxy S23 FE 5G ظرفیت 256 گیگابایت رم 8 گیگابایت - ویتنام",
    subTitle: "Samsung Galaxy S23 FE 5G 256/8GB - Vietnam",
    price: "24143000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },

  {
    id: 11,
    category: "laptop",
    tag: "",
    src: "./pictures/product11.webp",
    title:
      "لپ تاپ ایسر 15.6 اینچی مدل Aspire7 A715 R7 5825U 8GB 512GB SSD RTX3050 4GB",
    subTitle: "Acer Aspire 7 A715 i5 12450H 8GB RAM 512GB SSD RTX3050 4GB",
    price: "38990000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },
  {
    id: 12,
    category: "laptop",
    tag: "",
    src: "./pictures/product12.webp",
    title: "لپ تاپ دل 15.6 اینچی مدل Vostro 3520 i3 1215U 8GB 256GB",
    subTitle: "Dell Vostro 3520 i3 1215U 8GB RAM 256GB SSD UHD",
    price: "20799100",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },
  {
    id: 13,
    category: "laptop",
    tag: "",
    src: "./pictures/product13.webp",
    title:
      "لپ تاپ ام اس آی 15.6 اینچی مدل Cyborg 15 i5 12450H 16GB 1TB RTX2050",
    subTitle: "MSI Cyborg 15 A12UCX i5 12450H 16GB 1TB SSD RTX2050",
    price: "40000000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },
  {
    id: 14,
    category: "laptop",
    tag: "",
    src: "./pictures/product14.webp",
    title:
      "لپ تاپ اپل 16 اینچی مدل MacBook Pro Z0XZ004R9 2019 i7 9750H 32GB 512GB",
    subTitle: "Apple MacBook Pro Z0XZ004R9 2019 i7 9750H 32GB 512GB SSD",
    price: "63000000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },
  {
    id: 15,
    category: "laptop",
    tag: "",
    src: "./pictures/product15.webp",
    title:
      "لپ تاپ اچ پی 14 اینچی مدل Spectre x360 14-EF2013dx i7 ۱۳۵۵U 16GB 512GB",
    subTitle: "HP Envy x360 14-es0013dx i5 1335U 8GB RAM 512GB SSD Iris Xe",
    price: "67470000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },
  {
    id: 16,
    category: "laptop",
    tag: "",
    src: "./pictures/product16.webp",
    title: "لپ تاپ لنوو 15.6 اینچی مدل V15 i5 ۱۱۳۵G۷ 8GB RAM 256GB MX۳۵۰2GB",
    subTitle:
      "Lenovo V15 i3 1115G4 12GB 1TB HDD 256GB SSD 2GB MX350 FHD 15.6 inch Laptop",
    price: "23200000",
    prevPrice: "",
    perecentag: "",
    quantity: 1,
  },

  {
    id: 17,
    category: "furniture",
    tag: "sale",
    src: "./pictures/product17.webp",
    title: "تلویزیون ال ای دی نکسار مدل NTV-U50E616N سایز 50 اینچ",
    subTitle: "Nexar NTV-U50E616N LED TV 50 Inch",
    price: "15500000",
    prevPrice: "17200000",
    perecentag: "11",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 18,
    category: "furniture",
    tag: "sale",
    src: "./pictures/product18.webp",
    title: " ماشین لباسشویی گرین 12 کیلویی مدل GWM120BL1400",
    subTitle: "Pakshoma BWF 40108 Washing Machine",
    price: "25500000",
    prevPrice: "30000000",
    perecentag: "15",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 19,
    category: "furniture",
    tag: "sale",
    src: "./pictures/product19.webp",
    title: "ماشین ظرفشویی اسنوا 13 نفره سری مومنتز مدل SDW-F353200",
    subTitle: "Snowa Moments Series SDW-F353200 Dishwasher",
    price: "19700000",
    prevPrice: "21150000",
    perecentag: "7",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 20,
    category: "furniture",
    tag: "sale",
    src: "./pictures/product20.webp",
    title: " تلویزیون ال ای دی ایکس ویژن مدل XCU765 سایز 55 اینچ",
    subTitle: "X.Vision XCU765 LED 55 inch TV",
    price: "21800000",
    prevPrice: "23900000",
    perecentag: "6",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 21,
    category: "furniture",
    tag: "sale",
    src: "./pictures/product21.webp",
    title: "کولر گازی گرین 30 هزار مدل GWS-H30P1T1/R1",
    subTitle: "Hisense HRH-09TQ 9000 Air Conditioner",
    price: "25500000",
    prevPrice: "30000000",
    perecentag: "15",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 22,
    category: "furniture",
    tag: "sale",
    src: "./pictures/product22.webp",
    title: " جارو برقی پارس خزر مدل Turbo 2000",
    subTitle: "Pars Khazar VC-2000W Vacuum Cleaner",
    price: "3500000",
    prevPrice: "4200000",
    perecentag: "13",
    Date: "Jun 30 2024",
    quantity: 1,
  },

  {
    id: 23,
    category: "accessory",
    tag: "sale",
    src: "./pictures/product23.webp",
    title: " هندزفری بلوتوثی انکر مدل Soundcore P25i",
    subTitle: "Anker Soundcore AeroFit A3872 Open-Ear Comfort Earbuds",
    price: "937000",
    prevPrice: "1100000",
    perecentag: "3",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 24,
    category: "accessory",
    tag: "sale",
    src: "./pictures/product24.webp",
    title: " اسپیکر بلوتوثی قابل حمل زیلوت مدل A2",
    subTitle: "Zealot S51 Portable Bluetooth Speaker",
    price: "690000",
    prevPrice: "1800000",
    perecentag: "16",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 25,
    category: "accessory",
    tag: "sale",
    src: "./pictures/product25.webp",
    title: " ساعت هوشمند مدل T900 Ultra ",
    subTitle: "T900 Ultra Smart watch",
    price: "350000",
    prevPrice: "380000",
    perecentag: "4",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 26,
    category: "accessory",
    tag: "sale",
    src: "./pictures/product26.webp",
    title: " فلش مموری ایکس انرژی مدل Gold ظرفیت 64 گیگابایت",
    subTitle: "X-Energy Gold Flash Memory - 64GB",
    price: "2850000",
    prevPrice: "3000000",
    perecentag: "2",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 27,
    category: "accessory",
    tag: "sale",
    src: "./pictures/product27.webp",
    title: " اسپیکر بلوتوثی قابل حمل آکو مدل AS-17",
    subTitle: "Energizer BTS495 Portable Bluetooth Speaker",
    price: "4500000",
    prevPrice: "4800000",
    perecentag: "8",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 28,
    category: "accessory",
    tag: "sale",
    src: "./pictures/product28.webp",
    title: " هارد اس اس دی اینترنال ایکس انرژی مدل FALCON ظرفیت 256 گیگابایت",
    subTitle: "x-Energy FALCON SATA3.0 Internal SSD - 256GB",
    price: "870000",
    prevPrice: "950000",
    perecentag: "2",
    Date: "Jun 30 2024",
    quantity: 1,
  },

  {
    id: 29,
    category: "tablet",
    tag: "sale",
    src: "./pictures/product29.webp",
    title: " تبلت شیائومی مدل Redmi Pad ظرفیت 128 گیگابایت رم 6 گیگابایت",
    subTitle: "Xiaomi Redmi Pad SE 256/8GB",
    price: "12900000",
    prevPrice: "13100000",
    perecentag: "3",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 30,
    category: "tablet",
    tag: "sale",
    src: "./pictures/product30.webp",
    title: " تبلت شیائومی مدل Pad 6 ظرفیت 256 گیگابایت رم 8 گیگابایت",
    subTitle: "Xiaomi Redmi Pad SE 256/8GB",
    price: "17990000",
    prevPrice: "18800000",
    perecentag: "9",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 31,
    category: "tablet",
    tag: "sale",
    src: "./pictures/product31.webp",
    title: " تبلت شیائومی مدل Redmi Pad SE ظرفیت 256 گیگابایت رم 8 گیگابایت ",
    subTitle: "Xiaomi Redmi Pad SE 256/8GB",
    price: "11800000",
    prevPrice: "10800000",
    perecentag: "8",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 32,
    category: "tablet",
    tag: "sale",
    src: "./pictures/product32.webp",
    title: " تبلت لنوو مدل TAB M7 7305X ظرفیت 32 گیگابایت",
    subTitle: "Apple iPad Pro 12.9 inch 2022 WiFi 256GB Tablet",
    price: "4500000",
    prevPrice: "4700000",
    perecentag: "2",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 33,
    category: "tablet",
    tag: "sale",
    src: "./pictures/product33.webp",
    title:
      " تبلت مایکروسافت مدل Surface Pro 9 i7 ظرفیت 512 گیگابایت رم 16 گیگابایت  ",
    subTitle: "Microsoft Surface Pro 9 Core i7 16GB RAM 512GB SSD",
    price: "86899000",
    prevPrice: "87000000",
    perecentag: "3",
    Date: "Jun 30 2024",
    quantity: 1,
  },
  {
    id: 34,
    category: "tablet",
    tag: "sale",
    src: "./pictures/product34.webp",
    title:
      " تبلت اپل مدل (iPad 10.2 2021 (Wifi ظرفیت 64 گیگابایت رم 3 گیگابایت ",
    subTitle: "Apple iPad 10th Gen (2022) Wi-Fi 256GB/4GBs",
    price: "17000000",
    prevPrice: "17800000",
    perecentag: "2",
    Date: "Jun 30 2024",
    quantity: 1,
  },
];

export { allProducts };
