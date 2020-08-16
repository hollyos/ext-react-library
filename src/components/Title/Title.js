import React from 'react';

const Title = ({ children, ...rest }) => (
  <h1 {...rest}>{children || 'React Library'}</h1>
);

export default Title;
