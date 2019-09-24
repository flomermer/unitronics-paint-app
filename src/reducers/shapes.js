import {ADD_SHAPE, UPDATE_SHAPE, DELETE_SHAPE, MOVE_FORWARD, MOVE_BACKWARD}  from '../actions/shapes';

export default function(state=[], action){
  switch(action.type){
    case ADD_SHAPE:
      return [...state, action.payload];
    case UPDATE_SHAPE:
      return state.map(s => s.id===action.payload.id ? action.payload : s);
    case DELETE_SHAPE:
      return state.filter(s => s.id!==action.payload.id);
    case MOVE_FORWARD:
      return [...state.filter(s => s.id!==action.payload.id), action.payload];
    case MOVE_BACKWARD:
      return [action.payload, ...state.filter(s => s.id!==action.payload.id)];
    default:
      return state;
  }
}
