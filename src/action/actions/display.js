
import axios from 'axios';
const display =()=> {
    return(dispatch)=>{
    axios.get('http://192.168.6.100:3001/dashboard')
    .then(data =>{
        dispatch({
            type: 'DISPLAY',
            payload: data.data
        })

    })
    }
}

export default  display;
