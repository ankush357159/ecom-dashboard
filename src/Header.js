import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
      <Nav className='me-auto navbar_wrapper'>
        {localStorage.getItem("user-info") ? (
          <>
            <Link to='/add'> Add Product</Link>
            <Link to='/update'> Update - Product</Link>
          </>
        ) : (
          <>
            <Link to='/login'> Login</Link>
            <Link to='/register'> Register</Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};
