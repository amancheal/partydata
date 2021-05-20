import {combineReducers} from 'redux';
import { navReducer } from './dashBoardReducer';
import display from './displayReducers';

export default combineReducers({
    nav: navReducer,
    dis: display
})
