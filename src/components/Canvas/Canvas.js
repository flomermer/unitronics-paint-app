import React, {Component} from 'react';
import './style.scss';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import {setShapeID, cancelSelection}from '../../actions/currShapeID';
import {addShape, updateShape}      from '../../actions/shapes';
import { Stage,Layer }              from 'react-konva';
import DrawShape                    from './DrawShape';

class Canvas extends Component{
  constructor(props){
    super(props);
    this.state = {
      draw: {
        isDrawing: false,
        x: 0, y:0,
        offsetX:0, offsetY:0
      }
    }
    this.onMouseDown      =   this.onMouseDown.bind(this);
    this.onMouseUp        =   this.onMouseUp.bind(this);
    this.onMouseMove      =   this.onMouseMove.bind(this);
    this.draw             =   this.draw.bind(this);
    this.renderShapes     =   this.renderShapes.bind(this);
  }
  onMouseDown(e){
    const {layerX, layerY} = e.evt;
    const clickedOnEmpty = e.target === e.target.getStage();
    if(!clickedOnEmpty) return false;

    const draw = {...this.state.draw, isDrawing: true, x: layerX, y: layerY};
    this.setState({draw}, () => this.props.cancelSelection());
  }
  onMouseUp(){
    const newShape = this.createShape();
    const draw = {...this.state.draw, isDrawing: false, offsetX: 0, offsetY: 0};
    this.setState({draw}, () => {
      if(newShape.id)
        this.props.addShape(newShape);
    });
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
    const {x, y, offsetX, offsetY} = this.state.draw;
    if(offsetX===0 && offsetY===0) return {};

    const newShapeID  = this.props.shapes.length+1;
    const newShape = {id: newShapeID, type: paintMode, x, y, fill: paintColor};
    switch(paintMode){
      case 'square':
        newShape.width  = offsetX-x;
        newShape.height = offsetY-y;
        break;
      case 'circle':
        newShape.radius = Math.round(Math.sqrt((Math.pow(offsetX-x,2) + Math.pow(offsetY-y,2)))); //radius = sqrt(x^2+y^2)
        break;
      default:
        return;
    }
    return newShape;
  }
  renderShapes(){
    const {setShapeID, currShapeID, updateShape} = this.props;
    return this.props.shapes.map((shape) => {
      return (<Layer key={shape.id}>
                <DrawShape
                        shape={shape}
                        isSelected={shape.id===currShapeID}
                        onSelect={() => setShapeID(shape.id)}
                        onChange={(shape) => updateShape(shape)}
                />
            </Layer>);
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
          {draw.isDrawing && <Layer><DrawShape shape={this.createShape()} /></Layer>}
        </Stage>
      </div>
    );
  }
}

const mapStateToProps = ({paintMode, paintColor, currShapeID, shapes}) => ({paintMode, paintColor, currShapeID, shapes});
const mapDispatchToProps = (dispatch) => (bindActionCreators({setShapeID, cancelSelection, addShape, updateShape}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
