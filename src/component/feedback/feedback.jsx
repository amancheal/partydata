import React from 'react';
import Profile from '../dashboard/profile';
import FeedBackTable from './feedbackTable';
import DashBoardNav from '../Headers/dashBoardNav';


function FeedBack(){


    return(
        <React.Fragment>
           <DashBoardNav />
             <div className='d-flex' id='wrapper'>
        <Profile  />
        <FeedBackTable />
        </div>
        </React.Fragment>
    )
}


export default FeedBack
