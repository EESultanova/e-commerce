import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useParams } from "react-router"
import { filterGoodsSaga, getGoods, getGoodsFromServer } from "../../redux/actionCreators/goodAC"
import { getCategoriesFromServer } from "../../redux/actionCreators/categoryAC"
import Good from "../Good/Good.jsx"
import { Link } from "react-router-dom"
import Loader from "../Loader/Loader"
import { hideLoader, showLoader } from "../../redux/actionCreators/loaderAC"

import { store } from 'react-notifications-component';
import 'animate.css'
import 'react-notifications-component/dist/theme.css'
import { useProfileContext } from "../../contexts/ProfileContext"
import { setSearchCategoryRedux } from "../../redux/actionCreators/searchCategoryAC"

const ListGoods = () => {

  
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const sorting = searchParams.get('sorting')
  
  const { id } = useParams()
  const dispatch = useDispatch()
  const searchResult = useSelector(state => state.search?.filter(elem => elem.quantity > 0))
  const language = useSelector(state => state.language)
  
  const history = useHistory();
  
  useEffect(() => {
    dispatch(getCategoriesFromServer());
    dispatch(getGoodsFromServer(id, sorting, searchResult))
    return () => { dispatch(getGoods([]))}
  }, [sorting, id])
  
  
  const goods = useSelector(state => state.goods.goods)
  const categories = useSelector(state => state.categories)
  const currentCategory = categories.find(categories => categories._id === id)
  
  useEffect(() => {
    dispatch(setSearchCategoryRedux(currentCategory?._id))
  }, [])

  function sortGoods(arg) {
    if (arg === 'sortasc') {
      history.push(`/categories/${id}/?sorting=price`)
    }
    else if (arg === 'sortdesc') {
      history.push(`/categories/${id}/?sorting=price_desc`)
    } else {
      history.push(`/categories/${id}/?sorting=rating`)
    }
  }

  function NotifyYes() {
    return (
      <div className="bg-primary text-white rounded" style={{ width: 200 }}>
        <h6>{language === 'Russian' ? 'Отлично!' : 'Great!'}</h6>
        <p>{language === 'Russian' ? 'Добавьте товар в корзину и купите!' : `Add this in your cart and buy!`}</p>
      </div>
    )
  }

  function NotifyNo() {
    return (
      <div className="bg-secondary text-white rounded" style={{ width: 200 }}>
        <h6>{language === 'Russian' ? 'Извините!' : 'Sorry!'}</h6>
        <p>{language === 'Russian' 
          ? 'Вы можете написать нам в поддержку, чтобы мы стали лучше!' 
          : 'You can write to us in our support so that we become better!'}
        </p>
      </div>
    )
  }


  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <nav className="col-md-8" style={{ marginRight: "28rem" }}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">{language === 'Russian' ? 'Главная' : 'Home'}</Link></li>
                {currentCategory && <li className="breadcrumb-item"><Link to={`/categories/${currentCategory._id}`}>{language === 'Russian' ? currentCategory.nameRu : currentCategory.name}</Link></li>}
                <li className="list-inline-item mr-1">
                  <label className="ml-5 mr-2">{language === 'Russian' ? 'Фильтровать по ' : 'Sort by'}</label>
                </li>
                <li>
                  <form className="form-inline mx-2">
                    {sorting === 'price' &&
                      <select onChange={(event) => sortGoods(event.target.value)} className="form-control form-control-sm">
                        <option selected="selected" value="sortasc">{language === 'Russian' ? 'Цена по возрастанию' : 'Price Low to High'}</option>
                        <option value="sortdesc">{language === 'Russian' ? 'Цена по убыванию' : 'Price High to Low'}</option>
                        <option value="sortrating">{language === 'Russian' ? 'Рейтинг' : 'Rating'}</option>
                      </select>
                    }
                    {sorting === 'price_desc' &&
                      <select onChange={(event) => sortGoods(event.target.value)} className="form-control form-control-sm">
                        <option value="sortasc">{language === 'Russian' ? 'Цена по возрастанию' : 'Price Low to High'}</option>
                        <option selected="selected" value="sortdesc">{language === 'Russian' ? 'Цена по убыванию' : 'Price High to Low'}</option>
                        <option value="sortrating">{language === 'Russian' ? 'Рейтинг' : 'Rating'}</option>
                      </select>
                    }
                    {sorting === 'rating' &&
                      <select onChange={(event) => sortGoods(event.target.value)} className="form-control form-control-sm">
                        <option value="sortasc">{language === 'Russian' ? 'Цена по возрастанию' : 'Price Low to High'}</option>
                        <option value="sortdesc">{language === 'Russian' ? 'Цена по убыванию' : 'Price High to Low'}</option>
                        <option selected="selected" value="sortrating">{language === 'Russian' ? 'Рейтинг' : 'Rating'}</option>
                      </select>
                    }
                    {sorting == null &&
                      <select onChange={(event) => sortGoods(event.target.value)} className="form-control form-control-sm">
                        <option selected="selected" value="sortasc">{language === 'Russian' ? 'Цена по возрастанию' : 'Price Low to High'}</option>
                        <option value="sortdesc">{language === 'Russian' ? 'Цена по убыванию' : 'Price High to Low'}</option>
                        <option value="sortrating">{language === 'Russian' ? 'Рейтинг' : 'Rating'}</option>
                      </select>
                    }
                  </form>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div id="goods-wrap" className="row">
        {searchResult ? searchResult.map(good => {
          console.log(good)
          return (
            <Good key={good._id} good={good} />
          )
        }) :
          goods?.length ? goods.map(good => {
            return (
              <Good key={good._id} good={good} />
            )
          })
            : <Loader />
        }
      </div>


      {/* <nav className="mb-4 mx-4" aria-label="Page navigation sample">
        <ul className="pagination">
          <li className="page-item disabled"><a className="page-link" href="/">{language === 'Russian' ? 'Предыдущая' : 'Previous'}</a></li>
          <li className="page-item active"><a className="page-link" href="/">1</a></li>
          <li className="page-item"><a className="page-link" href="/">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item"><a className="page-link" href="/">4</a></li>
          <li className="page-item"><a className="page-link" href="/">5</a></li>
          <li className="page-item"><a className="page-link" href="/">{language === 'Russian' ? 'Следующая' : 'Next'}</a></li>
        </ul>
      </nav> */}


      <div className="box text-center">
        <p>{language === 'Russian' ? 'Ты нашел то, что искал?' : 'Did you find what you were looking for?'}</p>
        <div className="btn btn-light" onClick={() => {
                  store.addNotification({
                    content: NotifyYes,
                    message: ``,
                    type: 'default',
                    container: 'bottom-left',
                    insert: 'bottom',
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],

                    dismiss: {
                      duration: 2500,
                    },
                    width: 200,

                  })
                }} style={{cursor: 'pointer'}}>{language === 'Russian' ? 'Да' : 'Yes'}</div>
        <span> </span>
        <div className="btn btn-light" onClick={() => {
                  store.addNotification({
                    content: NotifyNo,
                    message: ``,
                    type: 'default',
                    container: 'bottom-left',
                    insert: 'bottom',
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],

                    dismiss: {
                      duration: 2500,
                    },
                    width: 200,

                  })
                }} style={{cursor: 'pointer'}}>{language === 'Russian' ? 'Нет' : 'No'}</div>
      </div>
    </>
  )
}

export default ListGoods
