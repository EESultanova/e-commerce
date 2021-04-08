import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getGoodDetailsFromServer, getGoodsFromServer } from "../../redux/actionCreators/goodAC"

const GoodDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoodDetailsFromServer(id))
  }, [])

  const good = useSelector(state => state.goods.good)

  return (
    <div>
      <img src={good.photo} alt="good"/>
      <h4>{good.name}</h4>
      <p>{good.description}</p>
      <p>{good.price}$</p>
      <button>Add to cart</button>
    </div>  
  )
}

export default GoodDetails
