import React, { useEffect, useState } from 'react'
import { AddressSuggestions } from 'react-dadata'
import { FioSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useProfileContext } from '../../contexts/ProfileContext';
import { emptyCart } from '../../redux/actionCreators/cartAC';
import { changeGoodsQuantityOnServer } from '../../redux/actionCreators/goodAC';
import { addOrderDetails, addOrderDetailsToServer, getAllOrders } from '../../redux/actionCreators/userAC';
import Paypal from '../PayPal/PayPal';
function Order() {
  const dispatch = useDispatch()
  const [checkout, setCheckOut] = useState(false);
  const [address, setAddress] = useState('')
  const [fio, setFio] = useState('')
  const [fiof, setFiof] = useState('')
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
    dispatch(emptyCart())
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
                          <a style={{ maxWidth: 500 }} href="/" className="title text-dark">{good.name}</a>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <input type="number" style={{ width: 70 }} value={good.quantity} min="1" placeholder="0" className="form-control" readOnly={true} />
                    </td>
                    <td>
                      <div className="price-wrap">
                        <var style={{ width: 200 }} className="price mx-5">{(good.price * good.quantity).toFixed(2)} $</var>
                        <small className="text-muted"> {good.price}each</small>
                      </div>
                    </td>
                    <td className="text-right">
                    </td>
                  </tr>
                </div>
              </section>
            )
          })
            : <h5>No goods</h5>
        }
      </section>
      <h4 className="card-title mb-3">Total price: {total.toFixed(2)} $</h4>
      <section className="section-content padding-y">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-3">Delivery info</h4>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label className="js-check box active">
                    <input type="radio" name="dostavka" value="option1" defaultChecked />
                    <h6 className="title">Standart delivery</h6>
                    <p className="text-muted">Free by airline within 20 days</p>
                  </label>
                </div>
                <div className="form-group col-sm-6">
                  <label className="js-check box">
                    <input type="radio" name="dostavka" value="option1" />
                    <h6 className="title">Fast delivery</h6>
                    <p className="text-muted">Extra 20$ will be charged </p>
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <label>Full name</label>
                  <FioSuggestions token="5380c3726e32d6ce9d7fba825b4570fea6395f1b" value={fio} onChange={setFio} />
                </div>
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <label>Email</label>
                  <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="" />
                </div>
                <div className="col form-group">
                  <label>Phone</label>
                  <input type="text" onChange={e => setPhone(e.target.value)} className="form-control" placeholder="" />
                </div>
              </div>
              <div className="form-group">
                <label>Adress</label>
                <AddressSuggestions token="5380c3726e32d6ce9d7fba825b4570fea6395f1b" value={address} onChange={setAddress} />
              </div>
            </div>
          </div>
          {/* payment start */}
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Payment</h4>
              <form style={{ maxWidth: 380 }} onSubmit={(e) => confirmHandler(e)}>
                <div className="form-group">
                  <label htmlFor="username">Name on card</label>
                  <input onChange={e => setCardName(e.target.value)} type="text" className="form-control" name="username" placeholder="Ex. John Smith" required="" />
                </div>
                <div className="form-group card required">
                  <label htmlFor="cardNumber">Card number</label>
                  <div className="input-group">
                    <input type="text" onChange={e => setCard(e.target.value)} className="form-control" name="cardNumber" placeholder="" maxLength="16" />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fab fa-cc-visa"></i> &nbsp; <i className="fab fa-cc-amex"></i> &nbsp;
            <i className="fab fa-cc-mastercard"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md flex-grow-0">
                    <div className="form-group">
                      <label className="hidden-xs">Expiration</label>
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
                  Confirm
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
