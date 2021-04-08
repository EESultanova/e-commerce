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
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/categories/:id">
            <ListOfGoods />
          </Route>

          
          <Route exact path="/cart">
            <Cart />
          </Route>
          
          <Route exact path="/">
            <Main />
          </Route>


        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
