import { FEED_BACK_PORTAL, DASH_BOARD, MANAGE_STAKE_HOLDERS, ALL_STAKE_HOLDERS } from "../action/types";

const initState = "Dashboard";

const navReducer = (state = initState, action) => {
    switch (action.type) {
        case DASH_BOARD:
            return "Dashboard";
        case MANAGE_STAKE_HOLDERS:
            return "Manage Stake Holders";
        case ALL_STAKE_HOLDERS:
            return "All Stake Holders";
        case FEED_BACK_PORTAL:
            return "Feedback Portal";
        default:
            return state;
    }
};


export { navReducer }


