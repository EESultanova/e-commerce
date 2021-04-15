import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useProfileContext } from "../../contexts/ProfileContext"
import { filterGoodsSaga } from "../../redux/actionCreators/goodAC"

const Category = ({category}) => {

  const { language } = useProfileContext()

  return (
    
      <div className="col-md-3">
        <Link to={`/categories/${category._id}`} >
        <div className="card card-category">
          <div className="">
            <img src={category.photo} alt="something" style={{width: "20.5rem", height: "20.5rem"}}/>
          </div>
          <div className="card-body">
            <h4 className="card-title">{(language === 'English') ? category.name : category.nameRu}</h4>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default Category
