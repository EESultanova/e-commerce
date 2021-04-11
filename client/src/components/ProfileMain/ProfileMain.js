import ProfileAddress from '../ProfileAddress/ProfileAddress';
import ProfileOverview from "../ProfileOverview/ProfileOverview";
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import { useState } from 'react';
import ProfileWishlist from '../ProfileWishlist/ProfileWishlist';
import ProfileSelling from '../ProfileSelling/ProfileSelling';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import { useProfileContext } from '../../contexts/ProfileContext';
import ProfileAddNewItem from '../ProfileSelling/ProfileAddNewItem';
import userReducer from '../../redux/reducers/userReducer';
import { useSelector } from 'react-redux';


const ProfileMain = () => {

  let {choice, setChoice} = useProfileContext()
  const user = useSelector(state => state.user)

  return ( 
    <>
      <section class="section-content padding-y">
        <div class="container">

          <div class="row">
            <aside class="col-md-3">
              <nav class="list-group" style={{'cursor': 'pointer'}}>
                <div class={`list-group-item ${choice === 0 && 'active'}`} onClick={() => setChoice(0)}> Account overview  </div>
                <div class={`list-group-item ${choice === 1 && 'active'}`} onClick={() => setChoice(1)}> My Address </div>
                <div class={`list-group-item ${choice === 2 && 'active'}`} onClick={() => setChoice(2)}> My Orders </div>
                <div class={`list-group-item ${choice === 3 && 'active'}`} onClick={() => setChoice(3)}> My wishlist </div>
                <div class={`list-group-item ${choice === 4 && 'active'}`} onClick={() => setChoice(4)}> Settings </div>
                { user.role === "seller" && <div class={`list-group-item ${choice === 5 && 'active'}`} onClick={() => setChoice(5)}> My Selling Items </div>}
                { user.role === "seller" && <div class={`list-group-item ${choice === 6 && 'active'}`} onClick={() => setChoice(6)}> To add a new item </div>}
              </nav>
            </aside>
            <main class="col-md-9">
              {choice === 0 && <ProfileOverview/>}
              {choice === 1 && <ProfileAddress/>}
              {choice === 2 && <ProfileOrders/>}
              {choice === 3 && <ProfileWishlist/>}
              {choice === 4 && <ProfileSettings/>}
              {user.role === "seller" || choice === 5 && <ProfileSelling/>}
              {user.role === "seller" || choice === 6 && <ProfileAddNewItem/>}
            </main>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default ProfileMain;
