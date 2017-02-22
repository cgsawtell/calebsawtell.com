import React from 'react';
import { Link } from 'react-router'

const FourOhFour = () => {
  return (
    <div>
      <h1>Oh no, you seem a bit lost</h1>
      <Link to={'/'}>Return to safety</Link>
    </div>
  );
};

export default FourOhFour;