const initState = () =>  {
  const state = {
    user: {
      name: '',
      isAuth: false,
      avatar: '',
      cart: [],
    },
    categories: [],
    currentCategory: null,
    goods: {
      goods: [],
      good: {},
    },
    cart: [],
  }

  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))
  return fromLS ? fromLS : state
}

export default initState
