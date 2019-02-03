import React from 'react';
import styled from 'styled-components';
import Tags from './tags';

const Styled = {};
Styled.wrapper = styled.div`
  opacity: 0;
  visibility: visible;
  height: auto;
  min-height: 566px;
  padding-bottom: 58px;
  position: relative;
  overflow: hidden;/*evita probelmas de float*/
  z-index: 1;
`;
const Container = ({ children, styleClass, assignRef }) => (
  <div ref={ref => assignRef(ref, 'container')} className={`container ${styleClass} `}>
    <Tags position="top">
      &nbsp;&nbsp;&nbsp;&lt;body&gt;
    </Tags>
    {children}
    <Tags position="bottom">
      &nbsp;&nbsp;&nbsp;&lt;/body&gt;
      <br />
      &lt;/html&gt;
    </Tags>
  </div>
);

export default Container;
