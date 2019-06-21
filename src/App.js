import React,{ Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import './Preloader.css';
import logo from './logo.svg';
import './App.css';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom'
// image import
import a from './img/a.png';
import a1 from './img/a1.png';
import a2 from './img/a2.png';
import a3 from './img/a3.png';
import b1 from './img/b1.jpg';
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
// end of import image

class App extends Component {
  constructor(props){
    super(props);
    this.state = { pos : 0 };
  }

  toRight(){
    if (this.state.pos <= 0 && this.state.pos > -480 ) {
      let local_pos = this.state.pos - 241;
      this.setState({pos: local_pos});
    }
  }

  toLeft(){
    if (this.state.pos <= 0 && this.state.pos != 0) {
      let local_pos = this.state.pos + 241;
      this.setState({pos: local_pos});
    }
  }

render(){
  return (
    <div className="container">
      <Preloader>
          <Placeholder>
          <div className="container_preloader">
            <div className="loading">
              <span>Loading...</span>
            </div>
          </div>
          </Placeholder>
      </Preloader>
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

      <div className="block-top">
          <div className="block-name">
              <h2>Chizim Cezar</h2>
              <p>Frontend и backend-разработчик</p>
              <button><Link className="link" to="/about">Узнать больше</Link></button>
          </div>
          <div className="icons">
              <img src={a3} id="one"/>
              <img src={div} id="_div"/>
              <img src={a} id="a"/>
              <img src={div} id="_div_"/>
              <img src={a1} id="copy"/>
          </div>
      </div>

      <div className="whatido">
          <h2>Что я делаю</h2>
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

      <div className="portfolio">

          <h2>Примеры мойх работ</h2>

          <div className="slider">
              <div className="circle-left" onClick={this.toLeft.bind(this)}>
                  <img id="to_left" src={arrow}/>
              </div>

              <div className="images-container">
                  <div className="images-items" style={ { marginLeft: `${ this.state.pos }px` } }>
                      <div className="image">
                        <div></div>
                        <p>site1</p>
                      </div>
                      <div className="image">
                        <div></div>
                        <p>site2</p>
                      </div>
                      <div className="image">
                        <div></div>
                        <p>site3</p>
                      </div>
                      <div className="image">
                        <div></div>
                        <p>site4</p>
                      </div>
                      <div className="image">
                        <div></div>
                        <p>site5</p>
                      </div>
                  </div>

              </div>

              <div className="circle-right" onClick={this.toRight.bind(this)}>
                  <img id="to_right" src={arrow}/>
              </div>
          </div>
          <Link className="about_link" to="/about"><button>Узнать больше</button></Link>


      </div>

      <div className="reclama-block">
          <h2>Адаптивная вёрстка под все устройства
                  и браузеры от 3000 рублей всего за 4 часа.*</h2>

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
                      <i className="fab fa-vk"></i>
                      <i className="fab fa-facebook-f"></i>
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-instagram"></i>
                  </div>
              </div>
          </div>
      </div>

      <footer>
        &copy; Chizim Cezar, 2018-2019
      </footer>
  </div>
  );
}
}

export default App;
