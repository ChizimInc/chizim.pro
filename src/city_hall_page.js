import React, {Component} from 'react';
import './hall.css';
import { Link } from 'react-router-dom'

class Hall extends Component {

  constructor(props){
    super(props);
    this.state = {
      poss : 0
    };
  }

  sliderTime = () => {
    if (this.state.poss > -400) {
      this.setState({poss: this.state.poss - 100});
    }else{
      this.setState({poss: 0});
    }
  }


  componentDidMount(){
    let interval = setInterval(this.sliderTime, 5000);
  }

  render(){
  return(
    <div className='container_hall' id='container_hall'>
      <header>
        <div className="top_hall">
          <div className="social-top">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-odnoklassniki-square"></i>
          </div>
          <div className="logo">
            <p>Primaria Orasului</p>
            <p>Donduseni</p>
          </div>
          <div className="search-div">
            <input type="text" name=""/>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <nav class="menu">
          <ul class="cont-ul">
            <li><a href="#">Donduseni</a>
              <ul class="sub-ul">
                <li><a href="#">Istoria orasului</a>
                </li>
                <li><a href="#">Date statistice</a>
                </li>
                <li><a href="#">Patrimoniul cultural</a></li>
              </ul>
            </li>
            <li><a href="#">Stiri</a></li>
            <li><a href="#">Servicii</a>
              <ul class="sub-ul">
                <li><a href="#">Eliberare adeverinte</a>
                </li>
                <li><a href="#">Eliberarea autoritatilor</a>
                </li>
                <li><a href="#">Modele de cereri </a></li>
              </ul>
            </li>
            <li><a href="#">Primaria</a>
              <ul class="sub-ul">
                <li><a href="#">Biografia primarului</a>
                </li>
                <li><a href="#">Dispozitiile primarului</a>
                </li>
                <li><a href="#">Rapoartele primarului</a></li>
              </ul>
            </li>
            <li><a href="#">Consiliu</a>
              <ul class="sub-ul">
                <li><a href="#">Secretarul consiliului</a></li>
                <li><a href="#">Proiecte de decizii</a></li>
                <li><a href="#">Deciziile consiliului</a></li>
                <li><a href="#">Componenta consiliului</a></li>
                <li><a href="#">Regulamentul consiliului</a></li>
              </ul>
            </li>
            <li><a href="#">Transparenta</a>
              <ul class="sub-ul">
                <li><a href="#">Bugetul orasului</a></li>
                <li><a href="#">Strategia de dezvoltare</a></li>
                <li><a href="#">Deciziile consiliului</a></li>
                <li><a href="#">Componenta consiliului</a></li>
                <li><a href="#">Regulamentul consiliului</a></li>
              </ul>
            </li>
            <li><a href="#">Media</a>
              <ul class="sub-ul">
                <li><a href="#">Video</a></li>
                <li><a href="#">Foto</a></li>
              </ul>
            </li>
            <li><a href="#">Contacte</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="slider">
          <div className="slider-container" style={ { marginLeft: `${ this.state.poss }%` } }>
            <div className="slider-item slider-item1"></div>
            <div className="slider-item slider-item2"></div>
            <div className="slider-item slider-item3"></div>
            <div className="slider-item slider-item4"></div>
            <div className="slider-item slider-item5"></div>
          </div>
        </div>

        <section>
          <div className="section-top">
            <a href="#" className="link"><div className="block-item">
              <i className="fas fa-handshake"></i>
              <p>Strategia de dezvoltare</p>
            </div></a>
            <a href="#" className="link"><div className="block-item">
              <i className="far fa-file-alt"></i>
              <p>Proiecte de decizii</p>
            </div></a>
            <a href="#" className="link"><div className="block-item">
              <i className="far fa-window-restore"></i>
              <p>Oportunitati investitorilor</p>
            </div></a>
            <a href="#" className="link"><div className="block-item">
              <i className="far fa-money-bill-alt"></i>
              <p>Bugetul orasului</p>
            </div></a>
          </div>
          <div className="section-bottom">
            <a href="#" className="link"><div className="block-item">
              <i className="fas fa-university"></i>
              <p>Taxe locale</p>
            </div></a>
            <a href="#" className="link"><div className="block-item">
              <i className="fas fa-book"></i>
              <p>Deciziile consiliului</p>
            </div></a>
            <a href="#" className="link"><div className="block-item">
              <i className="far fa-file-alt"></i>
              <p>Dispozitiile primarului</p>
            </div></a>
            <a href="#" className="link"><div className="block-item">
              <i className="fas fa-credit-card"></i>
              <p>Lecitatii si achizitii</p>
            </div></a>
          </div>
        </section>

        <article>
          <div className="article-header">
            <p>Stiri si evenimente</p>
            <span className="line"></span>
          </div>
          <div className="article-container">
            <div className="article-item">
              <div className="item-pics"></div>
              <div className="article-desc">
                <h2>Ziua internationala a Familiei</h2>
                <p className="news">Noutati ● 15 mai 2019</p>
                <p>Nicăieri nu este mai bine ca acasă, iar acasă este acolo
                  unde sunt oamenii dragi. Familia este cea care mereu va fi
                  alături, orice s-ar întâmpla. În familie te simți cu adevărat
                  bine, pentru că ești liber să fii tu. De Ziua Internațională
                   a Familiei Vă dorim să aveți alături oameni care să Vă
                   susțină în orice […]
                </p>
                <a href="#"><div className="article-read-more">
                  <i className="fas fa-caret-right"></i>
                  <p>Citeste in continuare</p>
                </div></a>
              </div>
            </div>

            <div className="article-item">
              <div className="item-pics"></div>
              <div className="article-desc">
                <h2>Ziua internationala a Familiei</h2>
                <p className="news">Noutati ● 15 mai 2019</p>
                <p>Nicăieri nu este mai bine ca acasă, iar acasă este acolo
                  unde sunt oamenii dragi. Familia este cea care mereu va fi
                  alături, orice s-ar întâmpla. În familie te simți cu adevărat
                  bine, pentru că ești liber să fii tu. De Ziua Internațională
                   a Familiei Vă dorim să aveți alături oameni care să Vă
                   susțină în orice […]
                </p>
                <a href="#"><div className="article-read-more">
                  <i className="fas fa-caret-right"></i>
                  <p>Citeste in continuare</p>
                </div></a>
              </div>
            </div>

            <div className="article-item">
              <div className="item-pics"></div>
              <div className="article-desc">
                <h2>Ziua internationala a Familiei</h2>
                <p className="news">Noutati ● 15 mai 2019</p>
                <p>Nicăieri nu este mai bine ca acasă, iar acasă este acolo
                  unde sunt oamenii dragi. Familia este cea care mereu va fi
                  alături, orice s-ar întâmpla. În familie te simți cu adevărat
                  bine, pentru că ești liber să fii tu. De Ziua Internațională
                   a Familiei Vă dorim să aveți alături oameni care să Vă
                   susțină în orice […]
                </p>
                <a href="#"><div className="article-read-more">
                  <i className="fas fa-caret-right"></i>
                  <p>Citeste in continuare</p>
                </div></a>
              </div>
            </div>

            <div className="article-item">
              <div className="item-pics"></div>
              <div className="article-desc">
                <h2>Ziua internationala a Familiei</h2>
                <p className="news">Noutati ● 15 mai 2019</p>
                <p>Nicăieri nu este mai bine ca acasă, iar acasă este acolo
                  unde sunt oamenii dragi. Familia este cea care mereu va fi
                  alături, orice s-ar întâmpla. În familie te simți cu adevărat
                  bine, pentru că ești liber să fii tu. De Ziua Internațională
                   a Familiei Vă dorim să aveți alături oameni care să Vă
                   susțină în orice […]
                </p>
                <a href="#"><div className="article-read-more">
                  <i className="fas fa-caret-right"></i>
                  <p>Citeste in continuare</p>
                </div></a>
              </div>
            </div>

            <div className="article-item">
              <div className="item-pics"></div>
              <div className="article-desc">
                <h2>Ziua internationala a Familiei</h2>
                <p className="news">Noutati ● 15 mai 2019</p>
                <p>Nicăieri nu este mai bine ca acasă, iar acasă este acolo
                  unde sunt oamenii dragi. Familia este cea care mereu va fi
                  alături, orice s-ar întâmpla. În familie te simți cu adevărat
                  bine, pentru că ești liber să fii tu. De Ziua Internațională
                   a Familiei Vă dorim să aveți alături oameni care să Vă
                   susțină în orice […]
                </p>
                <a href="#"><div className="article-read-more">
                  <i className="fas fa-caret-right"></i>
                  <p>Citeste in continuare</p>
                </div></a>
              </div>
            </div>

            <div className="article-item">
              <div className="item-pics"></div>
              <div className="article-desc">
                <h2>Ziua internationala a Familiei</h2>
                <p className="news">Noutati ● 15 mai 2019</p>
                <p>Nicăieri nu este mai bine ca acasă, iar acasă este acolo
                  unde sunt oamenii dragi. Familia este cea care mereu va fi
                  alături, orice s-ar întâmpla. În familie te simți cu adevărat
                  bine, pentru că ești liber să fii tu. De Ziua Internațională
                   a Familiei Vă dorim să aveți alături oameni care să Vă
                   susțină în orice […]
                </p>
                <a href="#"><div className="article-read-more">
                  <i className="fas fa-caret-right"></i>
                  <p>Citeste in continuare</p>
                </div></a>
              </div>
            </div>

          </div>

          <div className="article-bottom">
            <button type="button" name="button">
              Vezi toate articolele
            </button>
          </div>

        </article>

        <div className="contact-form-container">
          <form className="contact-form" action="" method="post">
            <p>Expediaza mesaj</p>
            <input type="text" name="name" placeholder="Nume*"/>
            <input type="text" name="E-mail" placeholder="E-mail*"/>
            <input type="text" name="phone" placeholder="telefon*"/>
            <input type="text" name="Subject" placeholder="Subiect*"/>
            <textarea name="name" rows="8" cols="80" placeholder="Mesaj*"></textarea>
            <input className="submit" type="submit" value="Trimite mesaj"/>
          </form>
        </div>

      </main>

      <footer>
        © 2019 - Lucrare finala | Toate drepturile sunt rezervate
      </footer>

    </div>
  )
  }
}

export default Hall;
