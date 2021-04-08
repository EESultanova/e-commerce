import { Link } from "react-router-dom"

const Category = ({category}) => {
  
  return (
    
      <div className="col-md-3">
        <Link to={`/categories/${category._id}`} >
        <div className="card card-category">
          <div className="img-wrap">
            <img src={category.photo} alt="something" />
          </div>
          <div className="card-body">
            <h4 className="card-title">{category.name}</h4>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default Category
