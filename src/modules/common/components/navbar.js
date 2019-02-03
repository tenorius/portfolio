import React from 'react';
import styled from 'styled-components';
import Menu from './menu';
import Logo from './logo';
import Nav from './nav';

const Styled = {};
Styled.wrapper = styled.div`
  background: #181818;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

function Navbar({ stateGo, showNavbar, toggleNavbar }) {
  return (
    <Styled.wrapper>
      <Logo size={57} />
      <Nav stateGo={stateGo} showNavbar={showNavbar} />
      <Menu toggleNavbar={toggleNavbar} />
    </Styled.wrapper>
  );
}

export default Navbar;
