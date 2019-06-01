import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom'

const Notfound = () => {
  return(
    <div className="notFound-container">
  		<div className="men-notFound">
  			<div className="notFound-img"></div>
  		</div>
  		<div className="text-notFound-cont">
  			<div className="text-notFound">
  				<p>404</p>
  				<p>Houston,</p>
  				<p>we've got a problem!</p>
  				<p>Oops! it looks like the page you're trying to reach is no longer
  				 available.Please check the URL for proper spelling and capitalization.</p>
  				 <div className="notFound-buttons">
  				 	<button><Link className="link" to="/">Go Home</Link></button>
  				 	<button><Link className="link2" to="/">Back</Link></button>
  				 </div>
  			</div>
  		</div>
  	</div>
  )
}

export default Notfound;
