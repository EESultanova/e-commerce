import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useProfileContext } from "../../contexts/ProfileContext";

const Good = ({ good }) => {

  let {id} = useParams();
  const language = useSelector(state => state.language)

  return (
    <div className="col-md-3 mx-4 good" data-price={good.price} data-rate={good.rating}>
      <Link to={`/goods/${good._id}`}>
        <figure className="card card-product-grid">
          <div className="img-wrap mt-2">
            <span className="badge badge-danger"> NEW </span>
            <img className="mt-2" src={good.photo[0]} alt="" />
          </div>
          <figcaption className="mx-4 my-3" style={{ height: '9rem'}}>
            <p className="title mb-2">{good.name}</p>
            <div className="price-wrap">
              <span className="price">{good.price} $</span>
              <small className="text-muted">{(language === 'Russian') ? '/ единица товара' : '/ per item'}</small>
            </div>

            <div className="price-wrap">
              <span className="mt-2">{(language === 'Russian') ? `Рейтинг: ${+good.rating}  / 10` : `Rating: ${+good.rating}  / 10`}</span>

            </div>

            {/* <label className="custom-control mb-3 mt-2 custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label mr-4">Add to compare
                </div>
            </label> */}
          </figcaption>
        </figure>
      </Link>
    </div>

  )
}

export default Good
