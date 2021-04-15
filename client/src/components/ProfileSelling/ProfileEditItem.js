import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sellerAddGood, sellerAddGoodToServer, sellerEditGood, sellerEditGoodToServer } from "../../redux/actionCreators/userAC"
import { store } from 'react-notifications-component';
import 'animate.css'
import 'react-notifications-component/dist/theme.css'
import { useHistory, useParams } from "react-router";

function ProfileEditItem() {

    const { id } = useParams()

    // console.log(id, 'id -----------')

    const categories = useSelector(state => state.categories)
    const user = useSelector(state => state.user.id)

    const good = useSelector(state => state.user.goods[0].filter(elem => elem._id == id))
    // console.log('good =====', good)

    const [name, setName] = useState(good[0].name)
    
    const [quantity, setQuantity] = useState(good[0].quantity)
    const [price, setPrice] = useState(good[0].price)
    const [description, setDescription] = useState(good[0].description)
    const [category, setCategory] = useState(good[0].category)
    const [photo, setPhoto] = useState(good[0].photo)

    const dispatch = useDispatch()

    const history = useHistory();

    function confirmHandler(e) {
        e.preventDefault()
        dispatch(sellerEditGood({ id, name, quantity, price, description, category, photo, rating: "0" }))
        sellerEditGoodToServer({ id, name, quantity, price, description, category, photo, rating: "0", user })

        store.addNotification({
            content: NotifyAdd,
            message: `Item was updated succsessfully!`,
            type: 'default',
            container: 'bottom-left',
            insert: 'bottom',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
                duration: 4000,
            },
            width: 300,

        })
        history.push('/profile');

    }

    function NotifyAdd() {
        return (
            <div className="bg-primary text-white rounded" style={{ width: 500 }}>
                <h6>Item was updated succsessfully!</h6>
            </div>
        )
    }

    console.log(good[0].name)
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title mb-4">Please fill out the item form</h4>
                <form>

                    <div className="form-row">
                        <div className="col form-group">
                            <label>Name</label>
                            <input type="text" onChange={e => setName(e.target.value)} value={name} className="form-control" maxLength="125" />
                        </div>
                        <div className="col form-group">
                            <label>Quantity</label>
                            <input type="number" onChange={e => setQuantity(e.target.value)} value={quantity} className="form-control" placeholder="0" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Category</label>
                            <select id="inputState" value={category} className="form-control" onChange={e => setCategory(e.target.value)}>
                                {categories.map(el => <option key={el._id} value={el._id}>{el.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-md-13">
                        <label>Description</label>
                        <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} rows="3"></textarea>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Price</label>
                            <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Image link</label>
                            <input type="text" value={photo} onChange={e => setPhoto(e.target.value)} className="form-control" />
                        </div>
                    </div>


                    <button onClick={confirmHandler} className="btn btn-primary btn-block">Send</button>
                </form>
            </div>
        </div>

    )
}

export default React.memo(ProfileEditItem)

