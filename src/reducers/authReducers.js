
const initState = 'Stop'

const authChecker = (state = initState, action) => {
    switch (action.type) {
        case 'NEXT':
            return action.payload;
        case 'WAIT':
            return action.payload;
        default:
            return state
    }
}

export default authChecker;
