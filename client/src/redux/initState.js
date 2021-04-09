const initState = () => {
  const state = {
    user: {
      name: '',
      isAuth: false,
      avatar: '',
      orders: [],
    },
    categories: [],
    currentCategory: null,
    goods: {
      goods: [],
      good: {},
    },
    cart: [],
    good: {},
  }

  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state

}



export default initState
