import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../contexts/ProfileContext";
import { getAllOrders } from "../../redux/actionCreators/userAC";

const ProfileOrders = () => {

  const orders = useSelector(state => state.user?.orders[0])
  const user = useSelector(state => state.user.id)
  const dispatch = useDispatch()
  console.log(orders);
  let {setChoice} = useProfileContext()
  const language = useSelector(state => state.language) 

  useEffect(() => {
    dispatch(getAllOrders(user))
  }, [setChoice])

  const fee = 0;

  return ( 
    <>
    {orders ? orders.map(order => {
      return (
        <article key={order._id} className="card mb-4">
		<header className="card-header">
			<a href="javascript:(print());" className="float-right print-doc"> <i className="fa fa-print"></i>{(language === 'Russian') ? ' Печатать' : ' Print'}</a>
			<strong className="d-inline-block mr-3">{(language === 'Russian') ? 'ID Заказа' : 'Order ID:'} {order._id}</strong>
			<span>{(language === 'Russian') ? 'Дата заказа: 16 March 2021' : `Order Date: 16 March 2021`}</span>
		</header>
		<div className="card-body">
			<div className="row"> 
				<div className="col-md-8">
					<h6 className="text-muted">{(language === 'Russian') ? 'Доставка до' : 'Delivery to'}</h6>
					<p>{order.fio} <br/>  
          {(language === 'Russian') ? 'Телефон:' : 'Phone:'} {order.phone} <br/>
            Email: {order.email} <br/>
			    	{(language === 'Russian') ? 'Адрес:' : 'Location:'} {order.address} <br/> 
			 		</p>
				</div>
				<div className="col-md-4">
					<h6 className="text-muted">{(language === 'Russian') ? 'Оплата' : 'Payment'}</h6>
					<span className="text-success">
						<i className="fab fa-lg fa-cc-visa"></i>
					    Visa  **** {order?.card?.toString().slice(12)} 
					</span>
					<p>{(language === 'Russian') ? 'Сумма' : 'Subtotal'}: $ {order.total} <br/>
          {(language === 'Russian') ? 'Стоимость доставки' : 'Shipping fee'}:  $ {fee} <br/> 
					 <span className="b">{(language === 'Russian') ? 'Общая сумма' : 'Total'}:  $ {(order.total + fee).toFixed(2)} </span>
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
                  <var className="price text-muted">USD {item.price * item.quantity}</var>
                </td>
              </tr>
            )
          })}
      </tbody></table>
		</div>
		</article>
      )
    }) : <div>You don't have orders</div>}
    
    </>
   );
}
 
export default ProfileOrders;
