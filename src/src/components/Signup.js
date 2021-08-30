import React, {useEffect,useState } from 'react';
import { Form, Button ,Alert,Spinner} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';
import {Redirect} from 'react-router-dom';


const Signup =(props)=>{

    const [email, setemail] = useState('');
    const [password1, setpassword1] = useState('');
    const [password2, setpassword2] = useState('');
    const [username, setusername] = useState('');

    const handelChangeEmail =(e)=>{
        setemail(e.target.value);
      }
    const handelChangePwd1 =(e)=>{
        setpassword1(e.target.value);
      }
    const handelChangePwd2 =(e)=>{
        setpassword2(e.target.value);
      }
    const handelChangeUser =(e)=>{
        setusername(e.target.value);
      }
    const handelSubmit =(e)=>{
        props.signUp(username,email,password1,password2);
         e.preventDefault();
        }

      const {errorData,loading,token}=props;
      if(token){
        return <Redirect to="/login" />;
      }
      return(
          <div className="container login-form">
              <Form onSubmit={handelSubmit}>
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
              <Form.Control type="test" placeholder="Enter username" onChange={handelChangeUser}  />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  {errorData.email && 
                      <Alert variant='danger'>
                        {errorData.email[0]}
                      </Alert>}
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={handelChangeEmail}  />
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
                  <Form.Control type="password" placeholder="Password" onChange={handelChangePwd1} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={handelChangePwd2} />
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