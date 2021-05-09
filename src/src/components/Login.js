import React, { Component } from 'react';
import { Form, Button ,Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';
import {Redirect} from 'react-router-dom';

 
class Login extends Component {
  constructor(){
    super();
    this.state ={
      email :'',
      password: ''
    };
    this.handelSubmit=this.handelSubmit.bind(this);
    this.handelChangeEmail = this.handelChangeEmail.bind(this);
    this.handelChangePwd = this.handelChangePwd.bind(this);
  }
  handelChangeEmail =(e)=>{
    this.setState({email: e.target.value});
  }
  handelChangePwd =(e)=>{
    this.setState({password: e.target.value});
  }
  handelSubmit =(e)=>{
     console.log('received',this.state.email,this.state.password);
     console.log('received',this.state.password);
     this.props.onAuth(this.state.email,this.state.password);
     e.preventDefault();
    }

render(){
  const {error,loading,token} = this.props;
  const {email,password} = this.state;
  if(token){
    return <Redirect to="/" />;
  }
  return(
    <div className="container login-form">
    <Form onSubmit={this.handelSubmit}>
      {error && <Alert variant='danger'>
          Mot de passe ou email incorrect !!
          </Alert>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={this.handelChangeEmail} value={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={this.handelChangePwd} value={password} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
  )
};
};
  

const maStateToProps = (state)=>{
  return{
    token:state.token,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onAuth: (email,password) => dispatch(actions.authLogin(email,password))
  }
}

export default connect(maStateToProps,mapDispatchToProps)(Login);
