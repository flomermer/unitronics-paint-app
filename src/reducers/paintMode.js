import {SWITCH_MODE} from '../actions/paintMode';

export default function(state='square', action){
  switch(action.type){
    case SWITCH_MODE:
      return action.payload;
    default:
      return state;
  }
}
