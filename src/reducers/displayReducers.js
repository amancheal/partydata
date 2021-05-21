

const initState = []


const display = (state = initState, action)=>{
    switch(action.type){
        case 'DISPLAY' :
            return  [...state, action.payload];
            default:
                return state;
    }
}

export default display;
