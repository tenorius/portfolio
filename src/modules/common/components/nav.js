/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled, { css } from 'styled-components';

const Styled = {};
Styled.wrapper = styled.div`
  
  left:100%;
  opacity: 0;
  text-align: center;
  display: block;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 60px;
  background: #181818;
  transition: all 0.3s ease-in-out;
  
  ${props => (props.showNavbar && css`
    left: 0;
    opacity: 1;
  `)};
  
  a {
    position: relative;
    width: 20%;
    height: 100%;
    display: inline-block;
    line-height: 60px;
  }
  
  i{
    position: relative;
    font-size: 22px;
    color: white;
    line-height: 1;
  }
`;

const Nav = ({ stateGo, showNavbar }) => (
  <Styled.wrapper showNavbar={showNavbar}>
    <a  onClick={() => (stateGo('/home'))}>
      <i className="material-icons">
        home
      </i>
    </a>
    <a  onClick={() => (stateGo('/about'))}>
      <i className="material-icons">
        person
      </i>
    </a>
    <a  onClick={() => (stateGo('/skills'))}>
      <i className="material-icons">
        settings
      </i>
    </a>
    <a  onClick={() => (stateGo('/gallery'))}>
      <i className="material-icons">
        album
      </i>
    </a>
    <a href="/">
      <i className="material-icons">
        email
      </i>
    </a>
  </Styled.wrapper>
);

export default Nav;
