import React, {Component} from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Icon extends Component{
  constructor(props){
    super(props);
    this.state = {hover: false};

    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover(){
    this.setState({hover: !this.state.hover});
  }
  render(){
    let {className, icon, title, size, style, hoverStyle, onClick, faType} = this.props;
    let color = !this.state.hover ? this.props.color : this.props.hoverColor ? this.props.hoverColor : this.props.color;
    let theStyle = !this.state.hover ? style : this.props.hoverStyle ? hoverStyle : this.props.style;
    
    return(
      <FontAwesomeIcon className={`Icon ${className} ${icon}`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
        icon={[faType || 'fas',icon]} color={color} size={size} title={title} onClick={onClick} style={theStyle} />
    );
  }
}

export default Icon;
