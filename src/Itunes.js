import React, {Component} from 'react';
import './itunes.css';
import { Link } from 'react-router-dom'

class Itunes extends Component {

  constructor(props){
    super(props);
    this.state = {
      pos : 0
    };
  }

  render(){
    return(
      <div>Hi iTunes</div>
    )
  }

}

export default Itunes;
