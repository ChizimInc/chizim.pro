import React,{ Component } from 'react'
import '../style/notification.css'

class Notification extends Component {

  constructor(){
    super();
  }
  componentDidMount(){
    if (sessionStorage.getItem('close')) {
      let variable = sessionStorage.getItem('close');
      if (variable == 'false') {
        this.refs.block.style.display = "block";
      }else{
        this.refs.block.style.display = "none";      }
    }else{
      sessionStorage.setItem('close', false)
    }
  }

  closes(){
    this.refs.block.style.display = "none";
    sessionStorage.setItem('close', true);
  }

  render(){
    return(
      <div className='not_block_active' ref="block">
        <div className='not_top'>
          <p>Предупреждение</p>
          <i class="far fa-times-circle" onClick={this.closes.bind(this)}></i>
        </div>
        <div className='not_bottom'>
          <p>Сайт находится в разработке.Некоторые компоненты могут отображаться некорректно
           на некоторых устройствах.Sorry за неудобство</p>
           <i class="fas fa-tools"></i>
        </div>
      </div>
    )
  }
}

export default Notification;
