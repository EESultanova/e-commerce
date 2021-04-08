const { dbConnect, disconnect } = require('./db/connect');
const CategoryModel = require('./models/category.model');



const categories = [
  {
    name: 'Books',
    photo: 'https://charlottesometimesgoestothemovies.files.wordpress.com/2020/03/books.jpg',
  },
  {
    name: 'Computers & Accessories',
    photo: 'https://items.s1.citilink.ru/1147259_v01_b.jpg',
  },
  {
    name: 'Beauty & Personal Care',
    photo: 'https://images.financialexpress.com/2020/11/beauty2.jpeg'
  },
  {
    name: 'Home & Kitchen',
    photo: 'https://shoppingrechargeoffers.com/wp-content/uploads/2018/01/Amazon-Home-Kitchen.jpg'
  }
]

async function seed () {
  await dbConnect()

  try {
    await Promise.all(
      categories.map((category) => {
        new CategoryModel(category).save()
      })
    )
  } catch (error) {
    console.log(error)
  }
}

seed();

