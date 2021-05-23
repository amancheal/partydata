import {combineReducers} from 'redux';
import { navReducer } from './dashBoardReducer';
import display from './displayReducers';
import auth from './authReducers';

export default combineReducers({
    nav: navReducer,
    dis: display,
    auth: auth
})
