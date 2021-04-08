import { Link } from "react-router-dom"

const Category = ({category}) => {
  
  return (
    
      <div class="col-md-3">
        <Link to={`/categories/${category._id}`} >
        <div class="card card-category">
          <div class="img-wrap">
            <img src={category.photo} alt="something" />
          </div>
          <div class="card-body">
            <h4 class="card-title"><a href="/">{category.name}</a></h4>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default Category
