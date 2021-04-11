import ProfileAddress from '../ProfileAddress/ProfileAddress';
import ProfileOverview from "../ProfileOverview/ProfileOverview";
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import { useState } from 'react';
import ProfileWishlist from '../ProfileWishlist/ProfileWishlist';
import ProfileSelling from '../ProfileSelling/ProfileSelling';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import { useProfileContext } from '../../contexts/ProfileContext';


const ProfileMain = () => {

  let {choice, setChoice} = useProfileContext()

  return ( 
    <>
      <section class="section-content padding-y">
        <div class="container">

          <div class="row">
            <aside class="col-md-3">
              <nav class="list-group">
                <div class={`list-group-item ${choice === 0 && 'active'}`} style={{'cursor': 'pointer'}} onClick={() => setChoice(0)}> Account overview  </div>
                <div class={`list-group-item ${choice === 1 && 'active'}`} style={{'cursor': 'pointer'}} onClick={() => setChoice(1)}> My Address </div>
                <div class={`list-group-item ${choice === 2 && 'active'}`} style={{'cursor': 'pointer'}} onClick={() => setChoice(2)}> My Orders </div>
                <div class={`list-group-item ${choice === 3 && 'active'}`} style={{'cursor': 'pointer'}} onClick={() => setChoice(3)}> My wishlist </div>
                <div class={`list-group-item ${choice === 4 && 'active'}`} style={{'cursor': 'pointer'}} onClick={() => setChoice(4)}> My Selling Items </div>
                <div class={`list-group-item ${choice === 5 && 'active'}`} style={{'cursor': 'pointer'}} onClick={() => setChoice(5)}> Settings </div>
                <div class={`list-group-item ${choice === 6 && 'active'}`} style={{'cursor': 'pointer'}} onClick={() => setChoice(6)}> Log out </div>
              </nav>
            </aside>
            <main class="col-md-9">
              {choice === 0 && <ProfileOverview/>}
              {choice === 1 && <ProfileAddress/>}
              {choice === 2 && <ProfileOrders/>}
              {choice === 3 && <ProfileWishlist/>}
              {choice === 4 && <ProfileSelling/>}
              {choice === 5 && <ProfileSettings/>}
              {choice === 6 && <ProfileOverview/>}
            </main>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default ProfileMain;
