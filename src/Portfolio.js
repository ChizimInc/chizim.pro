import { Preloader, Placeholder } from 'react-preloading-screen';
import './Preloader.css';
import React from 'react';
import { Link } from 'react-router-dom'
import './portfolio.css';
import './portfolio_normalise.css'


const Portfolio = () => {
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
      <div className='portfolio_cont'>

        <div className="menu">
            <div className="left">
                <Link className="link" to="/services"><p>Услуги</p></Link>
                <Link className="link" to="/portfolio"><p>Портфолио</p></Link>
                <Link className="link" to="/price"><p>Стоймость</p></Link>
            </div>
            <div className="right">
                <p>+37360999331</p>
                <button>Заказать звонок</button>
            </div>
            <div className="get-order">
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="phone"/>
            </div>
        </div>

        <div className='site_block_cont'>
          <div className='site_block_p s_p1'>

            <div className='text_block_p'>
              Some description of site
              <button>Перейти на саит</button>
            </div>
          </div>
          <div className='site_block_p s_p2'>
            <div className='text_block_p'>
              Some description of site
              <button>Перейти на саит</button>
            </div>
          </div>
          <div className='site_block_p s_p3'>
            <div className='text_block_p'>
              Some description of site
              <button>Перейти на саит</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Portfolio;
