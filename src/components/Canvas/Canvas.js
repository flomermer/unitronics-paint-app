import React, {Component} from 'react';
import './style.scss';
import { Stage } from 'react-konva';
import {connect} from 'react-redux';
import DrawShape from './DrawShape';

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
    this.onMouseDown    =   this.onMouseDown.bind(this);
    this.onMouseUp      =   this.onMouseUp.bind(this);
    this.onMouseMove    =   this.onMouseMove.bind(this);
    this.draw           =   this.draw.bind(this);
    this.renderShapes   =   this.renderShapes.bind(this);
    this.addShape       =   this.addShape.bind(this);
  }
  onMouseDown(e){
    const {layerX, layerY} = e.evt;
    const draw = {...this.state.draw, isDrawing: true, startX: layerX, startY: layerY};
    this.setState({draw});
  }
  onMouseUp(){
    this.addShape(this.createShape());
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
  createShape(){
    const {paintMode, paintColor} = this.props;
    const {startX, startY, offsetX, offsetY} = this.state.draw;
    if(offsetX===0 && offsetY===0) return {};

    const newShapeID  = this.state.shapes.length+1;
    const newShape = {shape_id: newShapeID, type: paintMode, startX, startY, fill: paintColor};
    switch(paintMode){
      case 'square':
        newShape.width  = offsetX-startX;
        newShape.height = offsetY-startY;
        break;
      case 'circle':
        newShape.radius = Math.round(Math.sqrt((Math.pow(offsetX-startX,2) + Math.pow(offsetY-startY,2)))); //radius = sqrt(x^2+y^2)
        break;
      default:
        return;
    }
    return newShape;
  }
  addShape(newShape){
    this.setState({shapes: [...this.state.shapes, newShape]});
  }
  renderShapes(){
    return this.state.shapes.map((shape) => {
      return <DrawShape key={shape.shape_id} shape={shape} />;
    });
  }
  render(){
    const {width, height}  =   this.props;
    const {draw}           =   this.state;
    return(
      <div className={`Canvas ${this.props.className}`}>
        <Stage  width={width} height={height}
                onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove}>
          {this.renderShapes()}
          {draw.isDrawing && <DrawShape shape={this.createShape()} />}
        </Stage>
      </div>
    );
  }
}
const mapStateToProps = ({paintMode, paintColor}) => ({paintMode, paintColor});
export default connect(mapStateToProps)(Canvas);
