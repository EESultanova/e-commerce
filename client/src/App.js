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

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/categories/:id">
            <ListOfGoods />
          </Route>

          <Route path="/">
            <Main />
          </Route>

          <Route path="/car">
            <Order />
          </Route>

        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
