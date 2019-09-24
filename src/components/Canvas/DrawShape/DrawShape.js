import React        from 'react';
import { Layer }    from 'react-konva';
import Square       from '../Shapes/Square';
import Circle       from '../Shapes/Circle';

const DrawShape = ({shape}) => {
  return <Layer>{switchShape(shape)}</Layer>;
}

const switchShape = (shape) => {
  switch(shape.type){
    case 'square':
      return <Square shape={shape} />
    case 'circle':
      return <Circle shape={shape} />
    default:
      return null;
  }
}

export default DrawShape;
