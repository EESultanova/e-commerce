import { Link } from "react-router-dom"

const Good = ({ good }) => {

  return (
    <div className="col-md-3 mx-4" data-price={good.price} data-rate={good.rating}>
      <Link to={`/goods/${good._id}`}>
        <figure className="card card-product-grid">
          <div className="img-wrap">
            <span className="badge badge-danger"> NEW </span>
            <img src={good.photo[0]} className="mt-2" alt="" />
          </div>
          <figcaption className="info-wrap">
            <p className="title mb-2">{good.name}</p>
            <div className="price-wrap">
              <span className="price">{good.price}$</span>
              <small className="text-muted">/per item</small>
            </div>

            <label className="custom-control mb-3 mt-2 custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <div className="custom-control-label mr-4">Add to compare
                </div>
            </label>
          </figcaption>
        </figure>
      </Link>
    </div>

  )
}

export default Good
