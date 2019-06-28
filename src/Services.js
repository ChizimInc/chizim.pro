import React from 'react';
import { Link } from 'react-router-dom'
import { Preloader, Placeholder } from 'react-preloading-screen';
import './Preloader.css';

const Services = () => {
  return(
    <div>
      <Preloader fadeDuration="1500">
          <Placeholder>
          <div className="container_preloader">
            <div className="loading"></div>
            <div className="circle_c">
              <div id="loader-wrapper">
                <div id="loader"></div>
              </div>
            </div>
          </div>
          </Placeholder>
      </Preloader>
      <h1>Services Component</h1>
      <button><Link className="link" to="/">Go Home</Link></button>
    </div>
  )
}

export default Services;
