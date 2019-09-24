export const SWITCH_COLOR    =   'SWITCH_COLOR';

export function switchColor(newColor){
  return{
    type: SWITCH_COLOR,
    payload: newColor
  };
}
