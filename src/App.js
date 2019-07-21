import './Preloader.css';
import React,{ Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import logo from './logo.svg';
import './Header.css'
import Ellipse_1 from './img/Ellipse_1.png'
import logo_text_2 from './img/logo_text_2.png';
import div from './img/div.png'
import a from './img/a.png'
import a1 from './img/a1.png'
import a2 from './img/a2.png'
import a3 from './img/a3.png'
import './normalise.css'
import './App.css';

import { animateScroll as scroll } from "react-scroll";
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom'
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
    if (localStorage.getItem('dark_mode') == 'true') {
      this.state = {
        pos : 0,
        burger_status: 0,
        container_back: '#26242E',
        whatido_back: '#212121',
        text_color: '#e4dada',
        box_shadow: '0px 0px 9px rgb(229,229,229,0.6)'
      };
    }else{
      this.state = {
        pos : 0,
        burger_status: 0,
        container_back: '#fbfbfb',
        whatido_back: '#fff',
        text_color: '#000',
        box_shadow: '0 2px 15px rgba(0,0,0,.15)'
      };
    }

  }

  componentDidMount(){
    document.title = "Cezar's personal page";
    if (localStorage.getItem('dark_mode') == undefined) {
      localStorage.setItem('dark_mode', false);
    }

  }


  toggleMode = () => {
    let a = localStorage.getItem('dark_mode');
    if (a == 'false') {
      a = 'true';
    }else{
      a = 'false';
    }
    if (a == 'true') {
      this.setState({container_back: "#26242E"});
      this.setState({text_color: '#e4dada'});
      this.setState({whatido_back: '#212121'});
      this.setState({box_shadow: '0px 0px 9px rgb(229,229,229,0.6)'});
      localStorage.setItem('dark_mode', 'true');
    }else{
      this.setState({container_back : '#fbfbfb'});
      this.setState({text_color: '#000'});
      this.setState({whatido_back: '#fff'});
      this.setState({box_shadow: '0 2px 15px rgba(0,0,0,.15)'});
      localStorage.setItem('dark_mode', false);
    }

    let whatido_style = {
      backgroundColor: this.state.whatido_back,
      color: this.state.text_color
    }

    let portfolio_style = {
      backgroundColor: this.state.container_back,
      color: this.state.text_color
    };
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
  let whatido_style = {
    backgroundColor: this.state.whatido_back,
    color: this.state.text_color
  };
  let portfolio_style = {
    backgroundColor: this.state.container_back,
    color: this.state.text_color
  };

  let input;

  if (localStorage.getItem('dark_mode') == 'true') {
    input = 'checked';
  }else{
    input = '';
  }
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
            <p>Loading...</p>
          </div>
          </Placeholder>
      </Preloader>

      <header ref="header" style={ {backgroundColor: `${this.state.container_back}` } }>
    		<div className="app_menu" style={ {color: `${this.state.text_color}` } }>
        <div className='icons_header_anim'>
         <img src={div}/>
         <img src={a}/>
         <img src={a1}/>
         <img src={a2}/>
         <img src={a3}/>
        </div>
    			<div className="top">
    				<div className="left">
    					<a href="#services"><p>Услуги</p></a>
    					<a href="#portfolio"><p>Портфолио</p></a>
    					<a href="#price"><p>Стоймость</p></a>
    				</div>
    				<div className="right">
            <div className="social">
                <div className="icons">
                    <a href='https://vk.com/chizim' target="_blank"><i className="fab fa-vk vk"></i></a>
                    <a href='https://www.facebook.com/profile.php?id=100008270531523' target="_blank"><i className="fab fa-facebook-f facebook"></i></a>
                    <a href='https://t.me/ChizimWebStudio' target="_blank"><i className="fab fa-telegram twitter"></i></a>
                    <a href='https://www.instagram.com/cezar_chizim/?hl=en' target="_blank"><i className="fab fa-instagram instagram"></i></a>
                </div>
            </div>
    				</div>
    			</div>
    			<div className="menu_content">
    				<div className="block_name">
    					<img src={logo_text_2}/>
    					<p>Frontend и backend-разработка</p>
    				</div>
    				<div className="block_name_butt">
              <input type="checkbox" id="switch" checked={input} />
              <div class="app">
                  <div class="content">
                    <label for="switch" onClick={this.toggleMode.bind(this)}>
                      <div class="toggle" style={ {boxShadow: `${this.state.box_shadow}` } }></div>
                      <div class="names">
                        <p class="light">Light</p>
                        <p class="dark">Dark</p>
                      </div>
                    </label>
                  </div>
              </div>
    				</div>
    			</div>
    		</div>
    	</header>
      <div className="whatido" id='services' style={whatido_style }>
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

      <div className="portfolio" id='portfolio' style={ portfolio_style }>

          <h2>Примеры наших работ</h2>

          <div className="slider" style={{backgroundColor: `${this.state.container_back}`}}>
              <div className="circle-left" onClick={this.toLeft.bind(this)}>
                  <img id="to_left" src={arrow}/>
              </div>

              <div className="images-container">
                  <div className="images-items" style={ { marginLeft: `${ this.state.pos }px` } }>
                      <Link className="link_port" to="/portfolio/restaurant" style={{color: `${this.state.text_color}`}}><div className="image">
                        <div className="pics1"></div>
                        <p>Сайт ресторана</p>
                      </div></Link>
                      <Link className="link_port" to="/portfolio/city_hall_page#container_hall" style={{color: `${this.state.text_color}`}}><div className="image">
                        <div className="pics2"></div>
                        <p>Сайт мэрии</p>
                      </div></Link>
                      <a className="link_port" href="https://www.polzabio.ru/" target="_blank" style={{color: `${this.state.text_color}`}}><div className="image">
                        <div className="pics3"></div>
                        <p>Рекламный сайт биоудобрения</p>
                      </div></a>
                      <Link className="link_port" to="/portfolio/site4" style={{color: `${this.state.text_color}`}}><div className="image">
                        <div className="pics4"></div>
                        <p>site4</p>
                      </div></Link>
                      <Link className="link_port" to="/portfolio/site5" style={{color: `${this.state.text_color}`}}><div className="image">
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

      <div className="footer" style={ whatido_style}>
          <div className="footer-content">
              <div className="footer-menu">
                  <p>Услуги</p>
                  <p>Портфолио</p>
                  <p>Стоймость</p>
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
