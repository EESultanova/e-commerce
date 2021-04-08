import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getGoods, getGoodsFromServer } from "../../redux/actionCreators/goodAC"
import Good from "../Good/Good.jsx"

const ListGoods = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoodsFromServer(id))
  }, [])

  const goods = useSelector(state => state.goods)
  console.log(goods)

  return (
    <>
      <h5>List</h5>
      {
        goods.length ? goods.map(good => {
          return (
            <Good good={good}/>
          )
        })
        : 'No goods'
      }
    </>
  )
}

export default ListGoods
