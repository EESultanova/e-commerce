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
import GoodDetails from './components/GoodDetails/GoodDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/categories/:id">
            <ListOfGoods />
          </Route>

          <Route path="/goods/:id">
            <GoodDetails />
          </Route>

          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
