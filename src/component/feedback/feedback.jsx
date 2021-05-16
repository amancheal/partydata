import React from 'react';
import Profile from '../dashboard/profile';
import DashBoardNav from '../Headers/dashBoardNav';

function FeedBack(){
    return(
        <React.Fragment>
             <div className='d-flex' id='wrapper'>
        <Profile />

      <DashBoardNav />
        </div>
        </React.Fragment>
    )
}

export default FeedBack
