import {combineReducers} from 'redux';
import DashBoardReducer from './dashBoardReducer';


export default combineReducers({
    nav:DashBoardReducer
})
