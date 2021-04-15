import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Category = ({category}) => {

  const language = useSelector(state => state.language)

  return (
    
      <div className="col-md-3">
        <Link to={`/categories/${category._id}`} >
        <div className="card card-category">
          <div className="">
            <img src={category.photo} alt="something" style={{width: "20.5rem", height: "20.5rem"}}/>
          </div>
          <div className="card-body">
            <h4 className="card-title">{(language === 'Russian') ? category.nameRu : category.name }</h4>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default Category
