import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const Styled = {};
Styled.wrapper = styled.div`
  height: 255px;
  width: 300px;
  margin: auto;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  
  img {
    height: auto;
    width: 100%;
    opacity: 0.2;
  }
`;
const Background = ({ assignRef }) => (
  <Styled.wrapper id="background" ref={ref => assignRef(ref, 'background')}>
    <Logo size={300} opacity="0.5" animate />
  </Styled.wrapper>
);

export default Background;
