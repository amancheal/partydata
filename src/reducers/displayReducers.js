

const initState = []


const display = (state = initState, action)=>{
    switch(action.type){
        case 'DISPLAY' :
           // localStorage.setItem( 'username' ,action.payload.user.firstname)
            return  [...state, action.payload];
            default:
                return state;
    }
}

export default display;
