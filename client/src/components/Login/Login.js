import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from '../../redux/actionCreators/topicsAC'
import { API_URL } from '../../config'


const Login = () => {
  console.log('login');

  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputEmailHandler = (e) => {
    setEmail(e.target.value)
  }

  const inputPasswordHandler = (e) => {
    setPassword(e.target.value)
  }


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await fetch(`${API_URL}api/v1/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        })
      })
        .then(res => res.json())
        .then((response) => {
          console.log(response)
          dispatch(setUser(response))
          localStorage.setItem('token', response.token)

        })
      history.push('/');
    } catch (e) {
      alert(e);
    }
  }

  return (
    <section className="section-conten padding-y" style={{ minHeight: 84 }}>

      <div className="card mx-auto" style={{ maxWidth: 380, marginTop: 100 }}>
        <div className="card-body">
          <h4 className="card-title mb-4">Sign in</h4>
          <form onSubmit={submitHandler}>
            <a href="/" className="btn btn-facebook btn-block mb-2"> <i className="fab fa-facebook-f"></i> &nbsp;  Sign in with Facebook</a>
            <a href="/" className="btn btn-google btn-block mb-4"> <i className="fab fa-google"></i> &nbsp;  Sign in with Google</a>
            <div className="form-group">
              <input value={email} onChange={inputEmailHandler} name='email' type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input value={password} onChange={inputPasswordHandler} name="password" className="form-control" placeholder="Password" type="password" />
            </div>

            <div className="form-group">
              <a href="/" className="float-right">Forgot password?</a>
              <label className="float-left custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" checked="" /> <div className="custom-control-label"> Remember </div> </label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block"> Login  </button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center mt-4">Don't have account? <a href="/">Sign up</a></p>
      <br /><br />

    </section>
  );
}

export default Login;
