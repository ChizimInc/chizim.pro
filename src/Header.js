import React,{ Component } from 'react';
import './Header.css'
import Ellipse_1 from './img/Ellipse_1.png'
import logo_text_2 from './img/logo_text_2.png';

class Header extends Component{
  render(){
    return(
      <header>
    		<div class="app_menu">
    			<div class="top">
    				<div class="left">
    					<p>Услуги</p>
    					<p>Портфолио</p>
    					<p>Стоймость</p>
    				</div>
    				<div class="right">
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
    			<div class="menu_content">
    				<div class="block_name">
    					<img src={logo_text_2}/>
    					<p>Frontend и backend-разработка</p>
    				</div>
    				<div class="block_name_butt">
    					<button>Заказать звонок</button>
    				</div>
    			</div>
    		</div>
    	</header>
    )
  }
}

export default Header;
