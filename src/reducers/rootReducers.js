import {combineReducers} from 'redux';
import { navReducer } from './dashBoardReducer';
import display from './displayReducers';
import auth from './authReducers';
import userDis from './userDisplayDash';

export default combineReducers({
    nav: navReducer,
    dis: display,
    auth: auth,
    user: userDis
})
