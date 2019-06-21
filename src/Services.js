import React from 'react';
import { Link } from 'react-router-dom'

const Services = () => {
  return(
    <div>
      <h1>Services Component</h1>
      <button><Link className="link" to="/">Go Home</Link></button>
    </div>
  )
}

export default Services;
