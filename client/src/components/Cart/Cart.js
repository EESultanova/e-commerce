import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, deleteGoodFromCart } from "../../redux/actionCreators/cartAC";
import { changeQuantityUserCart, deleteGoodFromUserCart } from "../../redux/actionCreators/userAC";
import { Link, useLocation } from "react-router-dom"

import { store } from 'react-notifications-component';

import 'animate.css'
import 'react-notifications-component/dist/theme.css'
import { useProfileContext } from "../../contexts/ProfileContext";
import { useEffect } from "react";
import { getGoods, getGoodsFromServer } from "../../redux/actionCreators/goodAC";

const Cart = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  
  const cart = useSelector(state => state.cart)
  const currentUserAuth = useSelector(state => state.user.isAuth)

  const userCart = useSelector(state => state.user.cart)

  const totalLocalCart = cart
    .map(el => el.price * el.quantity)
    .reduce((acc, currentValue) => acc + currentValue, 0)

  const totalUserCart = userCart
    .map(el => el.price * el.quantity)
    .reduce((acc, currentValue) => acc + currentValue, 0)

    const language = useSelector(state => state.language)

  function NotifyRemove() {
    return (
      <div className="bg-secondary text-white rounded" style={{ width: 200 }}>
        <h6>Success</h6>
        <p>Item was removed from your cart!</p>
      </div>
    )
  }

  return (
    <section className="section-content padding-y">
      <div className="container">

      <div className="row">
        <main className="col-md-9">
      <div className="card">

      <table className="table table-borderless table-shopping-cart">
      <thead className="text-muted">
      <tr className="small text-uppercase">
        <th scope="col" >{language === 'Russian' ? 'Товар' : 'Product'}</th>
        <th scope="col" width="120">{language === 'Russian' ? 'Количество' : 'Quantity'}</th>
        <th scope="col" width="120">{language === 'Russian' ? 'Цена' : 'Price'}</th>
        <th scope="col" className="text-right" width="200"> </th>
      </tr>
      </thead>
      <tbody>
        {/*  */}
        {!currentUserAuth && 
          (cart.length ? cart.map(good => {
            return (
              <tr key={good._id}>
                <td>
                  <figure className="itemside">
                    <div className="aside"><img src={good.photo} className="img-sm" alt=""/></div>
                    <figcaption className="info" style={{width: "100%"}}>
                      <a href="/" className="title text-dark">{good.name}</a>
                      {/* <small className="text-muted">{language === 'Russian' ? `Доступно: ${good.quantity} ${good.quantity > 1 ? 'штук' : 'штука'}` : `Available: ${good.quantity} ${good.quantity > 1 ? 'items' : 'item'}`}</small> */}
                    </figcaption>
                  </figure>
                </td>
                <td> 
                  <input onChange={(event) => dispatch(changeQuantity(good._id, event.target.value))} type="number" value={good.quantity} min="1" placeholder="0" className="form-control"/>
                </td>
                <td> 
                  <div className="price-wrap"> 
                    <var className="price">{(good.price * good.quantity).toFixed(2)} $</var> 
                    <small className="text-muted"> {good.price}$ {language === 'Russian' ? ' / шт' : '/ each'} </small> 
                  </div>
                </td>
                <td className="text-right"> 
                <button onClick={() => dispatch(deleteGoodFromCart(good._id))} className="btn btn-light">{language === 'Russian' ? 'Удалить' : 'Remove'}</button>
                </td>
              </tr>
            )
          })
          : 
          <p className="my-5">{language === 'Russian' ? 'Товары не найдены' : 'No products found'}</p>
        )  
        }
        {currentUserAuth &&
          (userCart.length ? userCart.map(good => {
            return (
              <tr key={good._id}>
                <td>
                  <figure className="itemside">
                    <div className="aside"><img src={good.photo} className="img-sm" alt=""/></div>
                    <figcaption className="info" style={{width: "100%"}}>
                      <a href="/" className="title text-dark">{good.name}</a>
                      {/* <small className="text-muted">{language === 'Russian' ? `Доступно: ${good.quantity} ${good.quantity > 1 ? 'штук' : 'штука'}` : `Available: ${good.quantity} ${good.quantity > 1 ? 'items' : 'item'}`}</small> */}
                    </figcaption>
                  </figure>
                </td>
                <td> 
                  <input onChange={(event) => dispatch(changeQuantityUserCart(good._id, event.target.value))} type="number" value={good.quantity} min="1" placeholder="0" className="form-control"/>
                </td>
                <td> 
                  <div className="price-wrap"> 
                    <var className="price">{(good.price * good.quantity).toFixed(2)} $</var> 
                    <small className="text-muted"> {good.price}$ {language === 'Russian' ? ' / шт' : '/ each'} </small> 
                  </div>
                </td>
                <td className="text-right"> 
                <button onClick={() => dispatch(deleteGoodFromUserCart(good._id))} className="btn btn-light">{language === 'Russian' ? 'Удалить' : 'Remove'}</button>
                </td>
              </tr>
            )
          })
          :
          <p className="my-5">{language === 'Russian' ? 'Товары не найдены' : 'No products found'}</p>
          )  
        }
      {/*  */}
      </tbody>
      </table>

      <div className="card-body border-top">
        <Link to={currentUserAuth ? `/order` : `/login`} className="btn btn-primary float-md-right">{language === 'Russian' ? 'Купить ' : 'Make Purchase '}</Link>
        <Link to="/" className="btn btn-light d-flex" style={{'width': '21%'}}> <i className="fa fa-chevron-left mr-1" style={{'margin-top': '0.2rem'}}></i>{language === 'Russian' ? 'Продолжить покупки' : 'Continue shopping'}</Link>
      </div>	
      </div>
            <div className="alert alert-success mt-3">
              <p className="icontext"><i className="icon text-success fa fa-truck"></i>{language === 'Russian' ? 'Бесплатная доставка в течении 1-2 недель' : 'Free Delivery within 1-2 weeks'}</p>
            </div>

          </main>
          <aside className="col-md-3">
            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>{language === 'Russian' ? 'Итого:' : 'Total price:'}</dt>
                  {currentUserAuth &&
                    <dd className="text-right">{totalUserCart.toFixed(2)} $</dd>
                  }
                  {!currentUserAuth &&
                    <dd className="text-right">{totalLocalCart.toFixed(2)} $</dd>
                  }
                </dl>
                <hr />
                <p className="text-center mb-3">
                  <img src="images/misc/payments.png" height="26" alt="" />
                </p>

              </div>
            </div>
          </aside>
        </div>

      </div>
    </section>
  )
}

export default Cart;
