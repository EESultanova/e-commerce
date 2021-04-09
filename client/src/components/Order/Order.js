import React, { useState } from 'react'
import { AddressSuggestions } from 'react-dadata'
import { FioSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css'
import { useDispatch, useSelector } from 'react-redux';
import { addOrderDetails, addOrderDetailsToServer } from '../../redux/actionCreators/userAC';
const {REACT_APP_DADATA} = process.env

function Order() {
  const dispatch = useDispatch()
  const [address, setAddress] = useState('')
  const [fio, setFio] = useState('')
  const [fioForBack, setFioForBack] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [card, setCard] = useState('')
  const [cardName, setCardName] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvv, setCvv] = useState('')

  const currentUser = useSelector(state => state.user)
  const currentCart = useSelector(state => state.cart)

  const fioToServer = fio.value
  const addressToServer = address.value
  
  function confirmHandler() {
    //добавить обнуление cart state
    //у продавца должны пропасть соответствующие товары из cart
    
    dispatch(addOrderDetails({fioToServer, addressToServer, email, phone, currentCart}))
    addOrderDetailsToServer({fioToServer, addressToServer, email, phone, card, cardName, expMonth, expYear, cvv, currentCart, currentUser})
  }
 
  return(
    <>
  <section className="section-content padding-y">
<div className="container" style={{maxWidth:720}}>

<div className="card mb-4">
      <div className="card-body">
      <h4 className="card-title mb-3">Delivery info</h4>

	  <div className="form-row">
			<div className="form-group col-sm-6">
				<label className="js-check box active">
					<input type="radio" name="dostavka" value="option1" defaultChecked/>
					<h6 className="title">Standart delivery</h6>
					<p className="text-muted">Free by airline within 20 days</p>
				</label> 
			</div>
			<div className="form-group col-sm-6">
				<label className="js-check box">
					<input type="radio" name="dostavka" value="option1"/>
					<h6 className="title">Fast delivery</h6>
					<p className="text-muted">Extra 20$ will be charged </p>
				</label> 
			</div>
		</div> 

	<div className="form-row">
		<div className="col form-group">
			<label>Full name</label>
        <FioSuggestions token="5380c3726e32d6ce9d7fba825b4570fea6395f1b" value={fio} onChange={setFio} filterParts={[]} />
		</div> 
	</div> 

	<div className="form-row">
		<div className="col form-group">
			<label>Email</label>
		  	<input  onChange={e => setEmail(e.target.value)}  type="email" className="form-control" placeholder="" />
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

		<div className="card mb-4">
      <div className="card-body">
      <h4 className="card-title mb-4">Payment</h4>
      <form role="form" style={{maxWidth:380}}>
			<div className="form-group">
			<label htmlFor="username">Name on card</label>
			<input  onChange={e => setCardName(e.target.value)} type="text" className="form-control" name="username" placeholder="Ex. John Smith" required=""/>
			</div> 

			<div className="form-group card required">
			<label htmlFor="cardNumber">Card number</label>
			<div className="input-group">
				<input type="text"  onChange={e => setCard(e.target.value)}  className="form-control" name="cardNumber" placeholder="" />
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
						<div className="form-inline" style={{minWidth:220}}>
							<select className="form-control" onChange={e => setExpMonth(e.target.value)} style={{width:100}}>
								<option>01 - Janiary</option>
								<option>02 - February</option>
								<option>03 - February</option>
                <option>04 - March</option>
								<option>05 - April</option>
								<option>06 - May</option>
                <option>07 - June</option>
								<option>08 - July</option>
								<option>09 - August</option>
                <option>10 - September</option>
								<option>11 - October</option>
								<option>12 - November</option>
							</select>
							<span style={{width:20, textAlign:'center'}}> / </span>
							<select className="form-control" onChange={e => setExpYear(e.target.value)}style={{width:100}}>
								<option>2021</option>
								<option>2022</option>
								<option>2023</option>
								<option>2024</option>
								<option>2025</option>
							</select>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="form-group">
						<label data-toggle="tooltip" title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
						<input onChange={e => setCvv(e.target.value)} className="form-control" required="" type="text"/>
					</div> 
				</div>
			</div>
			<button onClick={confirmHandler} className="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
		</form>
      </div> 


<br/><br/> 

  </div> 
  </div>
  </section>
  </>
  )
}

export default React.memo(Order)
