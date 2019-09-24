import React, {Component} from 'react';
import './style.scss';
import { Stage, Layer, Rect } from 'react-konva';
import {connect} from 'react-redux';

class Canvas extends Component{
  render(){
    const {width, height} = this.props;
    return(
      <div className={`Canvas ${this.props.className}`}>
        <Stage width={width} height={height}>
          <Layer>
            <Rect
              x={50}
              y={70}
              width={200}
              height={150}
              fill="blue"
              shadowBlur={7}
            />
          </Layer>
        </Stage>        
      </div>
    );
  }
}
const mapStateToProps = ({paintMode}) => ({paintMode});
export default connect(mapStateToProps)(Canvas);
