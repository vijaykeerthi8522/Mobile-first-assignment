
import React, { useState , useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  
  const handleLogin = (e) => {
    e.preventDefault();
     
    if (name === 'Vijay' && password === 'Vijay@123') {
      
      localStorage.setItem('isLoggedIn', 'dummy');

      console.log(localStorage)
      navigate('/');
    } else {
      // Display error message for incorrect credentials
      setError('Incorrect username or password');
    }
  };

   
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>

          <div className="login-container">

            <h2 style={{textAlign : 'center' , fontFamily : 'Roboto'}}>Login Page</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username :- Vijay</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={name} onChange={(e) => setName(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password :- Vijay@123</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>

              {error && <div className="text-danger mt-2">{error}</div>}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;