import React        from 'react';
import { Rect }   from 'react-konva';

const Square = ({shape}) => {  
  if(!shape || !shape.width || !shape.height || shape.type!=='square') return null;
  return (
    <Rect
      x={shape.startX}
      y={shape.startY}
      width={shape.width}
      height={shape.height}
      fill={shape.fill}
      shadowBlur={2}
    />
  );
}

export default Square;
