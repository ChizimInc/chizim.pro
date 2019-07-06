import React,{ Component } from 'react';
import './Header.css'
import Ellipse_1 from './img/Ellipse_1.png'
import logo_text_2 from './img/logo_text_2.png';
import div from './img/div.png'
import a from './img/a.png'
import a1 from './img/a1.png'
import a2 from './img/a2.png'
import a3 from './img/a3.png'

class Header extends Component{
  render(){
    return(
      <header>
    		<div className="app_menu">
        <div className='icons_header_anim'>
         <img src={div}/>
         <img src={a}/>
         <img src={a1}/>
         <img src={a2}/>
         <img src={a3}/>
        </div>
    			<div className="top">
    				<div className="left">
    					<p>Услуги</p>
    					<p>Портфолио</p>
    					<p>Стоймость</p>
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
    					<button>Заказать звонок</button>
    				</div>
    			</div>
    		</div>
    	</header>
    )
  }
}

export default Header;
