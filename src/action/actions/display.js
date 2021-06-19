
import axios from 'axios';

const display =()=> {
    return(dispatch)=>{
    axios.get('http://192.168.6.100:3000/dashboard', {
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
