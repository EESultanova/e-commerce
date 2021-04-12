import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesFromServer } from "../../redux/actionCreators/categoryAC"
import Category from "../Category/Category";
import Loader from "../Loader/Loader";

const Main = () => {

  const dispatch = useDispatch()

  const categories = useSelector(state => state.categories)

  const [loader, setLoader] = useState(false)

  const showLoader = () => {
    setLoader(true)
  }

  const hideLoader = () => {
    setLoader(false)
  }
  
  useEffect(() => {
    dispatch(getCategoriesFromServer())
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
