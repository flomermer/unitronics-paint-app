export const ADD_SHAPE       =   'ADD_SHAPE';
export const UPDATE_SHAPE    =   'UPDATE_SHAPE';
export const DELETE_SHAPE    =   'DELETE_SHAPE';
export const MOVE_FORWARD    =   'MOVE_FORWARD';
export const MOVE_BACKWARD   =   'MOVE_BACKWARD';

export function addShape(shape){
  return{
    type: ADD_SHAPE,
    payload: shape
  };
}

export function updateShape(shape){
  return{
    type: UPDATE_SHAPE,
    payload: shape
  };
}

export function deleteShape(shape){
  return{
    type: DELETE_SHAPE,
    payload: shape
  };
}

export function moveForward(shape){
  return{
    type: MOVE_FORWARD,
    payload: shape
  };
}

export function moveBackward(shape){
  return{
    type: MOVE_BACKWARD,
    payload: shape
  };
}
