import { Link, useParams } from "react-router-dom";
import { useProfileContext } from "../../contexts/ProfileContext";

const Good = ({ good }) => {

  let {id} = useParams();
  const { language } = useProfileContext()

  return (
    <div className="col-md-3 mx-4 good" data-price={good.price} data-rate={good.rating}>
      <Link to={`/goods/${good._id}`}>
        <figure className="card card-product-grid">
          <div className="img-wrap mt-2">
            <span className="badge badge-danger"> NEW </span>
            <img src={good.photo[0]} className="mt-2" alt="" />
          </div>
          <figcaption className="mx-4 my-3">
            <p className="title mb-2">{good.name}</p>
            <div className="price-wrap">
              <span className="price">{good.price} $</span>
              <small className="text-muted">{(language === 'Russian') ? '/ единица товара' : '/ per item'}</small>
            </div>
          </figcaption>
        </figure>
      </Link>
    </div>

  )
}

export default Good
