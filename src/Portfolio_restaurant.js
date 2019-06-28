import './Preloader.css';
import { Preloader, Placeholder } from 'react-preloading-screen';
import React,{ Component } from 'react';
import './restaurant.css'

import logo from './img/portfolio/restaurant/logo.png'
import forma2 from './img/portfolio/restaurant/arrows/forma2.png'
import cart from './img/portfolio/restaurant/cart.png'
import arrow from './img/portfolio/restaurant/arrow.png'
import lavr from './img/portfolio/restaurant/lavr.png'
import house_img from './img/portfolio/restaurant/house_img.jpg'
import sprite_pepper from './img/portfolio/restaurant/sprite_pepper.png'
import meniu_elem_1 from './img/portfolio/restaurant/meniu_elem_1.png'
import meniu_elem_2 from './img/portfolio/restaurant/meniu_elem_2.png'
import meniu_elem_3 from './img/portfolio/restaurant/meniu_elem_3.png'
import meniu_elem_4 from './img/portfolio/restaurant/meniu_elem_4.png'
import meniu_elem_5 from './img/portfolio/restaurant/meniu_elem_5.png'
import meniu_elem_6_hover from './img/portfolio/restaurant/meniu_elem_6_hover.png'
import shape from './img/portfolio/restaurant/shape.png'
import forma1 from './img/portfolio/restaurant/arrows/forma1.png'
import shape2 from './img/portfolio/restaurant/shape2.png'
import to_bottom from './img/portfolio/restaurant/arrows/to_bottom.png'
import about_img4 from './img/portfolio/restaurant/about_img4.jpg'
import shape_footer from './img/portfolio/restaurant/arrows/shape-footer.png'

class Portfolio_restaurant extends Component {

  constructor(props){
    super(props);
    this.state = {
      pos: 0,
      person: 2
    };
  }

  to_left = () => {

  }

  menu_active = (e) => {
    e.preventDefault();
    document.querySelector('.menu-btn').classList.toggle('.menu-btn_active');
    document.querySelector('.menu-nav').classList.toggle('.menu-nav_active');
  }

  render(){
    return(
      <div className="restaurant_container">
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
        <div className="container1">
          <div className="content">
            <header>
              <div className="top_header">
                <div className="left_header">
                  <div className="lang_icon">
                    <p>RU</p>
                    <p>|</p>
                    <p>EN</p>
                  </div>
                  <div className="date">
                    <i className="fas fa-calendar-alt"></i>
                    <p>09.09.19</p>
                    <p>1бат =</p>
                    <p>2.02</p>
                    <p>руб</p>
                  </div>
                </div>
                <div className="right_header">
                  <div className="social_icon">
                    <i className="fab fa-odnoklassniki"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-vk"></i>
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="cart">
                    <img src={cart} alt="cart_header"/>
                    <p className="number">0</p>
                    <p className="moned">бат</p>
                  </div>
                </div>
              </div>
              <div className="down_header">

                <div className="meniu">
                  <p>ГЛАВНАЯ</p>
                  <p>НОВОСТИ</p>
                  <p>МЕНЮ</p>
                  <p>ОПЛАТА И ДОСТАВКА</p>
                  <p>О РЕСТОРАНЕ</p>
                  <p>КОНТАКТЫ</p>
                </div>
                <div className="menu-block">
                  <nav className="menu-nav">
                    <a href="#">ГЛАВНАЯ</a>
                    <a href="#">НОВОСТИ</a>
                    <a href="#">МЕНЮ</a>
                    <a href="#">ОПЛАТА И ДОСТАВКА</a>
                    <a href="#">О РЕСТОРАНЕ</a>
                    <a href="#">КОНТАКТЫ</a>
                  </nav>

                  <a href="#" className="menu-btn" onClick={this.menu_active}>
                    <span></span>
                  </a>
              </div>
                <div className="down_header_right">
                  <div className="adress">
                    <p>SC Piaza 99 Pakbang road Haron, Пхукет, Таиланд</p>
                  </div>
                  <div className="contact_header">
                    <i className="fab fa-viber"></i>
                    <i className="fab fa-whatsapp"></i>
                    <p>+66 88 162 7041</p>
                  </div>
                </div>

              </div>
            </header>
            <div className="center">
              <img src={logo} alt="logo_header"/>
              <button>ЗАРЕЗЕРВИРОВАТЬ СТОЛИК</button>
            </div>
          </div>
        </div>

        <div className="content_bottom">
          <div className="about_left">
            <div className="top_name">
              <p className="name">Ресторан «Чехов»</p>
              <p className="sub_name">- домашний очаг на Пхукете</p>
            </div>
            <div className="text">
              <p>Таиланд - рай на земле! Именно так говорят многие туристы,
                попав впервые на песчаные пляжи Андаманского моря. Мягкий климат,
                обилие экзотических фруктов, роскошные рыбные витрины с омарами,
                крабами, лобстерами и прочими деликатесами. Отдыхать надо на широкую
                ногу. Ведь каждый из нас много трудился, чтобы попасть сюда.
              </p>
              <p>
                Среди всего этого разнообразия есть одно уютное местечко – ресторан "Chekhoff",
                где можно собраться всей семьей, встретиться с друзьями или посидеть одному,
                размышляя о чем-либо, как это делали наши предки - знаменитые писатели,
                философы и простые люди. Таким был и Антон Павлович Чехов.  Он много
                путешествовал, объехал полмира. Выучился на врача, но в душе всегда
                оставался писателем.</p>
            </div>
              <div className="arrow">
                <img src={arrow} alt="arrow"/>
                <p>подробнее</p>
              </div>
          </div>
          <div className="about_right">
            <img className="lavr" src={lavr} alt="lavr"/>
            <img className="house_img" src={house_img} alt="house_img"/>
            <img className="sprite1" src={sprite_pepper} alt="sprite1"/>
          </div>
        </div>


        <div className="container2">
          <div className="name_meniu">
            <p>Меню</p>
          </div>
          <div className="slider_header">
            <div className="arrows_left">
              <img id="to_left" src={forma2}/>
              <img className="elem_2" src={shape}/>
            </div>
            <div className="central_elem">
                <img className="elem_one" src={meniu_elem_6_hover}/>
                <img src={meniu_elem_5}/>
                <img src={meniu_elem_4}/>
                <img src={meniu_elem_3}/>
                <img src={meniu_elem_2}/>
                <img src={meniu_elem_1}/>
            </div>
            <div className="arrows_right">
              <img className="elem_1" src={shape}/>
              <img id="to_right" src={forma1}/>
            </div>
          </div>
          <div className="slider_body">
            <div className="slider_1">
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
            </div>
            <div className="slider_2">
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
              <div className="element_slider">
                <div className="content_slide">
                  <div className="top">
                    <p>Блюдо дня</p>
                  </div>
                  <div className="bottom">
                    <p>125 бат</p>
                  </div>
                </div>
                <div className="slide_name">
                  <p>Supa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sub_slider_button">
            <button className="show_meniu_btn">
              СМОТРЕТЬ ВСЁ МЕНЮ
            </button>
            <button className="show_meniu_bar_btn">
              СМОТРЕТЬ БАРНОЕ МЕНЮ
            </button>
          </div>
        </div>


        <div className="container3">
          <div className="top">
            <div className="top_line">
              <img src={shape}/>
            </div>
            <div className="photo">
              <div className="photo_elem1">
                <p className="text1">Уютная веранда</p>
                <p className="text2">- приятное времяпреровождение на свежем воздухе</p>
              </div>
              <div className="photo_elem2">
                <p className="text1">Разнообразная кухня</p>
                <p className="text2">- блюда на любой вкус</p>
              </div>
              <div className="photo_elem3">
                <p className="text1">Библиотека русских книг</p>
                <p className="text2">- отдых в приятной атмосфере</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="line">
                <img src={shape2}/>
              </div>
              <div className="form">
                <h2>Зарезервировать столик</h2>
                <form method="get">
                  <div className="input_div">
                    <input type="text" name="name" placeholder="Your name"/>
                    <input type="text" name="phone" placeholder="Contact phone"/>
                    <input type="email" name="email" placeholder="E-mail"/>
                    <div className="text_for_input">
                      <p>Дата:</p>
                      <p className="hour_text">Время:</p>
                      <p className="per_text">Персон:</p>
                    </div>
                    <div className="data_block">
                      <div className="date">
                        <input type="text" name="date" placeholder="08.12.2018"/>
                        <i className="fa fa-calendar-alt"></i>
                      </div>
                      <div className="hour_block">
                        <div className="arrow_down">
                          <img src={to_bottom}/>
                        </div>
                        <div className="show_hour">
                          09:30
                        </div>
                        <div className="arrow_top">
                          <img src={to_bottom}/>
                        </div>
                      </div>
                      <div className="person_block">
                        <div id="pers_d" className="arrow_down">
                          <img src={to_bottom}/>
                        </div>
                        <div className="show_person">
                          2
                        </div>
                        <div id="pers_t" className="arrow_top">
                          <img src={to_bottom}/>
                        </div>
                      </div>
                    </div>
                    <button>ЗАРЕЗЕРВИРОВАТЬ СТОЛИК</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="right">
              <img className="shape" src={shape2}/>
              <img className="about_img4" src={about_img4}/>
            </div>
          </div>
        </div>


        <div className="container4">
          <div className="left_cont4">
            <p className="text1">Специальное предложение</p>
            <p className="text2">- радуем наших посетителей!</p>
          </div>
          <div className="right_cont4">
            <div className="container_block">
              <div className="block_select">
                <div className="text_align">
                  <p className="text1">Бизнес-ланч</p>
                  <p className="text2">(3 blide + soc)</p>
                </div>
                <p className="price">160 бат</p>
              </div>
              <div className="block_select">
                <div className="text_align">
                  <p className="text1">Бизнес-ланч</p>
                  <p className="text2">(3 blide + soc)</p>
                </div>
                <p className="price">160 бат</p>
              </div>
              <div className="block_select">
                <div className="text_align">
                  <p className="text1">Бизнес-ланч</p>
                  <p className="text2">(3 blide + soc)</p>
                </div>
                <p className="price">160 бат</p>
              </div>
              <div className="block_select">
                <div className="text_align">
                  <p className="text1">Бизнес-ланч</p>
                  <p className="text2">(3 blide + soc)</p>
                </div>
                <p className="price">160 бат</p>
              </div>
              <div className="block_select">
                <div className="text_align">
                  <p className="text1">Бизнес-ланч</p>
                  <p className="text2">(3 blide + soc)</p>
                </div>
                <p className="price">160 бат</p>
              </div>
              <div className="block_select">
                <div className="text_align">
                  <p className="text1">Бизнес-ланч</p>
                  <p className="text2">(3 blide + soc)</p>
                </div>
                <p className="price">160 бат</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container5">
        </div>

        <div className="container6">
          <div className="footer_top">
            <div className="logo_footer">
              <img src={logo} alt="logo_header"/>
            </div>
            <button>ЗАРЕЗЕРВИРОВАТЬ СТОЛИК</button>
            <div className="footer_meniu">
              <div className="footer_meniu_top">
                <div className="footer_meniu_elem">
                  <p>Главная</p>
                  <img src={shape_footer}/>
                </div>
                <div className="footer_meniu_elem">
                  <p>Новости</p>
                  <img src={shape_footer}/>
                </div>
                <div className="footer_meniu_elem">
                  <p>Меню</p>
                  <img src={shape_footer}/>
                </div>
                <div className="footer_meniu_elem">
                  <p>Оплата и доставка</p>
                  <img src={shape_footer}/>
                </div>
                <div className="footer_meniu_elem">
                  <p>О ресторане</p>
                  <img src={shape_footer}/>
                </div>
                <div className="footer_meniu_elem">
                  <p>Контакты</p>
                  <img src={shape_footer}/>
                </div>
              </div>
              <div className="footer_top_sub">
                <p>SC Plaza | 99, Pakbang road, Karon, Пхукет, Таиланд</p>
                <div className="footer_top_right">
                  <div className="footer_top_icon">
                    <i className="fab fa-viber"></i>
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <p>+66 88 162 7041</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="footer_bottom_top">
              <img src={shape}/>
            </div>
            <div className="footer_bottom_bott">
              <div className="footer_bottom_left">
                &copy Copyright 2018
              </div>
              <div className="footer_bottom_central">
                <i className="fab fa-odnoklassniki"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-vk"></i>
                <i className="fab fa-instagram"></i>
              </div>
              <div className="footer_bottom_right">
                <p>RU</p>
                <p>|</p>
                <p>EN</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Portfolio_restaurant;
