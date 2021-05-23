import React from 'react';
import Profile from '../dashboard/profile';
import DashBoardNav from '../Headers/dashBoardNav';
import StakeHoldersCard from './stakeHoldersCard';

function AllStakeHolders(){


    return(
        <React.Fragment>
            <DashBoardNav />
         <div className='d-flex' id='wrapper'>
        <Profile />
        <StakeHoldersCard  />

        </div>
        </React.Fragment>
    )
}

export default  AllStakeHolders
