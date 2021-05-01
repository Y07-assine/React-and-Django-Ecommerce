
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import ListProducts from './components/ListProducts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Home/Footer';
import Newsletter from './components/Home/Newsletter';
import Header from './components/Home/Header';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/categorie/:category" render={(props)=><ListProducts {...props} key={Math.random()} />} />
          <Route exact path="/product/:slug" component={ProductDetails} />
        </Switch>
        <Newsletter />
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
