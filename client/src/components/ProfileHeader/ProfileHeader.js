import { useSelector } from "react-redux";

const ProfileHeader = () => {

  const language = useSelector(state => state.language)

  return ( 
    <section className="section-pagetop bg-gray">
      <div className="container">
	    <h2 className="title-page d-flex">{language === 'Russian' ? 'Мой аккаунт': 'My account'}</h2>
      </div>
    </section>
   );
}
 
export default ProfileHeader;
