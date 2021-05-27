
import axios from 'axios';
const display =()=> {
    return(dispatch)=>{
    axios.get('http://41.190.25.21:3001/dashboard', {
        headers:{
            "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("token")}`,
            }

    })
    .then(data =>{
        localStorage.setItem('username', data.data.user.firstname)
        
        dispatch({
            type: 'DISPLAY',
            payload: data.data
        })
    //    return  window.location = '/dashboard';
    })
    }
}

export default  display;
