import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sellerAddGood, sellerAddGoodToServer } from "../../redux/actionCreators/goodAC"


 function ProfileAddNewItem() {
  const categories = useSelector(state => state.categories)

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [photo, setPhoto] = useState('')

  const dispatch = useDispatch()
console.log('jndsckjsdnvksdnvlsdnv')
  function confirmHandler() {
    dispatch(sellerAddGood({name, quantity, price, description, category, photo, rating: "0"}))
    sellerAddGoodToServer({name, quantity, price, description, category, photo, rating: "0"})
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
      <h4 className="card-title mb-4">Please fill out the item form</h4>
     <form>

        <div className="form-row">
			<div className="col form-group">
				<label>Name</label>
			  	<input type="text" onChange={e => setName(e.target.value)} className="form-control" placeholder="Drill"/>
			</div> 
			<div className="col form-group">
				<label>Quantity</label>
			  	<input type="number" onChange={e => setQuantity(e.target.value)} className="form-control" placeholder="0"/>
			</div> 
		</div> 
		
		<div className="form-row">
			<div className="form-group col-md-6">
			  <label>Category</label>
			  <select id="inputState" className="form-control" onChange={e => setCategory(e.target.value)}>
        {categories.map(el => <option key={el._id} value={el._id}>{el.name}</option>)}
			  </select>
			</div> 
		</div>
      <div class="form-group col-md-13">
      <label>Description</label>
			<textarea class="form-control" onChange={e => setDescription(e.target.value)} rows="3"></textarea>
		</div>

		<div className="form-row">
      <div className="form-group col-md-6">
          <label>Price</label>
          <input type="number" onChange={e => setPrice(e.target.value)} className="form-control" />
        </div> 
			<div className="form-group col-md-6">
			  <label>Image link</label>
			  <input type="text" onChange={e => setPhoto(e.target.value)} className="form-control" />
			</div> 
		</div> 
    

		<button onClick={confirmHandler} className="btn btn-primary btn-block">Send</button>
    </form>
      </div> 
    </div> 
    
  )
}

export default React.memo(ProfileAddNewItem)

