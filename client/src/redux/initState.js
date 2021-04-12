const initState = () =>  {
  const state = {
    user: {
      name: '',
      isAuth: false,
      avatar: '',
      goods: [],
      orders: [],
    },
    categories: [],
    currentCategory: null,
    goods: {
      goods: [],
      good: {},
    },
    cart: [],
    search: [],
    
  }

  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state
}



export default initState
