import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from '../../redux/actionCreators/userAC'
import { API_URL, SITE_URL } from '../../config'
import { emptyCart } from "../../redux/actionCreators/cartAC";
import { useLastLocation } from 'react-router-last-location'
import { useProfileContext } from "../../contexts/ProfileContext";


const Login = () => {

  const history = useHistory()

  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const cart = useSelector(state => state.cart)

  const lastLocation = useLastLocation()

  const language = useSelector(state => state.language)

  const inputEmailHandler = (e) => {
    setEmail(e.target.value)
  }

  const inputPasswordHandler = (e) => {
    setPassword(e.target.value)
  }


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await fetch(`${SITE_URL}api/v1/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          cart
        })
      })
        .then(res => res.json())
        .then((response) => {
          const header = document.querySelector('#container');
          if (document.querySelector('.text_delete')) {
            document.querySelector('.text_delete').remove();
          }

          const text = document.createElement('h4');
          text.style.color = 'red';
          text.className = 'text_delete';

          if (response.message === 'User not found') {
            text.innerText = `User not found`;
            header.appendChild(text);
          } else if (response.message === `Invalid password`) {
            text.innerText = `Invalid password`;
            header.appendChild(text);
          } else if (response.message === `All fields must be filled`) {
            text.innerText = `All fields must be filled`;
            header.appendChild(text);
          } else {
            dispatch(setUser(response))
            localStorage.setItem('token', response.token)
            dispatch(emptyCart())
            if (lastLocation.pathname === '/cart') {
              history.push('/order')
            } else {
              history.push('/');
            }
          }
        })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <section className="section-conten padding-y" style={{ minHeight: 84 }}>
      <div className="card mx-auto" style={{ maxWidth: 380, marginTop: 100 }}>
        <div className="card-body">
          <h4 id="container" className="card-title mb-4">{language === 'Russian' ? 'Вход' : 'Sign in'}</h4>
          <form onSubmit={submitHandler}>
            <img className="logo" src="/images/logocommerce3.png" alt="" style={{ maxWidth: 180, marginBottom: 40 }} />
            <div className="form-group">
              <input value={email} onChange={inputEmailHandler} name='email' type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input value={password} onChange={inputPasswordHandler} name="password" className="form-control" placeholder={language === 'Russian' ? 'Пароль' : 'Password'} type="password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">{language === 'Russian' ? 'Войти' : 'Sign in'}</button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center mt-4">{language === 'Russian' ? 'Нет аккаунта?' : `Don't have account?`}<Link to="/registration"> {language === 'Russian' ? 'Зарегистрироваться' : 'Sign up'}</Link></p>
      <br /><br />

    </section>
  );
}

export default Login;
