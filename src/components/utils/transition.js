import React from 'react';


const Transition = ({ init, delay, children }) => {
  console.log(init);
  const styles = {
    opacity: init ? 1 : 0,
    transition: 'all 400ms ease-in-out',
    transitionDelay: `${delay}ms`,
    overflow: 'hidden',
  };

  return (
    <div style={styles}>
      {children}
    </div>
  );
};

export default Transition;
