import './Layout.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header/Header';

function Layout() {
  return (
    <div className="App">
      <Header />
      <Container fluid className="body">
        <Outlet />
      </Container>
    </div>
  );
}
export default Layout;
