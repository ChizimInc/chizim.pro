import React from 'react';
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return(
    <div>
      <h1>Portfolio Component</h1>
      <button><Link className="link" to="/">Go Home</Link></button>
    </div>
  )
}

export default Portfolio;
