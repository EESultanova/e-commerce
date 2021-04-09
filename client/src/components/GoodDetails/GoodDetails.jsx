import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getGoodDetailsFromServer, getGoodsFromServer } from "../../redux/actionCreators/goodAC"

const GoodDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoodDetailsFromServer(id))
  }, [])

  const good = useSelector(state => state.goods.good)

  return (
    <div className="row">
          <aside className="col-md-6">
      <div className="card">
      <article className="gallery-wrap"> 
        <div className="img-big-wrap">
          <div> <a href="/"><img src={good.photo} alt="" /></a></div>
        </div>
        {/* <div className="thumbs-wrap">
          <a href="/" className="item-thumb"> <img src={good.photo[1]} alt="" /></a>
          <a href="/" className="item-thumb"> <img src={good.photo[2]} alt="" /></a>
          <a href="/" className="item-thumb"> <img src={good.photo[3]} alt="" /></a> */}
          {/* <a href="/" className="item-thumb"> <img src={good.photo[4]} alt="" /></a> */}
        {/* </div> */}
      </article>
      </div>
          </aside>
          <main className="col-md-6">
      <article className="product-info-aside">

      <h2 className="title mt-3">{good.name}</h2>

      <div className="rating-wrap my-3">
        <ul className="rating-stars">
          <li style={{width: 80}} className="stars-active"> 
            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
            <i className="fa fa-star"></i> 
          </li>
          <li>
            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
            <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
            <i className="fa fa-star"></i> 
          </li>
        </ul>
        <small className="label-rating text-muted">132 reviews</small>
        <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
      </div>

      <div className="mb-3"> 
        <var className="price h4">{good.price}$</var> 
        &nbsp;
        <span className="text-muted">USD 562.65 incl. VAT</span> 
      </div>

      <p>{good.description}</p>


      <dl className="row">
        <dt className="col-sm-3">Manufacturer</dt>
        <dd className="col-sm-9"><a href="/">Great textile Ltd.</a></dd>

        <dt className="col-sm-3">Article number</dt>
        <dd className="col-sm-9">596 065</dd>

        <dt className="col-sm-3">Guarantee</dt>
        <dd className="col-sm-9">2 year</dd>

        <dt className="col-sm-3">Delivery time</dt>
        <dd className="col-sm-9">3-4 days</dd>

        <dt className="col-sm-3">Availabilty</dt>
        <dd className="col-sm-9">in Stock</dd>
      </dl>

        <div className="form-row  mt-4">
          <div className="form-group col-md flex-grow-1">
            <div className="input-group mb-3 input-spinner">
              <div className="input-group-prepend">
                <button className="btn btn-light" type="button" id="button-plus"> &#43;</button>
              </div>
              <input type="text" className="form-control" value="1" />
              <div className="input-group-append">
                <button className="btn btn-light" type="button" id="button-minus"> &minus; </button>
              </div>
            </div>
          </div>
          <div className="form-group col-md">
            <a href={`/add/${good._id}`} className="btn  btn-primary"> 
              <i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span> 
            </a>
            &nbsp;&nbsp;
            <a href="/" className="btn btn-light">
              <i className="fas fa-envelope"></i> <span className="text">Contact supplier</span> 
            </a>
          </div>
        </div>

      </article>
		</main>
	</div>
    
  )
}

export default GoodDetails
