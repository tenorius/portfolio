import React from 'react';
import './container.css';

const Container = ({ children, styleClass, assignRef }) => (
  <div ref={ref => assignRef(ref, 'container')} className={`container ${styleClass} `}>
    <span className="tags top-tags">
            &nbsp;&nbsp;&nbsp;&lt;body&gt;
    </span>
    {children}
    <span className="tags bottom-tags">
            &nbsp;&nbsp;&nbsp;&lt;/body&gt;
      <br />
            &lt;/html&gt;
    </span>
  </div>
);

export default Container;
