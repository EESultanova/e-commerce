const { dbConnect, disconnect } = require('./db/connect');
const CategoryModel = require('./models/category.model');
const GoodModel = require('./models/good.model');

async function start () {
  try {
    dbConnect()

    const bookCategory = new CategoryModel({
      name: 'Books',
      photo: 'https://charlottesometimesgoestothemovies.files.wordpress.com/2020/03/books.jpg',
    })
    
    const computerCategory = new CategoryModel({
      name: 'Computers & Accessories',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg',
    })
    
    const beautyCategory = new CategoryModel({
      name: 'Beauty & Personal Care',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg' 
    })
    
    const homeCategory = new CategoryModel({
      name: 'Home & Kitchen',
      photo: 'https://shoppingrechargeoffers.com/wp-content/uploads/2018/01/Amazon-Home-Kitchen.jpg'  
    })

    const casesCategory = new CategoryModel({
      name: 'Cases',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/LandingPages/61Rrv-bvdhL.jpg'
    })

    const smartwatchesCategory = new CategoryModel({
      name: 'Smart Watches',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/LandingPages/71NWRdNUfYL_smartwatch.jpg'
    })

    const jewelryCategory = new CategoryModel({
      name: 'Jewelry',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/LandingPages/71xUBHOzthL_jewelry.jpg'
    })

    const apparelCategory = new CategoryModel({
      name: 'Apparel',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/LandingPages/710o-7KtkL_apparel.jpg'
    })

    const mobilesCategory = new CategoryModel({
      name: 'Mobile Phones',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/LandingPages/385336660.jpg'
    })

    const shoesCategory = new CategoryModel({
      name: 'Shoes',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/LandingPages/91u2Ld8rCxL_shoes.jpg'
    })

    const boardGamesCategory = new CategoryModel({
      name: 'Board Games',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/LandingPages/71Wn4x5doxL_boardgame._CB403556433_.jpg'
    })

    const tabletsCategory = new CategoryModel({
      name: 'Tablets',
      photo: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/LandingPages/tablet.jpg'
    })
    
    const bookOne = new GoodModel({
      name: 'A Promised Land',
      description: 'A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy',
      price: 17.99,
      rating: 8,
      photo: ['https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg']
    })
    
    const bookTwo = new GoodModel({
      name: 'Sapiens: A Brief History of Humankind',
      description: 'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller',
      rating: 9,
      price: 13,
      rating: 9,
      photo: ['https://m.media-amazon.com/images/I/51Sn8PEXwcL._SY346_.jpg']
    })
    
    const bookThree = new GoodModel({
      name: 'Atomic Habits',
      description: 'People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call.',
      price: 12.99,
      rating: 7,
      photo: ['https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg']
    })

    const bookFour = new GoodModel({
      name: 'Harry Potter and the Order of the Phoenix',
      description: 'You are sharing the Dark Lord`s thoughts and emotions. The Headmaster thinks it inadvisable for this to continue. He wishes me to teach you how to close your mind to the Dark Lord.',
      price: 9.99,
      rating: 10,
      photo: ['https://m.media-amazon.com/images/I/51-SI2+aQ2L.jpg']
    })

    const bookFive = new GoodModel({
      name: 'Harry Potter and the Prisoner of Azkaban',
      description: 'Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.',
      price: 9.99,
      rating: 10,
      photo: ['https://m.media-amazon.com/images/I/51Dfqo6jR5L._SY346_.jpg']
    })

    const bookSix = new GoodModel({
      name: 'Dune',
      description: 'Frank Herbert’s classic masterpiece—a triumph of the imagination and one of the bestselling science fiction novels of all time.',
      price: 9.68,
      rating: 9,
      photo: ['https://m.media-amazon.com/images/I/41UZeCEKOBL.jpg']
    })


    const computerOne = new GoodModel({
      name: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display',
      description: 'Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort.',
      price: 169.99,
      rating: 9,
      photo: [
        'https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81zsiJ%2BJnfL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81Tte45ADrL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/918LKJhnCjL._AC_SL1500_.jpg'
      ]
    })

    const computerTwo = new GoodModel({
      name: 'Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming - Black',
      description: 'Spectacular video quality: A premium glass lens, 4k image sensor, high dynamic range (Hdr), and autofocus deliver beautiful, true to life video',
      price: 174.5,
      rating: 6,
      photo: [
        'https://images-na.ssl-images-amazon.com/images/I/615PHGxiucL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61t1FHqsb4L._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61-pRUJtA%2BL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61Xj6NRzDPL._AC_SL1500_.jpg'
      ]
    })

    const computerThree = new GoodModel({
      name: 'NVIDIA Jetson AGX Xavier Developer Kit (32GB)',
      description: 'Newly updated version with an additional 16GB of memory for a total of 32GB of 256-bit wide LPDDR4X memory.',
      price: 699.9,
      rating: 8,
      photo: [
        'https://images-na.ssl-images-amazon.com/images/I/61m739zmagL._AC_SL1059_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/715Low-A4kL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/41wI8A534HL._AC_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/41CgBkre22L._AC_.jpg',
      ]
    })

    const computerFour = new GoodModel({
      name: 'MASiKEN Dust Cover Protective Case for PS5 Console',
      description: 'The internal space is tailored to the size and shape of the PS5 console. The game console can be perfectly contained in the protective bag. The pockets on both sides can also be used for game controllers. The game discs also have a special storage location to avoid moving Damage caused by shocks and drops.',
      price: 23.49,
      rating: 10,
      photo: [
        'https://images-na.ssl-images-amazon.com/images/I/81gt%2BmvI01L._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71xK6bmwKRL._AC_SL1000_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71xTDYH96rL._AC_SL1000_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61jQeHKRNWL._AC_SL1000_.jpg',
      ]
    })

    const computerFive = new GoodModel({
      name: 'ASUS VN248Q-P 23.8" Full HD 1920x1080 IPS DisplayPort HDMI VGA Monitor',
      description: 'Available at a lower price from other sellers that may not offer free Prime shipping.',
      price: 135.80,
      rating: 7,
      photo: [
        'https://images-na.ssl-images-amazon.com/images/I/81xZDeA11NL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71Ju5IbZg3L._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/91-I4RXz0gL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71kF2SBYoYL._AC_SL1500_.jpg',
      ]
    })

    const computerSix = new GoodModel({
      name: 'HP - OMEN Gaming 15.6" Laptop - AMD Ryzen 7 - 8GB Memory - NVIDIA GeForce GTX 1660 Ti - 512GB SSD - Mica Silver',
      description: '15.6" diagonal FHD, 144 Hz, IPS, anti-glare, micro-edge, WLED-backlit, 300 nits, 72% NTSC (1920 x 1080), AMD Ryzen 7 4800H (2.9 GHz base clock, up to 4.3 GHz max boost clock, 4 MB L2 cache, 8 cores)',
      price: 1059,
      rating: 10,
      photo: [
        'https://images-na.ssl-images-amazon.com/images/I/91QgWSxmriL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81tKHM8GQrL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81TkA50TzIL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71I16qtY8yL._AC_SL1500_.jpg',
      ]
    })


    bookOne.category = bookCategory
    bookTwo.category = bookCategory
    bookThree.category = bookCategory
    bookFour.category = bookCategory
    bookFive.category = bookCategory
    bookSix.category = bookCategory

    computerOne.category = computerCategory
    computerTwo.category = computerCategory
    computerThree.category = computerCategory
    computerFour.category = computerCategory
    computerFive.category = computerCategory
    computerSix.category = computerCategory

    await bookCategory.save()
    await computerCategory.save()
    await beautyCategory.save()
    await homeCategory.save()
    await tabletsCategory.save()
    await boardGamesCategory.save()
    await apparelCategory.save()
    await jewelryCategory.save()
    await smartwatchesCategory.save()
    await shoesCategory.save()
    await casesCategory.save()
    await mobilesCategory.save()

    await bookFive.save()
    await bookOne.save()
    await bookTwo.save()
    await bookThree.save()
    await bookFour.save()
    await bookSix.save()
    await computerOne.save()
    await computerTwo.save()
    await computerThree.save()
    await computerFour.save()
    await computerFive.save()
    await computerSix.save()

  } catch (error) {
    console.log(error)
  }
  disconnect()
}

start()
