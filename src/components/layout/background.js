import React from 'react';
import './background.css';
import Logo from './logo';

const Background = ({ assignRef }) => (
  <div className="bg" ref={ref => assignRef(ref, 'background')}>
    <Logo opacity="0.5" />
  </div>
);

export default Background;
