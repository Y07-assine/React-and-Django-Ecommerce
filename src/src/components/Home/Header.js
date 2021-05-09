import React, { Component } from 'react';
import Svg from '../ui/Svg';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth';
import {Dropdown} from 'react-bootstrap';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            click:false,
            searchbar:false,
            display:false,
            options:[],
            search:""
        };
        this.handleClick=this.handleClick.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
        this.handelLogout=this.handelLogout.bind(this);
        
    }

    handelLogout=()=>{
        this.props.logout();
    }

    handleClick(){
        this.setState({click:!this.state.click});
    }
    closeMenu(){
        this.setState({click:false});
    }
    render(){
        const {click} = this.state;
        return(
            <div>
                <header id="header" className="header">
                    <div className="header__top">
                        <div className=" strip d-flex justify-content-between px-4 py-1 bg-light">
                            <div className="font-rale font-size-14" style={{paddingLeft:85+'%'}}>
                                <a href="#" className="px-3 border-right border-left text-dark text-right">Nous contacter</a>
                                <a href="#" className="px-3 border-right text-dark">Aide</a>
                            </div>
                        </div>
                    </div>
                    <div className="navigation color-primary-bg" style={ {backgroundImage: "linear-gradient(-90deg,#1c6eab 20%,rgba(30,140,153,0.9) 60%,#1e8c99)"}}>
                        <div className="container">
                            <nav className="nav ">
                                <div className="nav__hamburger navbar-toggler" onClick={this.handleClick}>
                                    <Svg name={'menu'} size={40} />
                                </div>

                                <div className="nav__logo">
                                    <a href="/" className="scroll-link">
                                        <strong><em> Universal </em></strong> Nutrition
                                    </a>
                                </div>
                                <div className="nav__menu">
                                    <ul className="search-input navbar-nav m-auto ">
                                        <div className="form-group has-search">
                                            <form action ="#" method="post"> 
                                                <span className="fa fa-search form-control-feedback"></span>
                                                <input className="search-input form-control form-control-sm mr-sm-2 mb-0" name="query" type="text" style={{fontSize: 15+"px"}} placeholder="Rechercher " />
                                            </form>
                                        </div>
                                    </ul>
                                </div>

                                <div className="nav__icons">
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                        <a href="#" className="icon__item" >
                                            <Svg name={'user'} size={40} />
                                        </a>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        {this.props.isAuthenticated ?
                                        <>
                                        <Dropdown.Item href="#/action-1">user</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>this.props.logout()}>Déconnexion</Dropdown.Item>
                                        </>
                                        : 
                                        <>
                                        <Dropdown.Item href="#/action-1">Se Connecter</Dropdown.Item>
                                        <Dropdown.Item >S'inscrire</Dropdown.Item>
                                        </>
                                        }
                                        </Dropdown.Menu>
                                        
                                    </Dropdown>
                                <div className="nav-search" style={{paddingRight:1+'rem'}}>
                                    <a href="#" className="icon__item">
                                        <Svg name={'search'} size={40} />
                                    </a>
                                </div>
                                    <a href="#" className="icon__item">
                                        <Svg name={'shopping-basket'} size={40} />
                                        <span id="cart__total">0</span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <nav id="nav-down" className="nav navbar navbar-expand-lg color-second-bg " >
                            <div className={click ? 'nav__menu2 open':'nav__menu2'} >
                                <div className="menu__top">
                                    <a href="/" className="icon__item" >
                                        <Svg name={'home'} size={40} />
                                    </a>
                                    <a href="#" className="close__toggle" onClick={this.closeMenu}>
                                        <Svg name={'cross'} size={40} />
                                    </a>
                                </div>
                                {click && <hr /> }
                                <ul className="nav__list ">
                                    <li className="nav__item ">
                                        <Link to={`/products/categorie/Protéine`}>Protéine</Link>
                                    </li>
                                    <li className="nav__item ">
                                        <Link to={`/products/categorie/Gainers`}>Gainers</Link>
                                    </li>
                                    <li className="nav__item ">
                                        <a href="#" className="nav__link scroll-link color-primary">Vitamines</a>
                                    </li>
                                    <li className="nav__item ">
                                        <a href="#" className="nav__link scroll-link color-primary">Barres & Snacks</a>
                                    </li>
                                    <li className="nav__item">
                                        <Link to={`/products/categorie/Pack`}>Pack</Link>
                                    </li>
                                    <li className="nav__item">
                                        <a href="#" className="nav__link scroll-link color-primary">Accessoires</a>
                                    </li>


                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

const maStateToProps = state =>{
    return{
      isAuthenticated: state.token !== null,
      loading: state.loading,
      error: state.error
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return{
      logout: () => dispatch(actions.logout())
    }
  }

export default connect(maStateToProps,mapDispatchToProps)(Header);