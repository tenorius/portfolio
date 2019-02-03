import React from 'react';
import styled from 'styled-components';

const Styled = {};
Styled.wrapper = styled.div`
  width: 85%;
  margin-top: 170px;
  float: left;
  margin-left: 10%;
  position: static;
  
  h1{
    color: white;
    margin: 0;
    font-weight: normal;
    font-family: font-file-82132;
    font-size: 47px !important;
    line-height: 40px !important;
  }
  h1:before{
    content: '<h1>';
    opacity: 0.3;
    position: absolute;
    color: #ffa800;
    font-size: 18px;
    margin-top: -35px;
    font-family: 'La Belle Aurore', cursive;
  }
  h2{
    color: #8d8d8d;
    margin-top: 9px;
    font-weight: normal;
    font-size: 11px;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 3px
  }
  
  h1:after{
    content: '</h1>';
    opacity: 0.3;
    position: absolute;
    left: 0;
    bottom: -35px;
    color: #ffa800;
    font-size: 18px;
    margin-top: -35px;
    font-family: 'La Belle Aurore', cursive;
  }

  p{
      font-size: 13px;
      line-height: 18px;
      color: #ffffff;
      font-family: "Open Sans", sans-serif;
      font-weight: 300;
  }
`;

const TextZone = ({ children, className }) => (
  <Styled.wrapper className={className}>
    { children }
  </Styled.wrapper>
);

export default TextZone;
