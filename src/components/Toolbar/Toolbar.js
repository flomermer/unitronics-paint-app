import React, {Component} from 'react';
import './style.scss';
import {connect} from 'react-redux';
import {bindActionCreators}           from 'redux';
import {switchColor}                  from '../../actions/paintColor';
import {deleteShape,updateShape}      from '../../actions/shapes';
import ModeButton                     from './ModeButton';
import ColorPicker                    from './ColorPicker';
import Icon                           from '../Misc/Icon';

class Toolbar extends Component{
  render(){
    const {paintColor, currShapeID, shapes }      = this.props;
    const {switchColor, updateShape, deleteShape} = this.props;
    const currShape = shapes.filter(s => s.id===currShapeID)[0];
    return(
      <div className={`Toolbar ${this.props.className}`}>
        <div className='group'>
          <header>Shapes</header>
          <main>
            <ModeButton mode='circle' icon='circle' />
            <ModeButton mode='square' icon='square' />
          </main>
        </div>
        <div className='group'>
          <header>View</header>
          <main>
            <ColorPicker color={paintColor} onChange={(color) => switchColor(color)} />
          </main>
        </div>
        {currShape &&
          <div className='group curr-shape'>
            <header><span style={{color: currShape.fill}}>{currShape.type}</span></header>
            <main>
              <Icon icon="trash" title={`remove selected ${currShape.type}`} onClick={() => deleteShape(currShape)} />
              <ColorPicker color={currShape.fill} onChange={(color) => updateShape({...currShape, fill: color})} title={`selected ${currShape.type} fill color`}/>

            </main>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({currShapeID, shapes, paintColor}) => ({currShapeID, shapes, paintColor});
const mapDispatchToProps = (dispatch) => (bindActionCreators({switchColor, deleteShape, updateShape}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
