import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from './../components/Helmet/Helmet';
import { Link  } from 'react-router-dom';
import '../styles/login.css';


function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);


 return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>
              <Form className='auth__form'>
                <FormGroup className='form__group'>
                  <input 
                  type="text" 
                  placeholder='Username' 
                  value={username} 
                  onChange={(e)=> setUsername(e.target.value)} />
                </FormGroup>
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
              <FormGroup className='form__group'>
                <input 
                  type="file"
                  onChange={(e) => setFile(e.target.file[0])}  />
              </FormGroup>
              <button type='submit' className="buy__btn auth__btn">Create an Account</button>
              <p>Already have an account?{" "} 
                <Link to='/login'>Login</Link>
              </p>
            </Form>
           </Col>
            
         </Row>
       </Container>
      </section>

     </Helmet>
  )
}

export default Signup;