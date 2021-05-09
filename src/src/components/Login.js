import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';

 
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
  return(
    <Form onSubmit={this.handelSubmit}>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      onChange={this.handelChangeEmail}
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Password'
      onChange={this.handelChangePwd}
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
      
    />
  </Form>
  )
};
};
  

const maStateToProps = (state)=>{
  return{
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
