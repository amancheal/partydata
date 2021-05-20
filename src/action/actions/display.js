import {DISPLAY} from '../types';
import axios from 'axios';
const display =()=> {
    return(dispatch)=>{
    axios.get('http://41.190.25.21:3001/dashboard')
    .then(data =>{
        dispatch({
            type: 'DISPLAY',
            payload: data.data
        })

    })
    }
}

export default  display;
