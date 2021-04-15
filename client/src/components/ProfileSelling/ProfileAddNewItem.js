import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSellerGoods, sellerAddGood, sellerAddGoodToServer } from "../../redux/actionCreators/userAC"
import { store } from 'react-notifications-component';
import 'animate.css'
import 'react-notifications-component/dist/theme.css'

function ProfileAddNewItem() {
  const categories = useSelector(state => state.categories)
  const user = useSelector(state => state.user.id)

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('607045d7fa8ce327ed1edb2f')
  const [photo, setPhoto] = useState('')
  const language = useSelector(state => state.language)

  const dispatch = useDispatch()

  function confirmHandler() {

    dispatch(sellerAddGood({ name, quantity, price, description, category, photo, rating: "0" }))
    sellerAddGoodToServer({ name, quantity, price, description, category, photo, rating: "0", user })
    dispatch(getSellerGoods(user))

    store.addNotification({
      content: NotifyAdd,
      message: `${name} was added succsessfully!`,
      type: 'default',
      container: 'bottom-left',
      insert: 'bottom',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 4000,
      },
      width: 500,

    })
  }

  function NotifyAdd() {
    return (
      <div className="bg-primary text-white rounded" style={{ width: 500 }}>
        <h6>Item was added succsessfully!</h6>
      </div>
    )
  }
  return (
    <div className="card mb-4">
      <h4 className="card-title my-4">{language === 'Russian' ? 'Пожалуйста, заполните форму заказа': 'Please fill out the item form'}</h4>
      <div className="card-body d-flex justify-content-center">
        <form>

          <div className="form-row">
            <div className="form-group">
              <label>{language === 'Russian' ? 'Название': 'Name'}</label>
              <input type="text" onChange={e => setName(e.target.value)} className="form-control" placeholder="Drill" maxLength="125" />
            </div>
            &nbsp;
            <div className="form-group">
              <label>{language === 'Russian' ? 'Количество': 'Quantity'}</label>
              <input type="number" onChange={e => setQuantity(e.target.value)} className="form-control" placeholder="0" />
            </div>
          </div>

          <div className="form-row d-flex justify-content-center">
            <div className="form-group">
              <label>{language === 'Russian' ? 'Категория': 'Category'}</label>
              <select id="inputState" className="form-control" onChange={e => setCategory(e.target.value)}>
                {categories.map(el => <option key={el._id} value={el._id}>{el.name}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group col-md-13">
            <label>{language === 'Russian' ? 'Описание': 'Description'}</label>
            <textarea className="form-control" onChange={e => setDescription(e.target.value)} rows="3"></textarea>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>{language === 'Russian' ? 'Цена': 'Price'}</label>
              <input type="number" onChange={e => setPrice(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>{language === 'Russian' ? 'Ссылка на фото': 'Image link'}</label>
              <input type="text" onChange={e => setPhoto(e.target.value)} className="form-control" />
            </div>
          </div>


          <button onClick={confirmHandler} className="btn btn-primary btn-block">{language === 'Russian' ? 'Добавить': 'Add'}</button>
        </form>
      </div>
    </div>
  )
}

export default React.memo(ProfileAddNewItem)

