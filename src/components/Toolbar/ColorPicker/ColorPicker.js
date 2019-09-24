import React, {Component} from 'react';
import './style.scss';
import Icon  from '../../Misc/Icon';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import {switchColor}                 from '../../../actions/paintColor';

class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.inputColor = React.createRef();
  }
  render(){
    const {switchColor, paintColor} = this.props;
    return(
      <div className={`ColorPicker`}>
        <input ref={this.inputColor} type='color' style={{display: 'none'}} onChange={(e) => switchColor(e.target.value)} />
        <Icon icon='palette' size='2x' color={paintColor} hoverColor={paintColor}
              onClick={() => this.inputColor.current.click()} /> {/*trigger click on inputColor*/}
      </div>
    );
  }
}

const mapStateToProps = ({paintColor}) => ({paintColor});
const mapDispatchToProps = (dispatch) => (bindActionCreators({switchColor}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
