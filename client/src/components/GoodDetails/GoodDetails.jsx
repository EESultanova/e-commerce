import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { addGoodToCart, deleteGoodFromCart } from "../../redux/actionCreators/cartAC"
import { getGood, getGoodDetailsFromServer } from "../../redux/actionCreators/goodAC"

import { store } from 'react-notifications-component';

import 'animate.css'
import 'react-notifications-component/dist/theme.css'
import { addGoodToUserCart, deleteGoodFromUserCart } from "../../redux/actionCreators/userAC"
import Loader from "../Loader/Loader"
import { useProfileContext } from "../../contexts/ProfileContext"

const GoodDetails = () => {

  const [photo, setPhoto] = useState(0)
  const language = useSelector(state => state.language)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoodDetailsFromServer(id))
    return () => { dispatch(getGood([])) }
  }, [])

  const currentUserAuth = useSelector(state => state.user.isAuth)
  const currentUserRole = useSelector(state => state.user.role)
  const good = useSelector(state => state.goods.good)
  // good.quantity = 1

  const cart = useSelector(state => state.cart)
  const inCart = cart?.map(good => good?._id)?.includes(good?._id)

  const userCart = useSelector(state => state?.user?.cart)
  const inUserCart = userCart?.map(good => good?._id)?.includes(good?._id)

  function NotifyAdd() {
    return (
      <div className="bg-primary text-white rounded" style={{ width: 200 }}>
        <h6>{language === 'Russian' ? 'Товар добавлен в вашу корзину' : 'Item was added to your cart'}</h6>
      </div>
    )
  }

  function NotifyRemove() {
    return (
      <div className="bg-secondary text-white rounded" style={{ width: 200 }}>
        <h6>{language === 'Russian' ? 'Товар удален из вашей корзины' : 'Item was removed from your cart'}</h6>
      </div>
    )
  }



  return (
    <div className="row">
      <aside className="col-md-6">
        <div className="card">
          <article className="gallery-wrap">
            {good?.photo &&
              <>
                <div className="img-big-wrap mt-5">
                  <div><img className='w-75 h-75' src={good.photo[photo]} alt="" style={{cursor: 'auto'}} /></div>
                </div>
                <div className="thumbs-wrap">
                  {good?.photo.length ? good?.photo.map((photo, indx) => {
                    return (
                      <div key={indx} className="item-thumb" onClick={() => setPhoto(indx)}> <img src={photo} alt="" style={{cursor: 'pointer'}}/></div>
                    )
                  })
                    : <Loader />
                  }
                </div>
              </>
            }
          </article>
        </div>
      </aside>
      <main className="col-md-6">
        <article className="product-info-aside">

          <h4 className="title mt-5">{good?.name}</h4>

          <div className="rating-wrap my-3">
            <ul className="rating-stars">
              <li style={{ width: 9.4 * good?.rating }} className="stars-active">
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
              </li>
              <li>
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
              </li>
            </ul>
            {/* <small className="label-rating text-muted">{language === 'Russian' ? '132 отзыва' : '132 reviews'}</small> */}
            <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i>{language === 'Russian' ? ` ${Math.abs(good?.initQuantity - good?.quantity)}  заказов` : ` ${Math.abs(good?.initQuantity - good?.quantity)}  orders`}</small>
          </div>

          <div className="mb-3">
            <var className="price h4">{good?.price} $</var>
          </div>

          <p className="my-5">{good?.description}</p>


          <dl className="row mt-5">
            <dt className="col-sm-3">{language === 'Russian' ? 'Артикль №' : 'Article number'}</dt>
            <dd className="col-sm-9">596 065</dd>

            <dt className="col-sm-3">{language === 'Russian' ? 'Гарантия' : 'Guarantee'}</dt>
            <dd className="col-sm-9">{language === 'Russian' ? '2 года' : '2 years'}</dd>

            <dt className="col-sm-3">{language === 'Russian' ? 'Время доставки' : 'Delivery time'}</dt>
            <dd className="col-sm-9">{language === 'Russian' ? '3-4 дня' : '3-4 days'}</dd>

            <dt className="col-sm-3">{language === 'Russian' ? 'Наличие' : 'Availabilty'}</dt>
            <dd className="col-sm-9">{language === 'Russian' ? ((good?.quantity < 9) ? `Осталось мало (${good?.quantity} штук доступно)` : ' В магазине') : ((good?.quantity < 9) ? `Little left (${good?.quantity} items available)` : ' In Stock')}</dd>
          </dl>

          <div className="form-row  mt-5">
            <div className="form-group col-md">
              {!currentUserAuth &&
                ((inCart === true) ?
                  <button onClick={() => {
                    store.addNotification({
                      content: NotifyRemove,
                      message: `Item was removed from your cart!`,
                      type: 'default',
                      container: 'bottom-left',
                      insert: 'bottom',
                      animationIn: ['animated', 'fadeIn'],
                      animationOut: ['animated', 'fadeOut'],

                      dismiss: {
                        duration: 2000,
                      },
                      width: 200,

                    })
                    dispatch(deleteGoodFromCart(good?._id))
                  }} type="button" class="btn btn-secondary">{language === 'Russian' ? 'Удалить из корзины' : 'Remove from cart'}</button>
                  :
                  <button onClick={() => {
                    store.addNotification({
                      content: NotifyAdd,
                      message: `Item was added to your cart!`,
                      type: 'warning',
                      container: 'bottom-left',
                      insert: 'succes',
                      animationIn: ['animated', 'fadeIn'],
                      animationOut: ['animated', 'fadeOut'],

                      dismiss: {
                        duration: 2000,
                      },
                      width: 200,

                    })
                    dispatch(addGoodToCart(good))
                  }} className="btn  btn-primary">
                    <i className="fas fa-shopping-cart"></i> <span className="text">{language === 'Russian' ? 'Добавить в корзину' : 'Add to cart'}</span>
                  </button>)
              }
              {(currentUserAuth && currentUserRole === 'buyer') &&
                ((inUserCart === true) ?
                  <button onClick={() => {
                    store.addNotification({
                      content: NotifyRemove,
                      message: `Item was removed from your cart!`,
                      type: 'default',
                      container: 'bottom-left',
                      insert: 'bottom',
                      animationIn: ['animated', 'fadeIn'],
                      animationOut: ['animated', 'fadeOut'],

                      dismiss: {
                        duration: 2000,
                      },
                      width: 200,

                    })
                    dispatch(deleteGoodFromUserCart(good?._id))
                  }} type="button" class="btn btn-secondary">{language === 'Russian' ? 'Удалить из корзины' : 'Remove from cart'}</button>
                  :
                  <button onClick={() => {
                    store.addNotification({
                      content: NotifyAdd,
                      message: `Item was added to your cart!`,
                      type: 'warning',
                      container: 'bottom-left',
                      insert: 'succes',
                      animationIn: ['animated', 'fadeIn'],
                      animationOut: ['animated', 'fadeOut'],

                      dismiss: {
                        duration: 2000,
                      },
                      width: 200,

                    })
                    dispatch(addGoodToUserCart(good))
                  }} className="btn  btn-primary">
                    <i className="fas fa-shopping-cart"></i> <span className="text">{language === 'Russian' ? 'Добавить в корзину' : 'Add to cart'}</span>
                  </button>)
              }
            </div>
          </div>

        </article>
      </main>
    </div>

  )
}



export default GoodDetails
