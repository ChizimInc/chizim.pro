import React, {Component} from 'react';
import { TransitionGoup, CSSTransition } from "react-transition-group";
import './Preloader.css'
import './style/about.css'
import { Preloader, Placeholder } from 'react-preloading-screen';
import { Link } from 'react-router-dom'

import react from './img/about/react.png'
import css from './img/about/css.png'
import git from './img/about/git.png'
import html from './img/about/html.png'
import jQuery from './img/about/jQuery.png'
import js from './img/about/js.png'
import linux from './img/about/linux.png'
import php from './img/about/php.png'
import redux from './img/about/redux.png'
import mysql from './img/about/sql.png'
import webPack from './img/about/webPack.png'
import node from './img/about/nodejs.png'
import vector from './img/about/vector1.png'

class About extends Component {

  constructor(props){
    super(props);
    this.state = 
    {
      show: false
    };

    this.show = this.show.bind(this);
  }

  show(){
    this.setState()
  }

  render(){
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
        <div className='About_cont'>
          <div className="top">
              <div className="left">
                <Link to="/"><p>Главная</p></Link>
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
          <div className='about_cont_min'>
            <div className='about_cont_min_min'>
              <div className='about_cont_top'>
                <div className='about_top_left'>
                  <div className='about_photo'></div>
                  <div className='about_name'>
                    <div className='about_name_surname'>
                      <p>Chizim Cezar</p>
                    </div>
                    <div className='about_name_profession'>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
                <div className='about_top_right'>
                  <div className='about_curse'>
                    <p>Курсы:</p>
                  </div>
                  <div className='about_curse_name'>
                    Веб-разработчик - PRO
                  </div>
                </div>
              </div>
              <div className='about_cont_bottom'>
                <div className='about_instruments_cont'>
                  <p>Владение инструментами</p>
                  <div className='about_instruments'>
                    <div>
                      <div className='hover__element'>
                        Html 5
                      </div>
                      <img src={html} />
                      </div>
                    <div><img src={css} /></div>
                    <div><img src={js} /></div>
                    <div><img src={jQuery} /></div>
                    <div><img src={linux} /></div>
                    
                    
                    <img src={react} />
                    <img src={redux} />
                    <img src={node} />
                    <img src={mysql} />
                    <img src={php} />
                    <img src={webPack} />
                    <img src={git} />
                  </div>
                </div>
                <div className='about_me'>
                  <div className='about_line'>
                    <span />
                    <img src={vector}/>
                    <span />
                  </div>
                  <div className='about_text'>
                    <p>Верстаю веб-страницы и делаю интернет-магазины, разбираюсь в
                      публикации кода на сервере. Составляю сложные SQL-запросы, создаю и работаю
                      с реляционными базами данных. Могу разобраться с legacy-кодом,
                      а также найти новое решение на Stackoverflow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About;
