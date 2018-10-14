import React from 'react';
import './container.css';

const Container = ({ init, children, styleClass }) => (
  <div className={`container ${styleClass} ${init ? '' : 'hidden'}`}>
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
