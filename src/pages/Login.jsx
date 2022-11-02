import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from './../components/Helmet/Helmet';
import { Link  } from 'react-router-dom';
import '../styles/login.css';
//import { toast } from 'react-toastify';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold mb-4'>Login</h3>
            <Form className='auth__form'>
              <FormGroup className='form__group'>
                <input 
                  type="email" 
                  placeholder='Enter your email'
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form__group'>
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}  />
              </FormGroup>
              <button type='submit' className="buy__btn auth__btn">Login</button>
              <p>Don't have an account?{" "} 
                <Link to='/signup'>Create and account</Link>
              </p>
            </Form>
        </Col>
            
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Login;