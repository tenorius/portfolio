import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from './icon';

const Styled = {};

Styled.pressedMenu = keyframes`
  0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  5.71% { transform: matrix3d(0.345, 0.939, 0, 0, -0.909, 0.42, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  6.31% { transform: matrix3d(0.244, 0.971, 0, 0, -0.946, 0.326, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  11.31% { transform: matrix3d(-0.46, 0.89, 0, 0, -0.932, -0.366, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  12.51% { transform: matrix3d(-0.577, 0.819, 0, 0, -0.874, -0.489, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  17.02% { transform: matrix3d(-0.853, 0.524, 0, 0, -0.604, -0.798, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  22.62% { transform: matrix3d(-0.974, 0.23, 0, 0, -0.308, -0.952, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  23.52% { transform: matrix3d(-0.982, 0.194, 0, 0, -0.271, -0.963, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  28.33% { transform: matrix3d(-0.999, 0.054, 0, 0, -0.117, -0.994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  33.93% { transform: matrix3d(-1, -0.03, 0, 0, -0.016, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  34.43% { transform: matrix3d(-1, -0.034, 0, 0, -0.011, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  45.15% { transform: matrix3d(-0.998, -0.065, 0, 0, 0.043, -0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  45.35% { transform: matrix3d(-0.998, -0.065, 0, 0, 0.043, -0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  56.26% { transform: matrix3d(-0.999, -0.043, 0, 0, 0.034, -0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  72.57% { transform: matrix3d(-1, -0.013, 0, 0, 0.011, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  78.18% { transform: matrix3d(-1, -0.008, 0, 0, 0.006, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { transform: matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
`;

Styled.wrapper = styled.a`
  
  float: right;

  &:hover i {
    color: #edc000;
  }

  &:active i {
    animation: ${Styled.pressedMenu} 1000ms linear both;
  }

  i{
    font-size: 57px;
    color: white;
  }
`;

const menu = ({ toggleNavbar }) => (
  <Styled.wrapper onClick={toggleNavbar}>
    <Icon name="menu" />
  </Styled.wrapper>
);

export default menu;
