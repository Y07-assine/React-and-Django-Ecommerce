import React, { Component } from 'react';
import { Form, Button ,Alert,Spinner} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';
import {Redirect} from 'react-router-dom';


class Signup extends Component{
    constructor(){
        super();
        this.state ={
            username:'',
            email :'',
            password1: '',
            password2: ''

        };
        this.handelSubmit=this.handelSubmit.bind(this);
        this.handelChangeEmail = this.handelChangeEmail.bind(this);
        this.handelChangePwd1 = this.handelChangePwd1.bind(this);
        this.handelChangePwd2 = this.handelChangePwd2.bind(this);
        this.handelChangeUser = this.handelChangeUser.bind(this);
      }
      handelChangeEmail =(e)=>{
        this.setState({email: e.target.value});
      }
      handelChangePwd1 =(e)=>{
        this.setState({password1: e.target.value});
      }
      handelChangePwd2 =(e)=>{
        this.setState({password2: e.target.value});
      }
      handelChangeUser =(e)=>{
        this.setState({username: e.target.value});
      }
      handelSubmit =(e)=>{
          console.log('post data')
         this.props.signUp(this.state.username,this.state.email,this.state.password1,this.state.password2);
         e.preventDefault();
        }
    render(){
        const {errorData,loading,token}=this.props;
        if(token){
          return <Redirect to="/login" />;
        }
        return(
            <div className="container login-form">
                <Form onSubmit={this.handelSubmit}>
                  {loading && (
                    <Spinner animation="border" role="status" variant="primary">
                    <span className="sr-only">Loading...</span>
                    </Spinner>
                    )}
                {errorData.non_field_errors && <Alert variant='danger'>
                    {errorData.non_field_errors[0]}
                    </Alert>}
                <Form.Group controlId="formBasicEmail">
                {errorData.username && 
                        <Alert variant='danger'>
                          {errorData.username[0]}
                        </Alert>}
                <Form.Label>Username</Form.Label>
                <Form.Control type="test" placeholder="Enter username" onChange={this.handelChangeUser}  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    {errorData.email && 
                        <Alert variant='danger'>
                          {errorData.email[0]}
                        </Alert>}
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handelChangeEmail}  />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                      {errorData.password1 && 
                        <Alert variant='danger'>
                          {errorData.password1[0]}
                        </Alert>}
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handelChangePwd1} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handelChangePwd2} />
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
    }
}
const maStateToProps = (state)=>{
    return{
      token:state.token,
      loading: state.loading,
      error: state.error,
      errorData: state.errorData
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return{
      signUp: (username,email,password1,password2) => dispatch(actions.authSignup(username,email,password1,password2))
    }
  }
  
export default connect(maStateToProps,mapDispatchToProps)(Signup);