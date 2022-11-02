import { useRef, useEffect } from 'react';
import  './header.css';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
//import { toast } from 'react-toastify';




const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Shop",
    path: "/shop",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/footer",
  },
  
  
];



const Header = () => {


  const headerRef = useRef(null);
  /* cart to redux and use totalquantity for cart */
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  
  const menuRef =useRef(null);

  const navigate = useNavigate();
  
  
  /*Sticky Scroll  */
  const stickyHeaderFunc = () =>{
     window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) { 
        headerRef.current.classList.add('sticky__header')
      } else{
      headerRef.current.classList.remove('sticky__header')
     }
     });
  };


  useEffect(()=>{
    stickyHeaderFunc();

    return()=> window.removeEventListener('scroll', stickyHeaderFunc)
  }); 


  const menuToggle = ()=> menuRef.current.classList.toggle('active__menu')

  /* cart navigate */
  const navigateToCart = ()=>{
      navigate('/cart')
  }; 

  
  return (
   <header className="header" ref={headerRef}>
    <Container>
     <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <div className='git'>
              <a href="https://github.com/binodpoudel/e-commerce-react-app" target='_blank' rel='noreferrer'>
                <i class="ri-github-line"></i>
             </a>
            </div>
            
            <Link to='/checkout'><img src={logo} alt="logo" /></Link>
            <div>
              <Link to='/checkout'><h5>Online Shop</h5></Link>
            </div>
          </div> {/* Toggle Menu*/}
              <div className='navigation' ref={menuRef} onClick={menuToggle}>
                <motion.ul className='menu'>
                  {/*Nav */}
                    {nav__links.map((item, index) => (
                      <li className='nav__item' key={index}>
                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''} > 
                        {item.display}</NavLink>
                      </li>  
                    ))}
                </motion.ul>
              </div>

              <div className="nav__icons">
                <span className='fav__icon'>
                <i class="ri-heart-line"></i>
                  <span className='badge'>2</span>
                </span>
                <span className='cart__icon' onClick={navigateToCart}>
                  <i class="ri-shopping-basket-line"></i>
                  <span className='badge'>{totalQuantity}</span>
                </span>
                <span className='profile'>
                  <Link to="/login">          
                   <img src={userIcon} alt=''></img>
                  </Link>
                  <span>
              </span>
                </span>  
                {/*mobile menu= */}
                <span className='mobile__menu' onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>  
            </div>    
        </div> 
      </Row>
    </Container>
  </header>
  ); 
};

export default Header;



