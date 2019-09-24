import {SET_SHAPE_ID} from '../actions/currShapeID';
import {DELETE_SHAPE} from '../actions/shapes';

export default function(state=null, action){
  switch(action.type){
    case SET_SHAPE_ID:
      return action.payload;
    case DELETE_SHAPE:
      return null;
    default:
      return state;
  }
}
