import { useSelector } from "react-redux";
import { API_URL } from '../../config'
import avatarLogo from '../../assets/avatar.svg';

const ProfileOverview = () => {

  const currentUser = useSelector(state => state.user);
  const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo;

  return ( 
    <>
    <article class="card mb-3">
            <div class="card-body">
              
              <figure class="icontext d-flex">
                  <div class="icon">
                    <img class="rounded-circle img-sm border" src={avatar} alt=""/>
                  </div>
                  <div class="text" style={{'text-align': 'start'}}>
                    <strong> {currentUser.name} </strong> <br/> 
                    <p class="mb-2"> {currentUser.email}  </p> 
                    <a href="/" class="btn btn-light btn-sm" alt="">Edit</a>
                  </div>
              </figure>
              <hr/>
              <p>
                <i class="fa fa-map-marker text-muted"></i> &nbsp; My address:  
                <br/>
                Tashkent city, Street name, Building 123, House 321 &nbsp; 
                <a href="/" class="btn-link"> Edit</a>
              </p>

              

              <article class="card-group card-stat">
                <figure class="card bg">
                  <div class="p-3">
                    <h4 class="title">38</h4>
                    <span>Orders</span>
                  </div>
                </figure>
                <figure class="card bg">
                  <div class="p-3">
                    <h4 class="title">5</h4>
                    <span>Wishlists</span>
                  </div>
                </figure>
                <figure class="card bg">
                  <div class="p-3">
                    <h4 class="title">12</h4>
                    <span>Awaiting delivery</span>
                  </div>
                </figure>
                <figure class="card bg">
                  <div class="p-3">
                    <h4 class="title">50</h4>
                    <span>Delivered items</span>
                  </div>
                </figure>
              </article>
              

            </div>
          </article>

          <article class="card  mb-3">
            <div class="card-body">
              <h5 class="card-title mb-4">Recent orders </h5>	

              <div class="row">
              <div class="col-md-6">
                <figure class="itemside  mb-3">
                  <div class="aside"><img src="images/items/1.jpg" class="border img-sm" alt=""/></div>
                  <figcaption class="info">
                    <time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
                    <p>Great book name goes here </p>
                    <span class="text-success">Order confirmed </span>
                  </figcaption>
                </figure>
              </div>
              <div class="col-md-6">
                <figure class="itemside  mb-3">
                  <div class="aside"><img src="images/items/2.jpg" class="border img-sm" alt=""/></div>
                  <figcaption class="info">
                    <time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
                    <p>How to be rich</p>
                    <span class="text-success">Departured</span>
                  </figcaption>
                </figure>
              </div>
              <div class="col-md-6">
                <figure class="itemside mb-3">
                  <div class="aside"><img src="images/items/3.jpg" class="border img-sm" alt=""/></div>
                  <figcaption class="info">
                    <time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
                    <p>Harry Potter book </p>
                    <span class="text-success">Shipped  </span>
                  </figcaption>
                </figure>
              </div>
            </div>

            <a href="/" class="btn btn-outline-primary btn-block"> See all orders <i class="fa fa-chevron-down"></i>  </a>
            </div>
          </article>
          </>
   );
}
 
export default ProfileOverview;
