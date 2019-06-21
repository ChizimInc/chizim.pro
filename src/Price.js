import React from 'react';
import { Link } from 'react-router-dom'

const Price = () => {
  return(
    <div>
      <h1>Price Component</h1>
      <button><Link className="link" to="/">Go Home</Link></button>
    </div>
  )
}

export default Price;
