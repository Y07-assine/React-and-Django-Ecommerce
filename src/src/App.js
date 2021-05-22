
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import ListProducts from './components/ListProducts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Home/Footer';
import Newsletter from './components/Home/Newsletter';
import Header from './components/Home/Header';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import * as actions from './store/actions/auth';
import OrderSummary from './components/OrderSummary';


function App(props) {
  useEffect(() => {
    props.onTryAutoSignup();
  }, [])
  return (
    <div className="App">
      
      <Router>
        <Header {...props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/categorie/:category" render={(props)=><ListProducts {...props} key={Math.random()} />} />
          <Route exact path="/product/:slug" component={ProductDetails} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/signup/" component={Signup} />
          <Route exact path="/order-summary/" component={OrderSummary} />
        </Switch>
        <Newsletter />
        <Footer />
      </Router>
      
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onTryAutoSignup: ()=> dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
