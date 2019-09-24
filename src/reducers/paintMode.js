import {SWITCH_MODE} from '../actions/paintMode';

export default function(state=null, action){
  switch(action.type){
    case SWITCH_MODE:
      return action.payload;
    default:
      return state;
  }
}
