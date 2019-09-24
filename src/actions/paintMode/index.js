export const SWITCH_MODE    =   'SWITCH_MODE';

export function switchMode(newMode){
  return{
    type: SWITCH_MODE,
    payload: newMode
  };
}
