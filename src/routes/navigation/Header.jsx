import React,{useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import {useState,useRef} from 'react';
import { Outlet } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import CartPopup from '../../Component/cartpopup/CartPopup';
import Button from 'react-bootstrap/Button';
import "./header.scss";

const Header=()=>{
  const [cartPopup,setCartPopuup]=useState(false)
  const context = useContext(CartContext);
  const cartShow=()=>{
    setCartPopuup(!cartPopup)
  }
  console.log({context})
    return(
      <>
        <header>
       <Navbar collapseOnSelect expand="lg" className='shadow-sm headerindeex'>
       <Container>
         <Link to="/" className='navbar-brand'>
           <img src="/static/images/logo_2x.png" className="brandlogoimg" alt="Sabka Bazar Brand Logo" />
         </Link>
        <div id="responsive-navbar-nav" className='top-bar-row navbar-collapse collapse'>
          <div className='topbar'>
            <Nav className="me-auto justify-content-end">
                <Link to="/login" className='nav-link'>SignIn</Link>
                <Link to="/register" className='nav-link'>Register</Link>
            </Nav>
          </div>
          <Nav className="me-auto">
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/pplpage" className='nav-link'>Products</Link>
          </Nav>
          <div className='cartsection'>
          <Button className='btn cart-btn btn-default' variant="light" onClick={cartShow}><i className="bi bi-cart"></i> {context.cart.length} Item</Button>
          
          {cartPopup ? <CartPopup cartClose={cartShow} cartData={context.cart}/> : null }
          </div>
        </div>
       </Container>
     </Navbar>
      </header>
        <Outlet/>
      </>
    )
}
export default Header;