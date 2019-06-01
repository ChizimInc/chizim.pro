import React from 'react';
import logo from './logo.svg';
import './App.css';
import MetaTags from 'react-meta-tags';

function App() {
  return (
    <div class="container">
      <div class="menu">
          <div class="left">
              <p>Услуги</p>
              <p>Портфолио</p>
              <p>Стоймость</p>
          </div>
          <div class="right">
              <p>+373609993331</p>
              <button>Заказать звонок</button>
          </div>


          <div class="get-order">
              <input type="text" placeholder="name"/>
              <input type="text" placeholder="phone"/>
          </div>
      </div>

      <div class="block-top">
          <div class="block-name">
              <h2>Chizim Cezar</h2>
              <p>Frontend-разработчик и веб-верстальщик</p>
              <button>Узнать больше</button>
          </div>
          <div class="icons">
              <img src="./src/img/{ }.png" id="one"/>
              <img src="./img/_div_.png" id="_div"/>
              <img src="./img/a.png" id="a"/>
              <img src="./img/_div_.png" id="_div_"/>
              <img src="./img/___ copy.png" id="copy"/>
          </div>
      </div>

      <div class="whatido">
          <h2>Что я делаю</h2>
          <div class="one">
              <div class="block-one">
                  <img src="img/tools.png"/>
                  <p>Вёрстка лендинг–страниц
                      и сайтов любой сложности
                  </p>
              </div>

              <div class="block-one">
                  <img src="img/responsive.png"/>
                  <p>Адаптивная вёрстка под все
                      браузеры и устройства
                  </p>
              </div>

              <div class="block-one">
                  <img src="img/programming.png"/>
                  <p id="ml">Frontend–разработка
                      и программирование
                  </p>
              </div>

              <div class="block-one">
                  <img src="img/coding (1).png"/>
                  <p>Исправление и доработка
                      существующей вёрстки
                  </p>
              </div>
          </div>

          <button>Узнать больше</button>
      </div>

      <div class="portfolio">

          <h2>Примеры мойх работ</h2>

          <div class="slider">
              <div class="circle-left">
                  <img id="to_left" src="./img/arrow.png"/>
              </div>

              <div class="images-container">
                  <div class="images-items">
                      <div class="image">
                        <div></div>
                        <p>site1</p>
                      </div>
                      <div class="image">
                        <div></div>
                        <p>site2</p>
                      </div>
                      <div class="image">
                        <div></div>
                        <p>site3</p>
                      </div>
                      <div class="image">
                        <div></div>
                        <p>site4</p>
                      </div>
                      <div class="image">
                        <div></div>
                        <p>site5</p>
                      </div>
                  </div>

              </div>

              <div class="circle-right">
                  <img id="to_right" src="./img/arrow.png"/>
              </div>
          </div>
          <button>Узнать больше</button>


      </div>

      <div class="reclama-block">
          <h2>Адаптивная вёрстка под все устройства
                  и браузеры от 3000 рублей всего за 4 часа.*</h2>

          <p>* Срок и стоимость могут отличаться от заявленных и рассчитываются  индивидуально,
                  в зависимости от сложности задач.</p>
      </div>

      <div class="footer">
          <div class="footer-content">
              <div class="footer-menu">
                  <p>Услуги</p>
                  <p>Портфолио</p>
                  <p>Стоймость</p>
              </div>

              <div class="contact">
                  <div class="phone">
                      <i class="fas fa-phone"></i>
                      +37360999331
                  </div>
                  <div class="email">
                      <i class="fas fa-envelope"></i>
                      chizimcezar@usa.com
                  </div>
              </div>

              <div class="social">
                  <button>Заказать звонок</button>
                  <div class="icons">
                      <span class="wk-icon"></span>
                      <span class="fb-icon"></span>
                      <span class="twiter-icon"></span>
                      <span class="instagram-icon"></span>
                  </div>
              </div>
          </div>
      </div>

      <footer>
              &copy; Chizim Cezar, 2018
      </footer>
  </div>
  );
}

export default App;
