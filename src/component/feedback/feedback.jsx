import React from 'react';
import Profile from '../dashboard/profile';
import DashBoardNav from '../Headers/dashBoardNav';

function FeedBack(){
    return(
        <React.Fragment>
                  <div className='container'>
            <div className='row'>
                <div className='col-md-3 col-lg-3'>
                    <Profile />
                </div>
                <div className='col-md-9 col-lg-9 col-xl-9 col-xxl-9'>
                <DashBoardNav />

                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default FeedBack
