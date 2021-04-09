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
    <div class="row">
          <aside class="col-md-6">
      <div class="card">
      <article class="gallery-wrap"> 
        <div class="img-big-wrap">
          <div> <a href="/"><img src={good.photo} alt="" /></a></div>
        </div>
        <div class="thumbs-wrap">
          <a href="/" class="item-thumb"> <img src={good.photo} alt="" /></a>
          <a href="/" class="item-thumb"> <img src={good.photo} alt="" /></a>
          <a href="/" class="item-thumb"> <img src={good.photo} alt="" /></a>
          <a href="/" class="item-thumb"> <img src={good.photo} alt="" /></a>
        </div>
      </article>
      </div>
          </aside>
          <main class="col-md-6">
      <article class="product-info-aside">

      <h2 class="title mt-3">{good.name}</h2>

      <div class="rating-wrap my-3">
        <ul class="rating-stars">
          <li style={{width: 80}} class="stars-active"> 
            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
            <i class="fa fa-star"></i> 
          </li>
          <li>
            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
            <i class="fa fa-star"></i> 
          </li>
        </ul>
        <small class="label-rating text-muted">132 reviews</small>
        <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders </small>
      </div>

      <div class="mb-3"> 
        <var class="price h4">{good.price}$</var> 
        &nbsp;
        <span class="text-muted">USD 562.65 incl. VAT</span> 
      </div>

      <p>{good.description}</p>


      <dl class="row">
        <dt class="col-sm-3">Manufacturer</dt>
        <dd class="col-sm-9"><a href="/">Great textile Ltd.</a></dd>

        <dt class="col-sm-3">Article number</dt>
        <dd class="col-sm-9">596 065</dd>

        <dt class="col-sm-3">Guarantee</dt>
        <dd class="col-sm-9">2 year</dd>

        <dt class="col-sm-3">Delivery time</dt>
        <dd class="col-sm-9">3-4 days</dd>

        <dt class="col-sm-3">Availabilty</dt>
        <dd class="col-sm-9">in Stock</dd>
      </dl>

        <div class="form-row  mt-4">
          <div class="form-group col-md flex-grow-1">
            <div class="input-group mb-3 input-spinner">
              <div class="input-group-prepend">
                <button class="btn btn-light" type="button" id="button-plus"> &#43;</button>
              </div>
              <input type="text" class="form-control" value="1" />
              <div class="input-group-append">
                <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
              </div>
            </div>
          </div>
          <div class="form-group col-md">
            <a href={`/add/${good._id}`} class="btn  btn-primary"> 
              <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span> 
            </a>
            &nbsp;&nbsp;
            <a href="/" class="btn btn-light">
              <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span> 
            </a>
          </div>
        </div>

      </article>
		</main>
	</div>
    
  )
}

export default GoodDetails
