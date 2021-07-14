import {FEED_BACK_FORM, OVER_VIEW, ELECTION_DASHBOARD, VOTE} from '../action/types';

const initState  = 'OVER-VIEW';

const userNav =(state = initState, action)=>{

switch(action.type){
    case OVER_VIEW:
        return 'OVER-VIEW';
        case ELECTION_DASHBOARD:
            return 'ELECTION DASHBOARD';
            case  FEED_BACK_FORM:
            return 'FEED-BACK FORM';
            case VOTE:
                return 'E-VOTING';
            default:
                return state;


}

}

export default userNav;
