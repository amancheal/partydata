import {combineReducers} from 'redux';
import { navReducer } from './dashBoardReducer';


export default combineReducers({
    nav: navReducer
})
