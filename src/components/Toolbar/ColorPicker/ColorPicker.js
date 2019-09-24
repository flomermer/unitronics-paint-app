import React, {Component} from 'react';
import './style.scss';
import Icon  from '../../Misc/Icon';

class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.inputColor = React.createRef();
  }
  render(){
    const {color, title} = this.props;
    return(
      <div className={`ColorPicker`}>
        <input ref={this.inputColor} type='color' value={color} style={{display: 'none'}} onChange={(e) => this.props.onChange(e.target.value)} />
        <Icon icon='palette' size='2x' color={color} hoverColor={color} title={title}
              onClick={() => this.inputColor.current.click()} /> {/*trigger click on inputColor*/}
      </div>
    );
  }
}

export default ColorPicker;
