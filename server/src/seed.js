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
      photo: 'https://items.s1.citilink.ru/1147259_v01_b.jpg',
    })
    
    const beautyCategory = new CategoryModel({
      name: 'Beauty & Personal Care',
      photo: 'https://images.financialexpress.com/2020/11/beauty2.jpeg' 
    })
    
    const homeCategory = new CategoryModel({
      name: 'Home & Kitchen',
      photo: 'https://shoppingrechargeoffers.com/wp-content/uploads/2018/01/Amazon-Home-Kitchen.jpg'  
    })
    
    const bookOne = new GoodModel({
      name: 'A Promised Land',
      description: 'A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy',
      price: 17.99,
      photo: 'https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg'
    })
    
    const bookTwo = new GoodModel({
      name: 'Sapiens: A Brief History of Humankind',
      description: 'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller',
      price: 13,
      photo: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL._SY346_.jpg'
    })
    
    const bookThree = new GoodModel({
      name: 'Atomic Habits',
      description: 'People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call.',
      price: 12.99,
      photo: 'https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg'
    })

    const computerOne = new GoodModel({
      name: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display',
      description: 'Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort.',
      price: 169.99,
      photo: 'https://items.s1.citilink.ru/1191443_v01_b.jpg'
    })

    bookOne.category = bookCategory
    bookTwo.category = bookCategory
    bookThree.category = bookCategory
    computerOne.category = computerCategory

    await bookCategory.save()
    await computerCategory.save()
    await beautyCategory.save()
    await homeCategory.save()

    await bookOne.save()
    await bookTwo.save()
    await bookThree.save()
    await computerOne.save()

  } catch (error) {
    console.log(error)
  }
  disconnect()
}

start()
