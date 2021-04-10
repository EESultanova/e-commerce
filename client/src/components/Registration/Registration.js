import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../redux/actionCreators/topicsAC';
import { API_URL } from '../../config';


function Registration() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setNickname] = useState('');
    const [role, setRole] = useState('');

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
            await fetch(`${API_URL}api/v1/auth/registration`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role,
                })
            })
                .then(res => res.json())
                .then(responseFromServer => {
                    alert(responseFromServer.message);
                    dispatch(setUser(responseFromServer));
                    localStorage.setItem('token', responseFromServer.token);
                })
            history.push('/');
        } catch (e) {
            alert(e);
        }

    }

    return (
        <div className="mx-auto" style={Object.assign({}, { width: '400px' }, { 'margin-top': '150px' })}>
            <form onSubmit={submitHandler}>
                <div class="mb-3">
                    <input value={email} onChange={inputEmailHandler} name='email' type="email" class="form-control" id="exampleInputEmail1" placeholder="Type your email ..." aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <input value={name} onChange={inputNicknameHandler} name="name" type="text" class="form-control" placeholder="Type your name ..." />
                </div>
                <div class="mb-3">
                    <input value={password} onChange={inputPasswordHandler} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Type your password ..." />
                </div>

                <div class="mb-3">
                    <select onChange={inputRoleHandler} className="mr-2 form-control">
                        <option selected="selected">Choose your role</option>
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Registration;