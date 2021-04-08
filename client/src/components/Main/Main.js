import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategoriesFromServer } from "../../redux/actionCreators/categoryAC"
import Category from "../Category/Category";

const Main = () => {

  const dispatch = useDispatch()

  const categories = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategoriesFromServer)
  }, [])

  console.log(categories)

  return ( 
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
