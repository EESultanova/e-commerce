import React, { useEffect, useState } from 'react'
import { AddressSuggestions } from 'react-dadata'
import { FioSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useProfileContext } from '../../contexts/ProfileContext';
import { emptyCart } from '../../redux/actionCreators/cartAC';
import { changeGoodsQuantityOnServer } from '../../redux/actionCreators/goodAC';
import { addOrderDetails, addOrderDetailsToServer, emptyUserCart, getAllOrders } from '../../redux/actionCreators/userAC';
import Paypal from '../PayPal/PayPal';
function Order() {
  const dispatch = useDispatch()
  const [checkout, setCheckOut] = useState(false);
  const [address, setAddress] = useState('')
  const [fio, setFio] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [card, setCard] = useState('')
  const [cardName, setCardName] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvv, setCvv] = useState('')

  let {setChoice} = useProfileContext()
  const language = useSelector(state => state.language)

  const currentUser = useSelector(state => state.user)
  const currentCart = useSelector(state => state.user.cart)
  let fioToServer = fio.value
  let addressToServer = address.value
  const history = useHistory()
  const total = currentCart
    .map(el => el.price * el.quantity)
    .reduce((acc, currentValue) => acc + currentValue, 0)
  async function confirmHandler(e) {
    e.preventDefault()
    await addOrderDetailsToServer({ fioToServer, addressToServer, email, phone, card, cardName, expMonth, expYear, cvv, currentCart, currentUser, total })
    dispatch(addOrderDetails({ fioToServer, addressToServer, email, phone, currentCart, total }))
    dispatch(emptyUserCart())
    setChoice(2)
    history.push('/profile')
  }
  return (
    <>
      <section className="section-content padding-y">
        {
          currentCart.length ? currentCart.map(good => {
            return (
              <section className="section-content padding-y" key={good._id}>
                <div className="container" style={{ maxWidth: 800 }}>
                  <tr key={good._id} className="m-4">
                    <td>
                      <figure className="itemside">
                        <div className="aside"><img src={good.photo} className="img-sm" alt="" /></div>
                        <figcaption className="info">
                          <Link style={{ width: 520 }} to={`/goods/${good?._id}`} className="title text-dark">{good.name}</Link>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <input type="number" style={{ width: 70 }} value={good.quantity} min="1" placeholder="0" className="form-control" readOnly={true} />
                    </td>
                    <td>
                      <div className="price-wrap ml-3">
                        <var style={{ width: 200 }} className="price">{(good.price * good.quantity).toFixed(2)} $</var>
                      </div>
                    </td>
                    <td className="text-right">
                    </td>
                  </tr>
                </div>
              </section>
            )
          })
            : <h5>{(language === 'Russian') ? 'Нет товаров' : 'No goods'}</h5>
        }
      </section>
      <h4 className="card-title mb-3">{(language === 'Russian') ? 'Итого:' : 'Total price:'} {total.toFixed(2)} $</h4>
      <section className="section-content padding-y">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-3">{(language === 'Russian') ? 'Информация о доставке' : 'Delivery info'}</h4>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label className="js-check box active">
                    <input type="radio" name="dostavka" value="option1" defaultChecked />
                    <h6 className="title">{(language === 'Russian') ? 'Обычная доставка' : 'Standart delivery'}</h6>
                    <p className="text-muted">{(language === 'Russian') ? 'Бесплатная  доставка в течении 20 дней' : 'Free by airline within 20 days'}</p>
                  </label>
                </div>
                <div className="form-group col-sm-6">
                  <label className="js-check box">
                    <input type="radio" name="dostavka" value="option1" />
                    <h6 className="title">{(language === 'Russian') ? 'Быстрая доставка' : 'Fast delivery'}</h6>
                    <p className="text-muted">{(language === 'Russian') ? 'Доставка в течении 5 дней. Дополнительно взимается 20$' : 'Extra 20$ will be charged'}</p>
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <label>{(language === 'Russian') ? 'Полное имя' : 'Full name'}</label>
                  <FioSuggestions token="5380c3726e32d6ce9d7fba825b4570fea6395f1b" value={fio} onChange={setFio} />
                </div>
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <label>Email</label>
                  <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="" />
                </div>
                <div className="col form-group">
                  <label>{(language === 'Russian') ? 'Телефон' : 'Phone'}</label>
                  <input type="text" onChange={e => setPhone(e.target.value)} className="form-control" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <label>{(language === 'Russian') ? 'Адрес' : 'Address'}</label>
                <AddressSuggestions token="5380c3726e32d6ce9d7fba825b4570fea6395f1b" value={address} onChange={setAddress} />
              </div>
            </div>
          </div>
          {/* payment start */}
          <div className="card">
            <h4 className="card-title mt-4">{(language === 'Russian') ? 'Оплата' : 'Payment'}</h4>
            <div className="card-body d-flex justify-content-center">
              <form onSubmit={(e) => confirmHandler(e)}>
                <div className="form-group">
                  <label htmlFor="username">{(language === 'Russian') ? 'Имя на карте' : 'Name on card'}</label>
                  <input onChange={e => setCardName(e.target.value)} type="text" className="form-control" name="username" placeholder="Ex. John Smith" required="" />
                </div>
                <div className="form-group card required border-0">
                  <label htmlFor="cardNumber">{(language === 'Russian') ? 'Номер карты' : 'Card number'}</label>
                  <div className="input-group">
                    <input type="text" onChange={e => setCard(e.target.value)} className="form-control" name="cardNumber" placeholder=""/>
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fab fa-cc-visa"></i> &nbsp; <i className="fab fa-cc-amex"></i> &nbsp;
                        <i className="fab fa-cc-mastercard"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md flex-grow-0">
                    <div className="form-group">
                      <label className="hidden-xs">{(language === 'Russian') ? 'Срок действия' : 'Expiration'}</label>
                      <div className="form-inline" style={{ minWidth: 220 }}>
                        <select className="form-control" onChange={e => setExpMonth(e.target.value)} style={{ width: 100 }}>
                          <option value="1">01 - Janiary</option>
                          <option value="2">02 - February</option>
                          <option value="3">03 - February</option>
                          <option value="4">04 - March</option>
                          <option value="5">05 - April</option>
                          <option value="6">06 - May</option>
                          <option value="7">07 - June</option>
                          <option value="8">08 - July</option>
                          <option value="9">09 - August</option>
                          <option value="10">10 - September</option>
                          <option value="11">11 - October</option>
                          <option value="12">12 - November</option>
                        </select>
                        <span style={{ width: 20, textAlign: 'center' }}> / </span>
                        <select className="form-control" onChange={e => setExpYear(e.target.value)} style={{ width: 100 }}>
                          <option value="21">2021</option>
                          <option value="22">2022</option>
                          <option value="23">2023</option>
                          <option value="24">2024</option>
                          <option value="25">2025</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label data-toggle="tooltip" title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
                      <input onChange={e => setCvv(e.target.value)} className="form-control" required="" type="text" />
                    </div>
                  </div>
                </div>
                <button className="subscribe btn btn-primary btn-block">
                  {(language === 'Russian') ? 'Подтвердить' : 'Confirm'}
                </button>
                {checkout ? (
                  <div className="mt-3">
                  <Paypal total={total} />
                  </div>
                ) : (
                  <button className="subscribe btn btn-primary btn-block"
                    onClick={() => {
                      setCheckOut(true);
                    }}
                  >
                    Paypal
                  </button>
                )}
              </form>
            </div>
            {/* payment end */}
            <br /><br />
          </div>
        </div>
      </section>
    </>
  )
}
export default React.memo(Order)
