import ProfileAddress from '../ProfileAddress/ProfileAddress';
import ProfileOverview from "../ProfileOverview/ProfileOverview";
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import ProfileWishlist from '../ProfileWishlist/ProfileWishlist';
import ProfileSelling from '../ProfileSelling/ProfileSelling';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import { useProfileContext } from '../../contexts/ProfileContext';
import ProfileAddNewItem from '../ProfileSelling/ProfileAddNewItem';
import { useSelector } from 'react-redux';


const ProfileMain = () => {
  let {choice, setChoice} = useProfileContext()
  const user = useSelector(state => state.user)

  return ( 
    <>
      <section className="section-content padding-y">
        <div className="container">

          <div className="row">
            <aside className="col-md-3">
              <nav className="list-group" style={{'cursor': 'pointer'}}>
                <div className={`list-group-item ${choice === 0 && 'active'}`} onClick={() => setChoice(0)}> Account overview  </div>
                {user.role !== "seller" && <div className={`list-group-item ${choice === 1 && 'active'}`} onClick={() => setChoice(1)}> My Address </div>}
                {user.role !== "seller" && <div className={`list-group-item ${choice === 2 && 'active'}`} onClick={() => setChoice(2)}> My Orders </div>}
                {user.role !== "seller" && <div className={`list-group-item ${choice === 3 && 'active'}`} onClick={() => setChoice(3)}> My wishlist </div>}
                <div className={`list-group-item ${choice === 4 && 'active'}`} onClick={() => setChoice(4)}> Settings </div>
                { user.role === "seller" && <div className={`list-group-item ${choice === 5 && 'active'}`} onClick={() => setChoice(5)}> My Selling Items </div>}
                { user.role === "seller" && <div className={`list-group-item ${choice === 6 && 'active'}`} onClick={() => setChoice(6)}> To add a new item </div>}
              </nav>
            </aside>
            <main className="col-md-9">
              {choice === 0 && <ProfileOverview/>}
              {choice === 1 && <ProfileAddress/>}
              {choice === 2 && <ProfileOrders/>}
              {choice === 3 && <ProfileWishlist/>}
              {choice === 4 && <ProfileSettings/>}
              {choice === 5 && <ProfileSelling/>}
              {choice === 6 && <ProfileAddNewItem/>}
            </main>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default ProfileMain;
