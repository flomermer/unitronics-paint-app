import React        from 'react';
import { Circle as LibCircle }   from 'react-konva';

const Circle = ({shape}) => {
  if(!shape || !shape.radius || shape.type!=='circle') return null;
  return (
    <LibCircle
      x={shape.startX}
      y={shape.startY}
      radius={shape.radius}
      fill={shape.fill}
      shadowBlur={2}
    />
  );
}

export default Circle;
