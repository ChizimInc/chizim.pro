import './Preloader.css';
import React,{ Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import { animateScroll as scroll } from "react-scroll";
//import './index.css'
import './normalise.css'
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom'
// image import
import a from './img/a.png';
import a1 from './img/a1.png';
import a2 from './img/a2.png';
import a3 from './img/a3.png';
import div from './img/div.png';
import arrow from './img/arrow.png';
import call_answer from './img/call-answer.png';
import coding from './img/coding.png';
import facebook_logo from './img/facebook-logo.png';
import instagram from './img/instagram.png';
import programming from './img/programming.png';
import responsive from './img/responsive.png';
import tools from './img/tools.png';
import twitter_logo from './img/twitter-logo.png';
import vk from './img/vk.png';
import logo_text from './img/logo_text_2.png'
// end of import image

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pos : 0,
      burger_status: 0
    };
  }

  componentDidMount(){
    if (document.body.clientWidth < 1024 ) {
      let portfolio_link
    }

  }

  btn_active = (e) => {
    e.preventDefault();
    let btn = document.querySelector('.menu-btn');
    btn.classList.toggle("menu-btn_active");
    document.querySelector('.menu-nav').classList.toggle('.menu-nav_active');
  }

  toRight = () => {
    if (document.body.clientWidth < 1024 ) {
      if (this.state.pos <= 0 && this.state.pos > -990 ) {
        let local_pos = this.state.pos - 330;
        this.setState({pos: local_pos});
      }
      if (document.body.clientWidth < 748) {
        if (this.state.pos <= 0 && this.state.pos > -1320 ) {
          let local_pos = this.state.pos - 330;
          this.setState({pos: local_pos});
        }
      }
    }else{
      if (this.state.pos <= 0 && this.state.pos > -660 ) {
        let local_pos = this.state.pos - 330;
        this.setState({pos: local_pos});
      }
    }
  }

  toLeft = () => {
    if (this.state.pos <= 0 && this.state.pos != 0) {
      let local_pos = this.state.pos + 330;
      this.setState({pos: local_pos});
    }
  }

render(){
  return (
    <div className="container">
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
      <Header/>
      <div className="whatido" id='services'>
          <h2>Что мы делаем</h2>
          <div className="one">
              <div className="block-one">
                  <img src={programming} className="img1"/>
                  <p>Разработка веб
                    приложений и сайтов
                  </p>
              </div>

              <div className="block-one">
                  <img src={tools}/>
                  <p>Вёрстка лендинг–страниц
                      и сайтов любой сложности
                  </p>
              </div>

              <div className="block-one">
                  <img src={responsive}/>
                  <p id="ml">Адаптивная вёрстка под все
                      браузеры и устройства
                  </p>
              </div>

              <div className="block-one">
                  <img src={coding}/>
                  <p>Исправление и доработка
                    существующих проектов
                  </p>
              </div>
          </div>

          <Link className="about_link" to="/about"><button>Узнать больше</button></Link>
      </div>

      <div className="portfolio" id='portfolio'>

          <h2>Примеры наших работ</h2>

          <div className="slider">
              <div className="circle-left" onClick={this.toLeft.bind(this)}>
                  <img id="to_left" src={arrow}/>
              </div>

              <div className="images-container">
                  <div className="images-items" style={ { marginLeft: `${ this.state.pos }px` } }>
                      <Link className="link_port" to="/portfolio/restaurant"><div className="image">
                        <div className="pics1"></div>
                        <p>site1</p>
                      </div></Link>
                      <Link className="link_port" to="/portfolio/city_hall_page#container_hall"><div className="image">
                        <div className="pics2"></div>
                        <p>site2</p>
                      </div></Link>
                      <Link className="link_port" to="/portfolio/site3"><div className="image">
                        <div className="pics3"></div>
                        <p>site3</p>
                      </div></Link>
                      <Link className="link_port" to="/portfolio/site4"><div className="image">
                        <div className="pics4"></div>
                        <p>site4</p>
                      </div></Link>
                      <Link className="link_port" to="/portfolio/site5"><div className="image">
                        <div className="pics5"></div>
                        <p>site5</p>
                      </div></Link>
                  </div>

              </div>

              <div className="circle-right" onClick={this.toRight.bind(this)}>
                  <img id="to_right" src={arrow}/>
              </div>
          </div>
          <Link className="about_link" to="/about"><button>Узнать больше</button></Link>


      </div>

      <div className="reclama-block" id='price'>
          <h2>Адаптивная вёрстка под все устройства
                  и браузеры от 50 доларов всего за 4 часа.*</h2>

          <p>* Срок и стоимость могут отличаться от заявленных и рассчитываются  индивидуально,
                  в зависимости от сложности задач.</p>
      </div>

      <div className="footer">
          <div className="footer-content">
              <div className="footer-menu">
                  <Link to="/services" className="link"><p>Услуги</p></Link>
                  <Link to="/portfolio" className="link"><p>Портфолио</p></Link>
                  <Link to="/price" className="link"><p>Стоймость</p></Link>
              </div>

              <div className="contact">
                  <div className="phone">
                      <i className="fas fa-phone"></i>
                      +37360999331
                  </div>
                  <div className="email">
                      <i className="fas fa-envelope"></i>
                      chizimcezar@usa.com
                  </div>
              </div>

              <div className="social">
                  <button>Заказать звонок</button>
                  <div className="icons">
                      <a href='https://vk.com/chizim' target="_blank"><i className="fab fa-vk vk"></i></a>
                      <a href='https://www.facebook.com/profile.php?id=100008270531523' target="_blank"><i className="fab fa-facebook-f facebook"></i></a>
                      <a href='https://t.me/ChizimWebStudio' target="_blank"><i className="fab fa-telegram twitter"></i></a>
                      <a href='https://www.instagram.com/cezar_chizim/?hl=en' target="_blank"><i className="fab fa-instagram instagram"></i></a>
                  </div>
              </div>
          </div>
      </div>

      <footer>
        &copy; Chizim Cezar, 2017-2019
      </footer>
  </div>
  );
}
}

export default App;
