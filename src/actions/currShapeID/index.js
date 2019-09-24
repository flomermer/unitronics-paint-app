export const SET_SHAPE_ID     =   'SET_SHAPE_ID';
export const CANCEL_SELECTION =   'CANCEL_SELECTION';

export function setShapeID(shape_id){
  return{
    type: SET_SHAPE_ID,
    payload: shape_id
  };
}

export function cancelSelection(){
  return setShapeID(null);
}
