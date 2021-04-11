import { useSelector } from "react-redux";

const ProfileSettings = () => {
  const user = useSelector(state => state.user)
  
  return ( 
    <div class="card">
      <div class="card-body">
     <form class="row">
     	<div class="col-md-9">
     		<div class="form-row">
				<div class="col form-group">
					<label>Name</label>
				  	<input type="text" class="form-control" value="Vosidiy" />
				</div>
				<div class="col form-group">
					<label>Email</label>
				  	<input type="email" class="form-control" value="vosidiy@gmail.com" />
				</div>
			</div>
			
			<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Country</label>
				  <select id="inputState" class="form-control">
				    <option> Choose...</option>
				      <option>Uzbekistan</option>
				      <option>Russia</option>
				      <option selected="">United States</option>
				      <option>India</option>
				      <option>Afganistan</option>
				  </select>
				</div>
				<div class="form-group col-md-6">
				  <label>City</label>
				  <input type="text" class="form-control" />
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Zip</label>
				  <input type="text" class="form-control" value="123009" />
				</div>
				<div class="form-group col-md-6">
				  <label>Phone</label>
				  <input type="text" class="form-control" value="+123456789" />
				</div>
			</div>

			<button class="btn btn-primary">Save</button>	
			<button class="btn btn-light">Change password</button>	

			<br/><br/><br/><br/><br/><br/>

     	</div>
     	<div class="col-md">
     		<img src="images/avatars/avatar1.jpg" class="img-md rounded-circle border" alt=""/>
     	</div>
      </form>
      </div>
    </div>
   );
}
 
export default ProfileSettings;
