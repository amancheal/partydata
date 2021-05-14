
import React from 'react';
import {Link} from 'react-router-dom';


function SignUpHead(){

    return(
        <React.Fragment>
            <div className='d-flex justify-content-between align-items-center a m-2 m-lg-4 m-md-4 p-3 '>
            <Link to='/login'  style={{textDecoration:'none'}}   > 
            <span className='text-success' style={{fontSize:'1.3rem', fontWeight:'500'}}>Login</span>
            </Link>
            <Link to='/signup'  style={{textDecoration:'none'}}   > 
            <span className='text-success' style={{fontSize:'1.3rem', fontWeight:'500'}}>Sign Up</span>
            </Link>
          
            </div>
        </React.Fragment>
    )
}

export default SignUpHead;

