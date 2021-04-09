import { useDispatch, useSelector } from "react-redux";
import { deleteGoodFromCart } from "../../redux/actionCreators/cartAC";

const Cart = () => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  
  console.log('CART ===>', cart)

  return ( 
    <section className="section-content padding-y">
      <div className="container">

      <div className="row">
        <main className="col-md-9">
      <div className="card">

      <table className="table table-borderless table-shopping-cart">
      <thead className="text-muted">
      <tr className="small text-uppercase">
        <th scope="col">Product</th>
        <th scope="col" width="120">Quantity</th>
        <th scope="col" width="120">Price</th>
        <th scope="col" className="text-right" width="200"> </th>
      </tr>
      </thead>
      <tbody>
        {/*  */}
      {cart.length ? cart.map(good => {
        return (
          <tr key={good._id}>
            <td>
              <figure className="itemside">
                <div className="aside"><img src={good.photo} className="img-sm" alt=""/></div>
                <figcaption className="info">
                  <a href="/" className="title text-dark">{good.name}</a>
                  <p className="text-muted small">{good.description}</p>
                </figcaption>
              </figure>
            </td>
            <td> 
              <select className="form-control">
                <option>1</option>
                <option>2</option>	
                <option>3</option>	
                <option>4</option>	
              </select> 
            </td>
            <td> 
              <div className="price-wrap"> 
                <var className="price">$1156.00</var> 
                <small className="text-muted"> {good.price} each </small> 
              </div>
            </td>
            <td className="text-right"> 
            <button onClick={() => dispatch(deleteGoodFromCart(good._id))} className="btn btn-light"> Remove</button>
            </td>
          </tr>
          )
        })
        : <h5>No goods</h5>
      }
      {/*  */}
      </tbody>
      </table>

      <div className="card-body border-top">
        <a href="/" className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right"></i> </a>
        <a href="/" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </a>
      </div>	
      </div>

      <div className="alert alert-success mt-3">
        <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
      </div>

        </main>
        <aside className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
            <form>
              <div className="form-group">
                <label>Have coupon?</label>
                <div className="input-group">
                  <input type="text" className="form-control" name="" placeholder="Coupon code" />
                  <span className="input-group-append"> 
                    <button className="btn btn-primary">Apply</button>
                  </span>
                </div>
              </div>
            </form>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right">USD 568</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-right">USD 658</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right  h5"><strong>$1,650</strong></dd>
                </dl>
                <hr/>
                <p className="text-center mb-3">
                  <img src="images/misc/payments.png" height="26" alt="" />
                </p>
                
            </div> 
          </div>
        </aside>
      </div>

      </div>
</section>
   )
}
 
export default Cart;
