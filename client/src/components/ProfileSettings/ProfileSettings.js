import { useDispatch, useSelector } from "react-redux";
import { API_URL, SITE_URL } from '../../config'
import { setUser } from '../../redux/actionCreators/userAC'
import avatarLogo from '../../assets/avatar.svg';

const ProfileSettings = () => {

  const currentUser = useSelector(state => state.user);
  const language = useSelector(state => state.language)
  const avatar = currentUser.avatar ? `${SITE_URL + currentUser.avatar}` : avatarLogo;

  const dispatch = useDispatch()

    const uploadHandler = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            await fetch(`${SITE_URL}api/v1/files/avatar`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    // 'Content-Type': 'application/json'
                },
                body: formData
            })
                .then(res => res.json())
                .then((response) => {
                    dispatch(setUser(response))
                })
        } catch (e) {
            console.log(e);
        }
    }

    const deleteHandler = async () => {
        try {
            console.log('here fetch')
            await fetch(`${SITE_URL}api/v1/files/avatar`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })
                .then(res => res.json())
                .then((response) => {
                    console.log('=======>', response)
                    dispatch(setUser(response))
                })
        } catch (e) {
            console.log(e);
        }
    }

    const inputAvatarHandler = (e) => {
        const file = e.target.files[0];
        uploadHandler(file);
    }

  return ( 
    <div className="card">
      <div className="card-body">
     <form className="row">
     	<div className="col-md-9">
     		<div className="form-row">
				<div className="col form-group">
					<label>{(language === 'Russian') ? 'Имя' : 'Name'}</label>
				  	<input type="text" className="form-control" value={currentUser.name} />
				</div>
				<div className="col form-group">
					<label>Email</label>
				  	<input type="email" className="form-control" value={currentUser.email} readOnly={true} />
				</div>
			</div>
			
			<div className="form-row">
				<div className="form-group col-md-6">
				  <label>{(language === 'Russian') ? 'Страна' : 'Country'}</label>
				  <select id="inputState" className="form-control">
				    <option> Choose...</option>
				      <option>Uzbekistan</option>
				      <option>Russia</option>
				      <option selected="">United States</option>
				      <option>India</option>
				      <option>Afganistan</option>
				  </select>
				</div>
				<div className="form-group col-md-6">
				  <label>{(language === 'Russian') ? 'Город' : 'City'}</label>
				  <input type="text" className="form-control" />
				</div>
			</div>

			<div className="form-row">
				<div className="form-group col-md-6">
				  <label>Zip</label>
				  <input type="text" className="form-control" value="123009" />
				</div>
				<div className="form-group col-md-6">
				  <label>{(language === 'Russian') ? 'Телефон' : 'Phone'}</label>
				  <input type="text" className="form-control" value="+123456789" />
				</div>
			</div>

			<button className="btn btn-primary mr-2">{(language === 'Russian') ? 'Сохранить' : 'Save'}</button>	
			<button className="btn btn-light">{(language === 'Russian') ? 'Изменить пароль' : 'Change password'}</button>
      <br/>	
      <br/>	
      <div className="mx-auto" style={{"width": '400px', 'margin-top': '10px', 'margin-bottom': '10px', 'border': '1px solid #ced4da', 'padding': '10px', 'border-radius': '0.37rem'}}>
      <div className="mb-3">{(language === 'Russian') ? 'Загрузить / Изменить Аватар' : 'Download / Delete Avatar'}</div>
        <div className="mb-3">
          <input accept="image/*" onChange={(e) => inputAvatarHandler(e)} name="avatar" type="file" style={{'width': '18rem'}}/>
        </div>
          <button onClick={deleteHandler} type="submit" className="btn btn-primary">{(language === 'Russian') ? 'Удалить Аватар' : 'Delete Avatar'}</button>
      </div>

			<br/><br/><br/><br/><br/><br/>

     	</div>


     	<div className="col-md">
     		<img src={avatar} className="img-md rounded-circle border" alt=""/>
     	</div>

      </form>

      </div>
        


    </div>
   );
}
 
export default ProfileSettings;
