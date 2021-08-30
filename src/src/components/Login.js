import React, {useEffect,useState } from 'react';
import { Form, Button ,Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';
import {Redirect} from 'react-router-dom';

 
const Login =(props)=>{

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
  const handelChangeEmail =(e)=>{
    setemail(e.target.value);
  }
  const handelChangePwd =(e)=>{
    setpassword(e.target.value);
  }
  const handelSubmit =(e)=>{
     props.onAuth(email,password);
     e.preventDefault();
    }


  const {error,loading,token} = props;
  if(token){
    return <Redirect to="/" />;
  }
  return(
    <div className="container login-form">
    <Form onSubmit={handelSubmit}>
      {error && <Alert variant='danger'>
          Mot de passe ou email incorrect !!
          </Alert>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={handelChangeEmail} value={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handelChangePwd} value={password} />
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
  

const maStateToProps = (state)=>{
  return{
    token:state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onAuth: (email,password) => dispatch(actions.authLogin(email,password))
  }
}

export default connect(maStateToProps,mapDispatchToProps)(Login);
