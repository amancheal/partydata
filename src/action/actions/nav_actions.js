

export function updateNav(value) {
    return (dispatch, _, __) => {
        dispatch({ type: value });
    }

}
export function checkAuth(){
    return (dispatch)=>{
        if(localStorage.getItem('token')){
            return dispatch({
                type: 'NEXT',
                payload: 'Go'
            })
        }else{
            return dispatch({
                type: 'WAIT',
                payload: 'Stop'
            })
        }
    }
}
