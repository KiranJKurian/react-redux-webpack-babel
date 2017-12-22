import React from 'react';
import LinkButton from './LinkButton';

const Navigation = () => {
  return (
    <div>
      <LinkButton to="/" label="Home" />
      <LinkButton to="/about" label="About" />
      <LinkButton to="/sample" label="Sample" />
    </div>
  );
};

export default Navigation;
