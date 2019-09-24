import React from 'react';
import { Layer, Rect } from 'react-konva';


const DrawLayer = ({startX, startY, offsetX, offsetY}) => {
  if (offsetX===0 && offsetY===0) return null;   //nothing to draw yet
  return (
    <Layer className='DrawLayer'>
      <Rect
        x={startX}
        y={startY}
        width={offsetX-startX}
        height={offsetY-startY}
        fill="blue"
        shadowBlur={7}
      />
    </Layer>
  );
}


export default DrawLayer;


// class DrawLayer extends Component{
//   render(){
//     const {startX, startY, offsetX, offsetY} = this.props;
//     return(
//       <Layer className='DrawLayer' onClick={() => console.log(`tomer`)}>
//         <Rect
//           x={0}
//           y={0}
//           width={200}
//           height={100}
//           fill="blue"
//           shadowBlur={7}
//         />
//       </Layer>
//     );
//   }
// }
