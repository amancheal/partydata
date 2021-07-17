import {FEED_BACK_FORM, OVER_VIEW, ELECTION_DASHBOARD, VOTE, REGISTER_TO_VOTE} from '../action/types';

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
                case REGISTER_TO_VOTE:
                return 'REGISTER-TO-VOTE';
            default:
                return state;


}

}

export default userNav;
