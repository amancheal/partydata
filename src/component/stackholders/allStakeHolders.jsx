import React, {useState, useEffect} from 'react';
import Profile from '../dashboard/profile';
import DashBoardNav from '../Headers/dashBoardNav';
import StakeHoldersCard from './stakeHoldersCard';
import axios from 'axios';
function AllStakeHolders(props){


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
