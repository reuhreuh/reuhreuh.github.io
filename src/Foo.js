import React from 'react';

const Foo = () => {
  const currentDateGMT = new Date().toGMTString();
  return (
    <div>
      <h1>Current Date (GMT):</h1>
      <p>{currentDateGMT}</p>
    </div>
  );
};

export default Foo;