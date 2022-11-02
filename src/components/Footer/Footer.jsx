import React from 'react'
import  './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';

function Footer() {

  const year = new Date().getFullYear();
  return ( 
   <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
            <div className='logo-f'>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1 className='text-white'>Online App</h1>
            </div>
          </div>
          <p className='footer_text mt-4'>
           I am learning and building an e-commerce website. People can order our items from this e-commerce website.
          </p>
        </Col>
        <Col lg='3' md='3' className='mb-4'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Top Categories</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mobile Phone</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Modern Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>
           </ListGroup>   
          </div>
        </Col>
        <Col lg='2' md='3' className='mb-4'>
        <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
           </ListGroup>   
          </div>

        </Col>
        <Col lg='3' md='4'>
          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>Leipzig, Germany</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
              <p>+4917676688107</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
              <p>footandshadows@gmail.com</p>
              </ListGroupItem>
           </ListGroup>   
          </div>
        </Col>
         <Col lg='12'>
          <p className="footer__copyright">Copyright {year}, Online Shop. All right reserved.</p>
         </Col>
      </Row>
    </Container>
  </footer>
 )
}

export default Footer;