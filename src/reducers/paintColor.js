import {SWITCH_COLOR} from '../actions/paintColor';

export default function(state='#000', action){
  switch(action.type){
    case SWITCH_COLOR:
      return action.payload;
    default:
      return state;
  }
}
