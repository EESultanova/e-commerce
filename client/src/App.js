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
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/categories/:id">
            <ListOfGoods />
          </Route>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

        <Order/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
