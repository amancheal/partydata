import axios from 'axios';

const display =()=> {
    return(dispatch)=>{
        //   https://pdpparty.herokuapp.com
    axios.get('https://partyydata.herokuapp.com/dashboard', {
        headers:{
            "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("token")}`,
            }

    })
    .then(data =>{
        localStorage.setItem('username', data.data.firstname)

        dispatch({
            type: 'DISPLAY',
            payload: data.data
        })
    //    return  window.location = '/dashboard';
    })
    }
}

export default  display;
