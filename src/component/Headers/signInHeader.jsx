
import React from 'react';
import {Link} from 'react-router-dom';


function SignInHeader(){

    return(
        <React.Fragment>
               <div className='container'>
            <div className=' clearfix  m-2 m-lg-4 m-md-4 p-2 '>
            <Link to='/signUp'  style={{textDecoration:'none'}}  className=' float-left d-sm-none d-lg-flex d-md-flex d-none' > <i style={{fontSize:'1.2rem', fontWeight:'bold'}} className="fa fa-chevron-left mx-1 text-success " aria-hidden="true"></i> <span className='text-success' style={{fontSize:'1rem', fontWeight:'500'}}>Sign Up</span> </Link>
            <span style={{fontSize:'1rem', fontWeight:'bold'}} className=' float-right' >Having troubles? <Link to='help' style={{fontSize:'1rem', textDecoration:'none'}}   className='text-success ' >Get help</Link> </span>
            </div>
            <div className=''>
                <img src={'./pdp.png'} style={{maxWidth:'30%'}} className='mx-auto d-block d-lg-none d-md-none  img-fluid rounded-circle'  alt={"pdp"} />
                    <p  className='pdpname d-block d-lg-none d-md-none' > <b className='pdpname'>People's Democratic Party</b></p>
         </div>
            </div>

        </React.Fragment>
    )
}

export default SignInHeader;

