import React        from 'react';
import Square       from '../Shapes/Square';
import Circle       from '../Shapes/Circle';

const DrawShape = ({shape, onSelect, isSelected, onChange}) => {
  switch(shape.type){
    case 'square':
      return <Square shape={shape} isSelected={isSelected} onSelect={onSelect} onChange={onChange} />
    case 'circle':
      return <Circle shape={shape} isSelected={isSelected} onSelect={onSelect} onChange={onChange} />
    default:
      return null;
  }
}

export default DrawShape;
