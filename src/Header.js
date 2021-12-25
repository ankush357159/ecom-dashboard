import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user-info"));
  // console.log(user);

  const logout = () => {
    localStorage.clear();
    history.push("/register");
  };
  return (
    <Navbar bg='dark' expand='lg'>
      <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
      <Nav className='me-auto navbar_wrapper'>
        {localStorage.getItem("user-info") ? (
          <>
            <Link to="/">Product List</Link>
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
      {localStorage.getItem("user-info") ? (
        <Nav>
          <NavDropdown  title={user && user.name}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : null}
    </Navbar>
  );
};
