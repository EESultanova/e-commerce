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
  }

  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state
}



export default initState
