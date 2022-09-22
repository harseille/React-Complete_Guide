import React from 'react';

const Myparagraph = (props) => {
  console.log('MyParagraph RUNNING');
  return <p>{props.children}</p>;
};

export default Myparagraph;
