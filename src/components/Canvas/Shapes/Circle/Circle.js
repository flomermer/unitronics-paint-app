import React                                  from 'react';
import { Circle as LibCircle, Transformer }   from 'react-konva';

const Circle = ({shape, onSelect, isSelected, onChange}) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  if(!shape || !shape.radius || shape.type!=='circle') return null;
  return (
    <React.Fragment>
      <LibCircle
        id={shape.id}
        ref={shapeRef}
        onClick={onSelect}
        {...shape}
        draggable
        onDragEnd={e => {
          onChange({
            ...shape,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transformer is changing scale
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shape,
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY
          });
        }}
      />
      {isSelected && <Transformer ref={trRef} />}
    </React.Fragment>
  );
}

export default Circle;
