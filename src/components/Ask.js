import React, {Component} from 'react';
import { TransitionGoup, CSSTransition } from "react-transition-group";
import '../Preloader.css'
import '../style/ask.css'
import { Preloader, Placeholder } from 'react-preloading-screen';
import { Link } from 'react-router-dom'

class Ask extends Component {

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
      <div className="ask__body">
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
            <div className='ask_container'>
                <div className='about_photo'></div>
                <textarea></textarea>
                <button>Отправить</button>
            </div>
        </div>
      </div>
    )
  }
}
export default Ask;
