import React from 'react';
import styled, { css } from 'styled-components';

const Styled = {};
Styled.wrapper = styled.span`
  color: #ffa800;
  opacity: 0.3;
  position: absolute;
  font-size: 18px;
  font-family: 'La Belle Aurore', cursive;
  left: 0;
  margin-left: 10px;
  ${props => (props.position === 'top' ? css`top: 76px;` : css`bottom: 0px;`)}
`;
const Tags = ({ position, children }) => (
  <Styled.wrapper position={position}>
    { children }
  </Styled.wrapper>
);

export default Tags;
