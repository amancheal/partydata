

export function updateNav(value) {
    return (dispatch, _, __) => {
        dispatch({ type: value });
    }

}
