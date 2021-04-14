import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../redux/actionCreators/userAC';
import { API_URL, SITE_URL } from '../../config';
import { emptyCart } from "../../redux/actionCreators/cartAC";
import { useLastLocation } from 'react-router-last-location';
import { useProfileContext } from "../../contexts/ProfileContext";


function Registration() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setNickname] = useState('');
    const [role, setRole] = useState('');
    const cart = useSelector(state => state.cart)
    const language = useSelector(state => state.language)

    const lastLocation = useLastLocation()

    const inputEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const inputPasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const inputNicknameHandler = (e) => {
        setNickname(e.target.value);
    }

    const inputRoleHandler = (e) => {
        setRole(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await fetch(`${SITE_URL}api/v1/auth/registration`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role,
                    cart,
                })
            })
                .then(res => res.json())
                .then(responseFromServer => {
                    console.log(responseFromServer.message)
                    const header = document.querySelector('#container');
                    if (document.querySelector('.text_delete')) {
                        document.querySelector('.text_delete').remove();
                    }

                    const text = document.createElement('h4');
                    text.style.color = 'red';
                    text.className = 'text_delete';

                    if (responseFromServer.message === 'Uncorrect request') {
                        text.innerText = `All fields must be filled`;
                        header.appendChild(text);
                    } else

                        if (responseFromServer.message === `User with email ${email} already exists`) {
                            text.innerText = `User with email ${email} already exists`;
                            header.appendChild(text);
                        } else {
                            dispatch(setUser(responseFromServer));
                            localStorage.setItem('token', responseFromServer.token);
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

            <div className="card mx-auto" style={{ maxWidth: 380, marginTop: 60, marginBottom: 60 }}>
                <div className="card-body">
                    <h4 id="container" className="card-title mb-4">{language === 'Russian' ? 'Регистрация' : 'Sign up'}</h4>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <input value={email} onChange={inputEmailHandler} name='email' type="email" class="form-control" id="exampleInputEmail1" placeholder="E-mail" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input value={name} onChange={inputNicknameHandler} name="name" type="text" class="form-control" placeholder={language === 'Russian' ? 'Имя' : 'Name'} />
                        </div>
                        <div className="form-group">
                            <input value={password} onChange={inputPasswordHandler} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder={language === 'Russian' ? 'Пароль' : 'Password'} />
                        </div>

                        <div className="form-group">
                            <select onChange={inputRoleHandler} className="mr-2 form-control">
                                <option selected="selected">{language === 'Russian' ? 'Выберите роль' : 'Choose your role'}</option>
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">{language === 'Russian' ? 'Зарегистрироваться' : 'Sign up'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Registration;
