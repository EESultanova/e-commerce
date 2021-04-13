import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProfileContext } from "../../contexts/ProfileContext";
import { getAllOrders } from "../../redux/actionCreators/userAC";

const ProfileOrders = () => {

  const orders = useSelector(state => state.user?.orders[0])
  const user = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  console.log(orders);
  let {setChoice} = useProfileContext() 

  useEffect(() => {
    dispatch(getAllOrders(user))
  }, [setChoice])

  return ( 
    <>
    {orders.map(order => {
      return (
        <article key={order._id} className="card mb-4">
		<header className="card-header">
			<a href="/" className="float-right"> <i className="fa fa-print"></i> Print</a>
			<strong className="d-inline-block mr-3">Order ID: {order._id}</strong>
			<span>Order Date: 16 March 2021</span>
		</header>
		<div className="card-body">
			<div className="row"> 
				<div className="col-md-8">
					<h6 className="text-muted">Delivery to</h6>
					<p>{order.fio} <br/>  
					Phone: {order.phone} Email: {order.email} <br/>
			    	Location: {order.address}, <br/> 
			    	P.O. Box: 100123
			 		</p>
				</div>
				<div className="col-md-4">
					<h6 className="text-muted">Payment</h6>
					<span className="text-success">
						<i className="fab fa-lg fa-cc-visa"></i>
					    Visa  **** 4216  
					</span>
					<p>Subtotal: $356 <br/>
					 Shipping fee:  $56 <br/> 
					 <span className="b">Total:  $456 </span>
					</p>
				</div>
			</div>
		</div>
		<div className="table-responsive">
		<table className="table table-hover">
			<tbody>
        {order.cart.map(item => {
          return (
            <tr>
				<td width="65">
					<img src={item.photo[0]} className="img-xs border" alt="" />
				</td>
				<td> 
					<p className="title mb-0">{item.name} </p>
					<var className="price text-muted">USD {item.price}</var>
				</td>
				<td> Seller <br/> Nike clothing </td>
				<td width="250"> <a href="/" className="btn btn-outline-primary">Track order</a> 
					<div className="dropdown d-inline-block">
						 <a href="/" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary" style={{'margin-left': '.5rem'}}>More</a>
						 <div className="dropdown-menu dropdown-menu-right">
						 	<a href="/" className="dropdown-item">Return</a>
						 	<a href="/"  className="dropdown-item">Cancel order</a>
						 </div>
					</div>
				</td>
			</tr>
			
          )
        })}
		</tbody></table>
		</div>
		</article>
      )
    })}
    
    </>
   );
}
 
export default ProfileOrders;
