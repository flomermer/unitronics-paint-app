import { combineReducers }    from 'redux';
import paintMode              from './paintMode';
import paintColor             from './paintColor';

const rootReducer = combineReducers({
    paintMode,
    paintColor
});

export default rootReducer;
