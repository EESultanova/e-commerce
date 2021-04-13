import { useSelector } from "react-redux";
import { API_URL, SITE_URL } from '../../config'
import avatarLogo from '../../assets/avatar.svg';
import { useProfileContext } from "../../contexts/ProfileContext";

const ProfileOverview = () => {

  const currentUser = useSelector(state => state.user);
  const avatar = currentUser.avatar ? `${SITE_URL + currentUser.avatar}` : avatarLogo;

  const orders = useSelector(state => state.user?.orders[0])

  let {setChoice} = useProfileContext()

  return ( 
    <>
    <article className="card mb-3">
            <div className="card-body">
              
              <figure className="icontext d-flex">
                  <div className="icon">
                    <img className="rounded-circle img-sm border" src={avatar} alt=""/>
                  </div>
                  <div className="text" style={{'textAlign': 'start'}}>
                    <strong> {currentUser.name} </strong> <br/> 
                    <p className="mb-2"> {currentUser.email}  </p> 
                    <div href="/" className="btn btn-light btn-sm" alt="" >Edit</div>
                  </div>
              </figure>
              <hr/>
              <p>
                <i className="fa fa-map-marker text-muted"></i> &nbsp; My address:  
                <br/>
                Tashkent city, Street name, Building 123, House 321 &nbsp; 
                <a href="/" className="btn-link"> Edit</a>
              </p>

              

              <article className="card-group card-stat">
                <figure className="card bg">
                  <div className="p-3">
                    <h4 className="title">{orders.length}</h4>
                    <span>Orders</span>
                  </div>
                </figure>
                <figure className="card bg">
                  <div className="p-3">
                    <h4 className="title">5</h4>
                    <span>Wishlists</span>
                  </div>
                </figure>
                <figure className="card bg">
                  <div className="p-3">
                    <h4 className="title">12</h4>
                    <span>Awaiting delivery</span>
                  </div>
                </figure>
                <figure className="card bg">
                  <div className="p-3">
                    <h4 className="title">50</h4>
                    <span>Delivered items</span>
                  </div>
                </figure>
              </article>
              

            </div>
          </article>

          <article className="card  mb-3">
            <div className="card-body">
              <h5 className="card-title mb-4">Recent orders </h5>	

              <div className="row">
                {orders.map(order => {
                  return (
                    <div className="col-md-6">
                      <figure className="itemside  mb-3">
                        <div className="aside"><img src={order?.cart[0]?.photo} className="border img-sm" alt=""/></div>
                        <figcaption className="info">
                          <time className="text-muted"><i className="fa fa-calendar-alt"></i> 12.09.2019</time>
                          <p>{order?.cart[0]?.name} </p>
                          <span className="text-success">Order confirmed </span>
                        </figcaption>
                      </figure>
                    </div>
                  )
                })}
            </div>

            <a href="/" className="btn btn-outline-primary btn-block"> See all orders <i className="fa fa-chevron-down"></i>  </a>
            </div>
          </article>
          </>
   );
}
 
export default ProfileOverview;
