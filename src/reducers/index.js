import { combineReducers }    from 'redux';
import paintMode              from './paintMode';
import paintColor             from './paintColor';
import currShapeID            from './currShapeID';
import shapes                 from './shapes'

const rootReducer = combineReducers({
    paintMode,
    paintColor,
    currShapeID,
    shapes
});

export default rootReducer;
