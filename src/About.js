import React from 'react';
import './Preloader.css'
import { Preloader, Placeholder } from 'react-preloading-screen';
function About() {
    return (
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
        <h1>About</h1>
      </div>
    )
}
export default About;
