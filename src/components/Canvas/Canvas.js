import React, {Component} from 'react';
import './style.scss';
import { Stage, Layer } from 'react-konva';
import {connect} from 'react-redux';
import DrawLayer from './DrawLayer';

class Canvas extends Component{
  constructor(props){
    super(props);
    this.state = {
      shapes: [],
      draw: {
        isDrawing: false,
        startX: 0, startY:0,
        offsetX:0, offsetY:0
      }
    }
    this.onMouseDown  =   this.onMouseDown.bind(this);
    this.onMouseUp    =   this.onMouseUp.bind(this);
    this.onMouseMove  =   this.onMouseMove.bind(this);
    this.draw         =   this.draw.bind(this);
  }
  onMouseDown(e){
    const {layerX, layerY} = e.evt;
    const draw = {...this.state.draw, isDrawing: true, startX: layerX, startY: layerY};
    this.setState({draw});
  }
  onMouseUp(){
    const draw = {...this.state.draw, isDrawing: false, offsetX: 0, offsetY: 0};
    this.setState({draw});
  }
  onMouseMove(e){
    if(this.state.draw.isDrawing)
      this.draw(e);
  }
  draw(e){
    const {offsetX, offsetY} = e.evt;
    const draw = {...this.state.draw, offsetX, offsetY};
    this.setState({draw});
  }
  render(){
    const {width, height} =   this.props;
    const {draw}          =   this.state;
    return(
      <div className={`Canvas ${this.props.className}`}>
        <Stage  width={width} height={height}
                onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>
          {draw.isDrawing && <DrawLayer {...draw} />}
          <Layer className='shapesLayer'>

          </Layer>
        </Stage>
      </div>
    );
  }
}
const mapStateToProps = ({paintMode}) => ({paintMode});
export default connect(mapStateToProps)(Canvas);
