import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ListOfGoods from './components/ListOfGoods/ListOfGoods'
import Order from './components/Order/Order';
import GoodDetails from './components/GoodDetails/GoodDetails';
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "./redux/actionCreators/topicsAC";
import { useEffect } from 'react';
import { API_URL } from './config';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile.js/Profile';
import ProfileContextProvider from './contexts/ProfileContext';
import ReactNotification from 'react-notifications-component';

import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {

  const user = useSelector(state => state.user.isAuth);

  const dispatch = useDispatch();

  const auth = async () => {
    try {
      await fetch(`${API_URL}api/v1/auth/auth`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
        .then(res => res.json())
        .then((response) => {
          console.log('=======>', response)
          dispatch(setUser(response))
        })
    } catch (e) {
      // alert(e)
      localStorage.removeItem('token');
    }
  }

  useEffect(() => {
    auth();
  }, []);

  return (
    <div className="App">
      <ProfileContextProvider>
        <Router>
          <ReactNotification />
          <Header />
          <MessengerCustomerChat
            pageId="104351358442170"
            appId="1179535882491681"
          />,
          <Route exact path="/categories/:id">
            <ListOfGoods />
          </Route>
          <Route path="/goods/:id">
            <GoodDetails />
          </Route>
          <Route exact path="/cart">
            <Cart />
            <Order />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          {!user ?
            <Switch>
              <Route exact path="/registration">
                <Registration />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
            :
            <Switch>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
          }
          <Footer />
        </Router>
      </ProfileContextProvider>
    </div>
  );
}

export default App;
