import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actionCreators/categoryAC"
import Category from "../Category/Category";

const Main = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/')
      .then(response => response.json())
      .then(categoriesFromServer => dispatch(getCategories(categoriesFromServer)))
  }, [])

  const categories = useSelector(state => state.categories)

  return ( 
    <section class="section-content padding-y">
      <div class="container">

        <nav class="row">
          {
            categories?.length ? categories.map(category => {
              
              return (
                <Category category={category}/>
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
