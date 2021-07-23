import React from 'react';
import Profile from '../dashboard/profile';
import DashBoardNav from '../Headers/dashBoardNav';
import RegisteredVotersTable from './RegisteredVotersTable';


function RegisteredVoters(){


    return(
        <React.Fragment>
           <DashBoardNav />
             <div className='d-flex' id='wrapper'>
        <Profile  />
        <RegisteredVotersTable />
        </div>
        </React.Fragment>
    )
}


export default RegisteredVoters
