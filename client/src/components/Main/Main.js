import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesFromServer } from "../../redux/actionCreators/categoryAC"
import { getAllOrders, getSellerGoods } from "../../redux/actionCreators/userAC";
import Category from "../Category/Category";
import Loader from "../Loader/Loader";

const Main = () => {

  const dispatch = useDispatch()

  const categories = useSelector(state => state.categories)
  const user = useSelector(state => state.user)
  const userId = useSelector(state => state.user.id)
  const [loader, setLoader] = useState(false)

  const showLoader = () => {
    setLoader(true)
  }

  const hideLoader = () => {
    setLoader(false)
  }
  
  useEffect(() => {
    dispatch(getCategoriesFromServer())
    dispatch(getAllOrders(user.id))
    if (user.role === 'seller') dispatch(getSellerGoods(user.id))

  }, [])

  return (
    loader ? <Loader />
      :
      <section className="section-content padding-y">
        <div className="container">

          <nav className="row">
            {
              categories?.length ? categories.map(category => {
                
                return (
                  <Category key={category._id} category={category}/>
                )
              })
              : "No categories"
            }
          </nav>
        </div>
      </section>
   );
}
 
export default Main;
