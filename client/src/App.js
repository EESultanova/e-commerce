import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
