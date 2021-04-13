import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useParams } from "react-router"
import { getGoods, getGoodsFromServer } from "../../redux/actionCreators/goodAC"
import { getCategoriesFromServer } from "../../redux/actionCreators/categoryAC"
import Good from "../Good/Good.jsx"
import { Link } from "react-router-dom"
import Loader from "../Loader/Loader"
import { hideLoader, showLoader } from "../../redux/actionCreators/loaderAC"

import { store } from 'react-notifications-component';
import 'animate.css'
import 'react-notifications-component/dist/theme.css'

const ListGoods = () => {

  
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const sorting = searchParams.get('sorting')
  
  const { id } = useParams()
  const dispatch = useDispatch()
  const searchResult = useSelector(state => state.search?.filter(elem => elem.quantity > 0))
  const loader = useSelector(state => state.loader)
  
  const history = useHistory();
  
  useEffect(() => {
    dispatch(getCategoriesFromServer());
    dispatch(getGoodsFromServer(id, sorting, searchResult))
    return () => { dispatch(getGoods([])) }
  }, [sorting, id])
  
  
  const goods = useSelector(state => state.goods.goods)
  const categories = useSelector(state => state.categories)
  const currentCategory = categories.find(categories => categories._id === id)
  console.log("searchResult", searchResult)
  console.log('goods---------->', goods)
  
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
        <h6>Good!</h6>
        <p>That's very good! Add this in your cart and buy!</p>
      </div>
    )
  }

  function NotifyNo() {
    return (
      <div className="bg-secondary text-white rounded" style={{ width: 200 }}>
        <h6>Sorry</h6>
        <p>You can write to us in our support so that we become better!</p>
      </div>
    )
  }

  console.log(id);

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <nav className="col-md-8" style={{ marginRight: "28rem" }}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {currentCategory && <li className="breadcrumb-item"><Link to={`/categories/${currentCategory._id}`}>{currentCategory.name}</Link></li>}
                <li className="breadcrumb-item active" aria-current="page">Items</li>
                <div className="col-md-2">Filter by</div>
                <li className="list-inline-item mr-2">
                  <div className="form-inline">
                    <label className="mr-2">Price</label>
                    <input className="form-control form-control-sm" placeholder="Min" type="number" />
                    <span className="px-2"> - </span>
                    <input className="form-control form-control-sm" placeholder="Max" type="number" />
                    <button type="submit" className="btn btn-sm btn-light ml-2">Ok</button>
                  </div>
                </li>
                <li>
                  <form className="form-inline mx-2">
                    {sorting === 'price' &&
                      <select onChange={(event) => sortGoods(event.target.value)} className="form-control form-control-sm">
                        <option selected="selected" value="sortasc">Price Low to High</option>
                        <option value="sortdesc">Price High to Low</option>
                        <option value="sortrating">Rating</option>
                      </select>
                    }
                    {sorting === 'price_desc' &&
                      <select onChange={(event) => sortGoods(event.target.value)} className="form-control form-control-sm">
                        <option value="sortasc">Price Low to High</option>
                        <option selected="selected" value="sortdesc">Price High to Low</option>
                        <option value="sortrating">Rating</option>
                      </select>
                    }
                    {sorting === 'rating' &&
                      <select onChange={(event) => sortGoods(event.target.value)} className="form-control form-control-sm">
                        <option value="sortasc">Price Low to High</option>
                        <option value="sortdesc">Price High to Low</option>
                        <option selected="selected" value="sortrating">Rating</option>
                      </select>
                    }
                    {sorting == null &&
                      <select onChange={(event) => sortGoods(event.target.value)} className="form-control form-control-sm">
                        <option selected="selected" value="sortasc">Price Low to High</option>
                        <option value="sortdesc">Price High to Low</option>
                        <option value="sortrating">Rating</option>
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


      <nav className="mb-4 mx-4" aria-label="Page navigation sample">
        <ul className="pagination">
          <li className="page-item disabled"><a className="page-link" href="/">Previous</a></li>
          <li className="page-item active"><a className="page-link" href="/">1</a></li>
          <li className="page-item"><a className="page-link" href="/">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item"><a className="page-link" href="/">4</a></li>
          <li className="page-item"><a className="page-link" href="/">5</a></li>
          <li className="page-item"><a className="page-link" href="/">Next</a></li>
        </ul>
      </nav>


      <div className="box text-center">
        <p>Did you find what you were looking for？</p>
        <div className="btn btn-light" onClick={() => {
                  store.addNotification({
                    content: NotifyYes,
                    message: ``,
                    type: 'default',
                    container: 'bottom-right',
                    insert: 'bottom',
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],

                    dismiss: {
                      duration: 2500,
                    },
                    width: 200,

                  })
                }} style={{cursor: 'pointer'}}>Yes</div>
        <div className="btn btn-light" onClick={() => {
                  store.addNotification({
                    content: NotifyNo,
                    message: ``,
                    type: 'default',
                    container: 'bottom-right',
                    insert: 'bottom',
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],

                    dismiss: {
                      duration: 2500,
                    },
                    width: 200,

                  })
                }} style={{cursor: 'pointer'}}>No</div>
      </div>
    </>
  )
}

export default ListGoods
