const products = [
    
  {
    "id": "001",
    "category": "Home Appliances",
    "sub": "TV",
    "name": "Samsung Crystal UHD",
    "brand": "Samsung",
    "price": 29999,
    "inStock": "Yes",
    "image": "../assests/products/tv/tv1.png",
    "rating": 4.1,
    "percentOff": 10,
    "description": "Samsung 108 cm (43 inches) 4K Ultra HD Smart LED TV UA43DUE70BKLXL (Black)",
    "onlyLeft": null,
    "moreSmallDetails": {
      "resolution": "4K UHD",
      "smartFeatures": "Tizen OS",
      "hdmiPorts": "3",
      "usbPorts": "1"
    },
    "about": [
      "Immerse yourself in lifelike visuals with Samsung's Crystal UHD display, which delivers stunning 4K resolution and vibrant colors. Ideal for cinematic experiences in your living room.",
      "Equipped with the smart Tizen OS, this TV offers smooth access to popular apps, voice assistants, and seamless screen mirroring. Sleek design and powerful performance in one package."
    ]
  },
  {
    "id": "002",
    "category": "Home Appliances",
    "sub": "TV",
    "name": "Xiaomi A Pro 4K",
    "brand": "Xiaomi",
    "price": 23999,
    "inStock": "Yes",
    "image": "../assests/products/tv/tv2.png",
    "rating": 4.1,
    "percentOff": 22,
    "description": "MI Xiaomi 108 cm (43 inches) A Pro 4K Dolby Vision Smart Google LED TV L43MA-AUIN (Black)",
    "onlyLeft": "3",
    "moreSmallDetails": {
      "displayTech": "Dolby Vision",
      "operatingSystem": "Google TV",
      "voiceAssistant": "Google Assistant",
      "refreshRate": "60 Hz"
    },
    "about": [
      "Enjoy crystal-clear 4K content enhanced with Dolby Vision for deeper blacks and brighter highlights. This Xiaomi TV redefines affordable performance.",
      "Built on Google TV, it delivers intelligent content recommendations, voice search, and control via Google Assistant. Sleek and minimalist for modern interiors."
    ]
  },
  {
    "id": "003",
    "category": "Home Appliances",
    "sub": "TV",
    "name": "Redmi Fire TV",
    "brand": "Xiaomi",
    "price": 11499,
    "inStock": "No",
    "image": "../assests/products/tv/tv3.png",
    "rating": 4.1,
    "percentOff": 54,
    "description": "Redmi Xiaomi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32MA-FVIN (Black)",
    "onlyLeft": null,
    "moreSmallDetails": {
      "screenSize": "32 inches",
      "os": "Fire OS",
      "audio": "Dolby Audio"
    },
    "about": [
      "Perfect for small rooms or secondary TVs, the Redmi Fire TV offers an easy smart experience via Fire OS. Watch Prime Video, Netflix, and YouTube with one click.",
      "Its HD-ready panel and Dolby Audio support make it a budget-friendly yet enjoyable entertainment choice. Responsive UI with parental controls and Alexa integration."
    ]
  },
  {
    "id": "004",
    "category": "Home Appliances",
    "sub": "TV",
    "name": "TCL QLED Pro",
    "brand": "TCL",
    "price": 53990,
    "inStock": "Yes",
    "image": "../assests/products/tv/tv4.png",
    "rating": 4.1,
    "percentOff": 58,
    "description": "TCL 165 cm (65 inches) 4K Ultra HD Smart QLED Google TV 65P71B Pro",
    "onlyLeft": null,
    "moreSmallDetails": {
      "panelType": "QLED",
      "screenSize": "65 inches",
      "aiUpscaling": "Yes",
      "hdr": "HDR10+"
    },
    "about": [
      "This massive 65-inch QLED TV from TCL boasts intense color accuracy and deep blacks, delivering a theater-like experience at home. Ideal for large living rooms and home cinemas.",
      "Equipped with AI upscaling and HDR10+, this smart TV runs on Google TV, supporting hands-free voice control, personalized recommendations, and endless streaming options."
    ]
  },
  {
    "id": "005",
    "category": "Home Appliances",
    "sub": "TV",
    "name": "Samsung HD Smart",
    "brand": "Samsung",
    "price": 14990,
    "inStock": "Yes",
    "image": "../assests/products/tv/tv5.png",
    "rating": 4.1,
    "percentOff": 25,
    "description": "Samsung 80 cm (32 inches) HD Ready Smart LED TV UA32T4380AKXXL (Glossy Black)",
    "onlyLeft": null,
    "about": [
      "Enjoy your favorite content in HD clarity with Samsung's trusted panel quality and smooth Smart TV features. This TV brings great value for first-time smart TV buyers.",
      "Its compact size makes it perfect for bedrooms, while still offering access to all major streaming apps, screen mirroring, and energy-efficient operation."
    ]
  },

  {
    "id": "lap001",
    "name": "Laptop",
    "category": "Tech",
    "sub": "Laptop",
    "brand": "HP",
    "price": 32999,
    "percentOff": null,
    "onlyLeft": null,
    "inStock": "yes",
    "image": "../assests/products/laptop/lap1.png",
    "rating": 4.5,
    "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
    "moreSmallDetails": {
      "processor": "Quad-Core i5",
      "ram": "8GB",
      "storage": "256GB SSD"
    },
    "moreLargeDetails": {
      "battery": "Up to 8 hours of battery life, ensuring you can work or play uninterrupted for longer sessions.",
      "ports": "2 USB 3.0, 1 HDMI"
    },
    "about": [
      "This HP laptop offers a smooth and fast performance with its quad-core processor and ample storage, perfect for both work and entertainment.",
      "Its 14-inch Full HD display ensures crisp visuals, while the lightweight design makes it portable and ideal for on-the-go use."
    ]
  },
  {
    "id": "lap002",
    "name": "Laptop",
    "category": "Tech",
    "sub": "Laptop",
    "brand": "Acer",
    "price": 34990,
    "percentOff": "28",
    "onlyLeft": 2,
    "inStock": "yes",
    "image": "../assests/products/laptop/lap2.png",
    "rating": 4.9,
    "description": "Acer SmartChoice Aspire Lite with AMD Ryzen 5-5625U, 16 GB RAM, 512 GB SSD, and 15.6\" Full HD display.",
    "moreSmallDetails": null,
    "moreLargeDetails": {
      "battery": "This laptop provides up to 10 hours of battery life, making it perfect for long working sessions or studying.",
      "os": "Windows 11 Home"
    },
    "about": [
      "This Acer laptop provides high-end performance with AMD Ryzen 5 processor, making it perfect for demanding tasks like video editing and gaming.",
      "Its sleek design and powerful internals are complemented by the 15.6-inch Full HD screen, delivering excellent viewing quality and productivity."
    ]
  },
  {
    "id": "lap003",
    "name": "Laptop",
    "category": "Tech",
    "sub": "Laptop",
    "brand": "Apple",
    "price": 161990,
    "percentOff": "35",
    "onlyLeft": null,
    "inStock": "yes",
    "image": "../assests/products/laptop/lap3.png",
    "rating": 4.8,
    "description": "Apple 2024 MacBook Pro with M4 chip, 10-core CPU, 16GB RAM, and 512GB SSD.",
    "moreSmallDetails": {
      "processor": "M4 chip (10-core CPU)",
      "ram": "16GB",
      "storage": "512GB SSD"
    },
    "moreLargeDetails": null,
    "about": [
      "Apple’s MacBook Pro with M4 chip delivers unmatched performance, with 10 cores for smooth multitasking and flawless execution of even the most complex applications.",
      "The 14.2-inch Liquid Retina XDR display provides vivid colors and precise details, ideal for professionals and creatives who demand the best in their work."
    ]
  },
  {
    "id": "lap004",
    "name": "Laptop",
    "category": "Tech",
    "sub": "Laptop",
    "brand": "HP",
    "price": 28980,
    "percentOff": "33",
    "onlyLeft": null,
    "inStock": "no",
    "image": "../assests/products/laptop/lap4.png",
    "rating": 4.4,
    "description": "HP 255 G10 with AMD Ryzen 5 7520U, 8GB RAM, 512GB SSD, 15.6\" Full HD display.",
    "moreSmallDetails": {
      "processor": "AMD Ryzen 5 7520U",
      "ram": "8GB",
      "storage": "512GB SSD"
    },
    "moreLargeDetails": {
      "battery": "With a powerful 52 WHr battery, this laptop can keep you going for hours, even during intensive tasks.",
      "ports": "2 USB 3.0, 1 HDMI"
    },
    "about": [
      "HP’s 255 G10 laptop combines strong performance with a lightweight design, making it perfect for everyday tasks such as browsing, office work, and streaming.",
      "With a fast Ryzen processor and large storage capacity, you can store your files without worrying about running out of space, while the Full HD display ensures clear visuals."
    ]
  },
  {
    "id": "lap005",
    "name": "Laptop",
    "category": "Tech",
    "sub": "Laptop",
    "brand": "HP",
    "price": 41990,
    "percentOff": null,
    "onlyLeft": null,
    "inStock": "yes",
    "image": "../assests/products/laptop/lap5.png",
    "rating": 4.9,
    "description": "Acer Aspire 3 Spin 14, Intel Core i3-N305, 8GB RAM, 512GB SSD, WUXGA 14  Touchscreen 2-in-1.",
    "moreSmallDetails": null,
    "moreLargeDetails": {
      "battery": "The battery lasts up to 9 hours, allowing you to work or play throughout the day without frequent charging.",
      "os": "Windows 11 Home"
    },
    "about": [
      "This 2-in-1 Acer Aspire laptop provides ultimate flexibility with its touchscreen and convertible design, making it perfect for both work and entertainment.",
      "It comes with a powerful Intel Core processor and ample storage, allowing you to multitask and store all your files with ease."
    ]
  },

    {        
        "id": "blu001",        
        "category": "Tech",        
        "sub": "Bluetooth Device",
        "name": "Samsung Bluetooth Speaker",
        "brand": "Samsung",
        "price": 13999,
        "inStock": "Yes",
        "onlyLeft": null,
        "image": "../assests/products/blue/blue1.png",
        "rating": 4.9,
        "description": "Sound Speaker for Adults and Kids, Best Bluetooth Speakers with 2 Microphones.",
        "percentOff": 10,
        "moreLargeDetails": {
            "soundQuality": "This speaker delivers excellent sound quality, featuring dual microphones for enhanced voice capture and clear audio output.",
            "wirelessConnectivity": "Perfect for any event, this Bluetooth speaker provides wireless connectivity with a stable range and long-lasting battery life.",
            "portability": "Whether you’re at home or outdoors, the sound clarity and bass response of this speaker ensure a premium audio experience."
        },
        "about": [
            "Samsung Bluetooth speaker is built with durability and ease of use in mind. It combines sleek design with functionality, offering versatility across multiple environments.",
            "Its robust build and high-quality sound performance make it an ideal choice for both casual and professional users alike."
        ]
    },
    {        
        "id": "blu002",        
        "category": "Tech",        
        "sub": "Bluetooth Device",
        "name": "boAt Rockerz 255 Pro+",
        "brand": "boAt",
        "price": 1300,
        "inStock": "Yes",
        "onlyLeft": null,
        "image": "../assests/products/blue/blue2.png",
        "rating": 4.2,
        "description": "boAt Rockerz 255 Pro+, 60HRS Battery, Fast Charge, IPX7, Dual Pairing, Low Latency, Magnetic Earbuds, in Ear Bluetooth Neckband, Wireless with Mic.",
        "percentOff": 22,
        "moreLargeDetails": {
            "batteryLife": "Enjoy uninterrupted audio with the 60-hour battery life. These earphones support fast charging and offer deep bass for an immersive experience.",
            "designComfort": "The ergonomic design ensures a comfortable fit, while the IPX7 rating offers water resistance for workouts and outdoor activities.",
            "gamingPerformance": "Enhanced with magnetic earbuds for easy storage and low latency for seamless gaming and media consumption."
        },
        "about": [
            "boAt Rockerz 255 Pro+ earphones feature state-of-the-art audio technology to deliver exceptional sound clarity with deep bass and crisp highs.",
            "Its sleek design and extended battery life make these earphones a perfect companion for those on the go, delivering both comfort and performance."
        ]
    },
    {        
        "id": "blu003",        
        "category": "Tech",        
        "sub": "Bluetooth Device",
        "name": "Sony WH-CH520 Wireless Headphones",
        "brand": "Sony",
        "price": 3989,
        "inStock": "Yes",
        "onlyLeft": null,
        "image": "../assests/products/blue/blue3.png",
        "rating": 4.6,
        "description": "Sony WH-CH520 Wireless Bluetooth Headphones with Mic, Up to 50Hrs Battery-Blue",
        "percentOff": 33,
        "moreLargeDetails": {
            "soundQuality": "Sony headphones provide deep bass and clear highs for an immersive listening experience. With up to 50 hours of battery life, you can enjoy music all day long.",
            "designComfort": "Designed for ultimate comfort, these headphones have plush ear cups and a lightweight build, perfect for long listening sessions.",
            "handsFree": "Integrated microphone ensures clear hands-free calls, and the Bluetooth connectivity allows seamless pairing with your devices."
        },
        "about": [
            "The Sony WH-CH520 headphones are designed for superior sound quality and comfort, ensuring a high-quality audio experience wherever you go.",
            "Their long-lasting battery, combined with the ease of use and mobility, make them the ideal choice for both casual and professional listeners."
        ]
    },
    {        
        "id": "blu004",        
        "category": "Tech",        
        "sub": "Bluetooth Device",
        "name": "Boult Audio W20 Earbuds",
        "brand": "Boult",
        "price": 799,
        "inStock": "Yes",
        "onlyLeft": 4,
        "image": "../assests/products/blue/blue4.png",
        "rating": 4.3,
        "description": "Boult Audio W20 Truly Wireless in Ear Earbuds with 40H Playtime, Zen™ ENC Mic, 45ms Low Latency, 13mm Bass Drivers, Type-C Fast Charging, Made in India, Touch Controls.",
        "percentOff": 10,
        "moreLargeDetails": {
            "batteryLife": "These wireless earbuds provide 40 hours of playtime and are designed for gaming with 45ms low latency. Enjoy uninterrupted music and gaming sessions.",
            "waterResistance": "The Zen ENC mic filters out background noise, making calls clearer and more convenient. With the IPX5 water-resistant rating, they're perfect for workouts.",
            "fastCharging": "Type-C fast charging ensures quick recharge times, allowing you to spend less time waiting and more time enjoying your music."
        },
        "about": [
            "The Boult Audio W20 earbuds are engineered for high-quality sound and low-latency performance, offering a great balance between audio clarity and durability.",
            "Whether you’re working out, gaming, or just enjoying music, these earbuds offer premium features at an affordable price."
        ]
    },
    {        
        "id": "blu005",        
        "category": "Tech",        
        "sub": "Bluetooth Device",
        "name": "Noise Buds N1 Earbuds",
        "brand": "Noise",
        "price": 1199,
        "inStock": "Yes",
        "onlyLeft": 5,
        "image": "../assests/products/blue/blue5.png",
        "rating": 4.8,
        "description": "Noise Buds N1 in-Ear True Wireless Earbuds with Chrome Finish, 40H of Playtime, Quad Mic with ENC, Ultra Low Latency.",
        "percentOff": 10,
        "moreLargeDetails": {
            "playtime": "With 40 hours of playtime and ultra-low latency, Noise Buds N1 is perfect for gaming and music. The Instacharge feature offers 120 minutes of playtime in just 10 minutes of charging.",
            "callQuality": "The quad-microphone with Environmental Noise Cancellation (ENC) ensures that your calls are always crystal clear, no matter where you are.",
            "connectivity": "Featuring Bluetooth V5.3, you get faster pairing and better stability, making them ideal for various activities."
        },
        "about": [
            "Noise Buds N1 are designed for people who value both style and performance, offering excellent audio quality, long battery life, and rapid charging.",
            "These earbuds are perfect for those on the move, combining portability with cutting-edge technology for an optimal listening experience."
        ]
    },
    {        
        "id": "blu006",        
        "category": "Tech",        
        "sub": "Bluetooth Device",
        "name": "JBL Tune 510BT Headphones",
        "brand": "JBL",
        "price": 3999,
        "inStock": "Yes",
        "onlyLeft": null,
        "image": "../assests/products/blue/blue6.png",
        "rating": 4.6,
        "description": "JBL Tune 510BT, On Ear Wireless Headphones with Mic, up to 40 Hours Playtime, Pure Bass, Quick Charging, Dual Pairing, Bluetooth 5.0 & Voice Assistant Support for Mobile Phones (Black)",
        "percentOff": 10,
        "moreLargeDetails": {
            "bassQuality": "JBL Tune 510BT headphones offer an immersive audio experience with powerful bass and clear mids. Enjoy wireless freedom and the ability to connect to two devices simultaneously.",
            "batteryLife": "With Bluetooth 5.0, you’ll have a stable connection for up to 40 hours of playtime, and quick charging means you can get back to listening faster.",
            "comfort": "These headphones are designed for comfort, with plush ear cups that ensure you can listen to music for hours without discomfort."
        },
        "about": [
            "JBL Tune 510BT provides high-quality audio with a focus on bass, making it perfect for all types of music.",
            "With Bluetooth 5.0 and quick charging, you get the best of both worlds: stable connectivity and long-lasting playtime."
        ]
    },
  {
    "id": "mobile001",
    "category": "Tech",
    "sub": "mobile",
    "name": "iPhone 16 128 GB",
    "brand": "Apple",
    "price": 149999,
    "inStock": "Yes",
    "onlyLeft": null,
    "image": "../assests/products/mobile/mobile1.png",
    "rating": 4.8,
    "description": "iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Ultramarine",
    "percentOff": 20,
    "moreSmallDetails": {
      "chipset": "A18 Bionic",
      "battery": "4500 mAh",
      "screen": "6.7-inch OLED",
      "storage": "128 GB"
    },
    "moreLargeDetails": {
      "performance": "The A18 Bionic delivers up to 50 percent faster CPU performance, making multitasking fluid and effortless.",
      "durability": "Ceramic Shield front and aerospace-grade aluminum frame ensure drop resistance and long-term durability."
    },
    "about": [
      "The iPhone 16 brings industry-leading performance in a sleek design, ideal for power users and mobile gamers.",
      "With advanced camera control and 5G support, it captures stunning photos and videos in any lighting condition."
    ]
  },
  {
    "id": "mobile002",
    "category": "Tech",
    "sub": "mobile",
    "name": "realme GT 6T 5G",
    "brand": "realme",
    "price": 24998,
    "inStock": "Yes",
    "onlyLeft": null,
    "image": "../assests/products/mobile/mobile2.png",
    "rating": 4.8,
    "description": "realme GT 6T 5G (Fluid Silver, 8 GB RAM + 256 GB) | 7+ Gen 3 Chipset | 1.5 M AnTuTu | 5500 mAh + 120 W SuperVOOC",
    "percentOff": 23,
    "moreSmallDetails": {
      "display": "6.74-inch AMOLED",
      "refreshRate": "120 Hz",
      "ram": "8 GB"
    },
    "moreLargeDetails": {
      "charging": "120 W SuperVOOC charges the battery from zero to 100 percent in just 24 minutes for uninterrupted use.",
      "gaming": "The 7+ Gen 3 chipset optimizes thermals and power efficiency, delivering sustained high-frame-rate gaming performance."
    },
    "about": [
      "The GT 6T 5G blends flagship processing power with fast charging, making it perfect for heavy-duty mobile use.",
      "Its ultra-bright AMOLED screen and premium build quality stand out in its price segment."
    ]
  },
  {
    "id": "mobile003",
    "category": "Tech",
    "sub": "mobile",
    "name": "iQOO Z9 Lite 5G",
    "brand": "iQOO",
    "price": 11499,
    "inStock": "Yes",
    "onlyLeft": null,
    "image": "../assests/products/mobile/mobile3.png",
    "rating": 4.5,
    "description": "iQOO Z9 Lite 5G (Mocha Brown, 6 GB + 128 GB) | Dimensity 6300 5G | 50 MP Sony AI Camera | Charger in Box",
    "percentOff": 12,
    "moreSmallDetails": null,
    "moreLargeDetails": {
      "camera": "Sony-branded 50 MP sensor with AI enhancements captures vivid, detailed photos in all lighting environments.",
      "network": "Supports dual-mode 5G connectivity across critical bands, ensuring stable high-speed internet in metro areas."
    },
    "about": [
      "The Z9 Lite delivers strong value with its AI camera and reliable Dimensity chipset.",
      "An on-board charger and robust 5000 mAh battery make it ideal for long-lasting daily performance."
    ]
  },
  {
    "id": "mobile004",
    "category": "Tech",
    "sub": "mobile",
    "name": "Galaxy M35 5G",
    "brand": "Samsung",
    "price": 21499,
    "inStock": "Yes",
    "onlyLeft": null,
    "image": "../assests/products/mobile/mobile4.png",
    "rating": 4.3,
    "description": "Samsung Galaxy M35 5G (Daybreak Blue, 8 GB + 256 GB) | Gorilla Glass Victus+ | 6000 mAh | 120 Hz Super AMOLED",
    "percentOff": 26,
    "moreSmallDetails": {
      "battery": "6000 mAh",
      "protection": "Gorilla Glass Victus+"
    },
    "moreLargeDetails": null,
    "about": [
      "Galaxy M35 5G excels with a giant battery and vibrant Super AMOLED display for binge-watching and gaming.",
      "Its sleek metal-finish design and fast 25 W charging add to its premium feel."
    ]
  },
  {
    "id": "mobile005",
    "category": "Tech",
    "sub": "mobile",
    "name": "realme Narzo 80x 5G",
    "brand": "realme",
    "price": 13998,
    "inStock": "Yes",
    "onlyLeft": null,
    "image": "../assests/products/mobile/mobile5.png",
    "rating": 4.5,
    "description": "realme Narzo 80x 5G (Deep Ocean, 6 GB + 128 GB) | Dimensity 6400 5G | 6000 mAh | 45 W Fast Charge | IP69 Waterproof",
    "percentOff": 20,
    "moreSmallDetails": null,
    "moreLargeDetails": {
      "durability": "IP69 rating protects against high-pressure water and dust, making it suitable for outdoor use.",
      "battery": "45 W charging restores 50 percent battery in just 16 minutes, minimizing downtime between sessions."
    },
    "about": [
      "The Narzo 80x offers a rare combination of waterproofing and rapid charging in a budget 5G phone.",
      "Its large battery and vivid display make it ideal for commuters and outdoor enthusiasts."
    ]
  },
  {
    "id": "mobile006",
    "category": "Tech",
    "sub": "mobile",
    "name": "Nord CE4 Lite 5G",
    "brand": "OnePlus",
    "price": 17998,
    "inStock": "Yes",
    "onlyLeft": null,
    "image": "../assests/products/mobile/mobile6.png",
    "rating": 4.9,
    "description": "OnePlus Nord CE4 Lite 5G (Ultra Orange, 8 GB + 128 GB) | 64 MP Camera | 5000 mAh | 33 W SuperVOOC",
    "percentOff": 20,
    "moreSmallDetails": {
      "camera": "64 MP main",
      "charging": "33 W SuperVOOC"
    },
    "moreLargeDetails": null,
    "about": [
      "Nord CE4 Lite delivers flagship-style cameras and fast charging on a budget 5G device.",
      "Its smooth OxygenOS experience and clean UI are hallmarks of OnePlus quality."
    ]
  },
  {
    "id": "mobile007",
    "category": "Tech",
    "sub": "mobile",
    "name": "realme P1 Speed 5G",
    "brand": "realme",
    "price": 16100,
    "inStock": "Yes",
    "onlyLeft": null,
    "image": "../assests/products/mobile/mobile7.png",
    "rating": 4.9,
    "description": "realme P1 Speed 5G (Textured Titanium, 12 GB + 256 GB) | Helio G99 | 90 Hz LCD | 5000 mAh | 33 W Dart Charge",
    "percentOff": 20,
    "moreSmallDetails": null,
    "moreLargeDetails": {
      "memory": "12 GB RAM and 256 GB storage ensure you have plenty of space and smooth multitasking.",
      "network": "Dual-mode 5G support across major bands keeps you connected at fast speeds nationwide."
    },
    "about": [
      "P1 Speed 5G balances high memory capacity with efficient chipset performance for day-long use.",
      "Its textured finish and fast charging make it both stylish and practical for daily carry."
    ]
  },
    {
        "id": 5,
        "name": "Smart Watch",
        "category": "tech",
        "brand": "Noise",
        "price": 1099,
        "inStock": "no",
        "onlyLeft": null,
        "sub": "watch",
        "image": "../assests/products/watch.png",
        "rating": 4.9,
        "description": "Noise Pulse 2 Max 1.85 Display, Bluetooth Calling Smart Watch, 10 Days Battery...",
        "percentOff": 30,
        "detailed-desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minimaLorem ipsum dolor sit amet consectetur adipisicing elit.",        
        "moreSmallDetails": {"lorem": "Lorem ipsum.", "lorem2": "Lorem ipsum.", "lorem3": "Lorem ipsum.", "lorem4": "Lorem ipsum.", "lorem5": "Lorem ipsum."},
        "moreLargeDetails": {"lorem": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus nulla sit id suscipit vitae.", "lorem2": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus", "lorem3":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus nulla sit id suscipit vitae."},
        "about": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima"," Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima"]
    
    },
    {
        "id": 6,
        "name": "Air Conditioner",
        "category": "Home Appliances",       
        "sub": "AC",
        "brand": "Voltas",
        "price": 33990,
        "inStock": "yes",
        "onlyLeft": 6,
        "image": "../assests/products/ac.png",
        "rating": 4.5,
        "description": "Voltas 1.5 ton 3 Star, Inverter Split AC (Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 183V Vectra CAW, White)",
        "percentOff": 20,
        "detailed-desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minimaLorem ipsum dolor sit amet consectetur adipisicing elit.",        
        "moreSmallDetails": {"lorem": "Lorem ipsum.", "lorem2": "Lorem ipsum.", "lorem3": "Lorem ipsum.", "lorem4": "Lorem ipsum.", "lorem5": "Lorem ipsum."},
        "moreLargeDetails": {"lorem": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus nulla sit id suscipit vitae.", "lorem2": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus", "lorem3":" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus nulla sit id suscipit vitae."},
        "about": ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minimaLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima"," Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima"]
    
    }
]