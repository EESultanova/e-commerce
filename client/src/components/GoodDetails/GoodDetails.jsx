import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { addGoodToCart, deleteGoodFromCart } from "../../redux/actionCreators/cartAC"
import { getGoodDetailsFromServer } from "../../redux/actionCreators/goodAC"

const GoodDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoodDetailsFromServer(id))
  }, [])

  const good = useSelector(state => state.goods.good)
  const cart = useSelector(state => state.cart)
  const ids = cart.map(good => good._id)
  const inCart = ids.includes(good._id)
  console.log(inCart)


  cart.find(x => x._id === good._id)
  console.log(cart.find(x => x._id === good._id))

  return (
    <div className="row">
          <aside className="col-md-6">
      <div className="card">
      <article className="gallery-wrap">
        {good.photo &&
          <>
            <div className="img-big-wrap mt-5">
              <div> <a href="/"><img src={good.photo} alt="" /></a></div>
            </div>
            <div className="thumbs-wrap">
              {good.photo.length ? good.photo.map((photo, indx) => {
                return (
                  <a key={indx} href="/" className="item-thumb"> <img src={photo} alt="" /></a>
                )
              })
              : ''
              }
            </div>
          </>
        }
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
        <var className="price h4">{good.price} $</var> 
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

        <div className="form-row  mt-5">
          <div className="form-group col-md">
            {(inCart === true) ?
              <button onClick={() => dispatch(deleteGoodFromCart(good._id))} type="button" class="btn btn-secondary">Remove from cart</button>
              :   
              <button onClick={() => dispatch(addGoodToCart(good))} className="btn  btn-primary">
              <i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span>
            </button>
            }
          </div>
        </div>

      </article>
		</main>
	</div>
    
  )
}

export default GoodDetails
