
const initState = () =>  {
  
  const state = {
    user: {
      name: '',
      isAuth: false,
      avatar: '',
      goods: [],
      orders: [],
      cart: [],
    },
    categories: [],
    currentCategory: null,
    goods: {
      goods: [],
      good: {},
    },
    cart: [],
    search: [],
    loader: true,
    language: '',
    searchcategory: '607045d7fa8ce327ed1edb30',
  }

  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state
}



export default initState
