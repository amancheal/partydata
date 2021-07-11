import React from 'react';
import Profile from '../dashboard/profile';
import CandidateCard from './candidateCard';
import DashBoardNav from '../Headers/dashBoardNav';


function FeedBack(){


    return(
        <React.Fragment>
           <DashBoardNav />
             <div className='d-flex' id='wrapper'>
        <Profile  />
        <CandidateCard />
        </div>
        </React.Fragment>
    )
}


export default FeedBack
