import '../../html/css/ui.css'
import '../../html/css/responsive.css'
import '../../html/css/bootstrap.css'


import { useDispatch, useSelector } from "react-redux"

import { Link, NavLink, useHistory } from "react-router-dom";
import { removeUser } from '../../redux/actionCreators/userAC'

import avatarLogo from '../../assets/avatar.svg';
import { API_URL, SITE_URL } from '../../config'
import { useEffect, useState } from 'react';
import { filterGoodsSaga, getGoods } from '../../redux/actionCreators/goodAC';
import { useProfileContext } from '../../contexts/ProfileContext';
import { setLanguage } from '../../redux/actionCreators/languageAC';


const Header = () => {
	const [input, setInput] = useState('')
  let {setChoice} = useProfileContext()
  // const { language } = useProfileContext()
	const categories = useSelector(state => state.categories)
	const [categoryForFilter, setCategoryForFilter] = useState(categories[0]?._id)
	const user = useSelector(state => state.user.isAuth);
	const currentUser = useSelector(state => state.user);
	const cart = useSelector(state => state.cart)
	const userCart = useSelector(state => state.user.cart)
	const avatar = currentUser.avatar ? `${SITE_URL + currentUser.avatar}` : avatarLogo;
	const dispatch = useDispatch()
  const language = useSelector(state => state.language)

  const history = useHistory()

  console.log(language)


	const handleLogout = () => {
		dispatch(removeUser())
	}

	useEffect(() => {
		dispatch(filterGoodsSaga({ categoryForFilter, input }))
	}, [input])


  useEffect(() => {
    dispatch(filterGoodsSaga({categoryForFilter, input}))
  }, [categoryForFilter])

  const headerStyle = {
    "font-family": 'Prime, Helvetica, Arial, sans-serif'
  }


  function selectHandler(option) {
    setCategoryForFilter(option)
    history.push(`/categories/${option}`)
    setInput('')
  }


	return (
		<header className="section-header">
			<section className="header-main border-bottom">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-2 col-lg-3 col-md-12">
							<Link to="/" className="brand-wrap">
								<img className="logo" src="/images/logocommerce3.png" alt="" />
								{/* <span style={headerStyle}>E-Commerce</span> */}
							</Link>
						</div>
						<div className="col-xl-6 col-lg-5 col-md-6">
							<form action="#" className="search-header">
								<div className="input-group w-100">
									<select className="custom-select border-right" value={categoryForFilter} onChange={(e) => selectHandler(e.target.value)} name="category_name">
                   {categories.map(el => <option key={el._id} value={el._id}>{(language === 'Russian') ? el.nameRu : el.name}</option>)}
  								</select>

									<input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="form-control" placeholder={language === 'Russian' ? 'Поиск': 'Search' } />

									<div className="input-group-append">
										<Link to={`/categories/${categoryForFilter}`} className="btn btn-primary">	<i className="fa fa-search"></i>{language === 'Russian' ? 'Поиск' : 'Search'}</Link>
									</div>
								</div>
							</form>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="widgets-wrap float-md-right">
								<div className="widget-header mr-3">

										<NavLink to={user ? "/profile" : "/login"} onClick={() => setChoice(0)}><img src={avatar} alt="" style={Object.assign({}, { width: '32px' }, { height: '31px' }, { 'borderRadius': '50%' })} />
											<small className="text"> {language === 'Russian' ? 'Мой профиль' : 'My profile'} </small>
										</NavLink>
									

								</div>
								{/* <div className="widget-header mr-3">
									<a href="/" className="widget-view">
										<div className="icon-area">
											<i className="fa fa-comment-dots"></i>
											<span className="notify">1</span>
										</div>
										<small className="text"> Message </small>
									</a>
								</div> */}
                {user && 
                  <div className="widget-header mr-3">
                    <Link to="/profile" className="widget-view" onClick={() => setChoice(2)}>
                      <div className="icon-area">
                        <i className="fa fa-store"></i>
                      </div>
                      <small className="text"> {language === 'Russian' ? 'Заказы' : 'Orders'} </small>
                    </Link>
                  </div>
                }
								<div className="widget-header">
									<Link to="/cart" className="widget-view">
										<div className="icon-area">
											<i className="fa fa-shopping-cart"></i>
											{user &&
												(userCart?.length ?
													<span className="notify">{userCart.length}</span>
													: '')
											}
											{!user &&
												(cart.length ?
													<span className="notify">{cart.length}</span>
													: '')
											}
										</div>
										<small className="text"> {language === 'Russian' ? 'Корзина': 'Cart'} </small>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



			<nav className="navbar navbar-main navbar-expand-lg border-bottom">
				<div className="container">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/"> <i className="fa fa-bars text-muted mr-2"></i> {language === 'Russian' ? 'Меню' : 'Menu'} </a>
								<div className="dropdown-menu dropdown-large">
									<nav className="row">
										<div className="col-12 ml-3">
											<Link to="/">Home page</Link>
											<Link to={`/categories/607045d7fa8ce327ed1edb2f`}>Books</Link>
											<Link to={`/categories/607045d7fa8ce327ed1edb30`}>Computers & Accessories</Link>
										</div>
									</nav>
								</div>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">{language === 'Russian' ? 'Все категории' : 'All categories'}</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-md-auto">
							{!user &&
								<li className="nav-item">
									<button>
										<Link className="btn btn-primary" to="/login">{language === 'Russian' ? 'Вход' : 'Sign in'}</Link>
									</button>
								</li>
							}
							{!user &&
								<li className="nav-item">
									<button>
										<Link className="btn btn-primary" to="/registration">{language === 'Russian' ? 'Регистрация': 'Sign up'}</Link>
									</button>
								</li>
							}
							{user &&
								<li className="nav-item">
									<button>
										<Link onClick={handleLogout} className="btn btn-primary" to="/">{language === 'Russian' ? 'Выход' : 'Log out'}</Link>
									</button>
								</li>
							}
              {(language === 'Russian') ? 
                <select onChange={(e) => dispatch(setLanguage(e.target.value))} className="nav-item dropdown border-0">
                  <option>English</option>
                  <option selected="selected">Russian</option>
                </select>
                :
                <select onChange={(e) => dispatch(setLanguage(e.target.value))} className="nav-item dropdown border-0">
                  <option selected="selected">English</option>
                  <option>Russian</option>
                </select>
              }
						</ul>
					</div>
				</div>
			</nav>

		</header>
	);
}

export default Header;
