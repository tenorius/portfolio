import React from 'react';
import styled from 'styled-components';

const Styled = {};
Styled.wrapper = styled.div`
  position: relative;
  height: auto;
`;
const Page = ({ children }) => (
  <Styled.wrapper>
    {children}
  </Styled.wrapper>
);

export default Page;