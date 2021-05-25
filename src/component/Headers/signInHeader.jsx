
import React from 'react';
import {Link} from 'react-router-dom';


function SignInHeader(){

    return(
        <React.Fragment>
            <div className='container'>
            <div className='d-flex justify-content-between align-items-center a m-2 m-lg-4 m-md-4 p-3 '>
            <Link to='/signUp'  style={{textDecoration:'none'}}   > <i style={{fontSize:'1.2rem', fontWeight:'bold'}} className="fa fa-chevron-left mx-1 text-success " aria-hidden="true"></i> <span className='text-success' style={{fontSize:'1rem', fontWeight:'500'}}>Sign Up</span> </Link>
            <span style={{fontSize:'1rem', fontWeight:'bold'}} >Having troubles? <Link to='help' style={{fontSize:'1rem', textDecoration:'none'}}   className='text-success' >Get help</Link> </span>
            </div>
            </div>

        </React.Fragment>
    )
}

export default SignInHeader;

