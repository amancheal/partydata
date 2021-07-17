import React from 'react';
import CandidateCard from './candidateCard';
import DesktopHeader from '../UserComponent/Headers/DesktopHeader';
import MobileHeader from '../UserComponent/Headers/DashboardHeaders';
import SideBar from '../UserComponent/Headers/SideBar';
import Footer from '../Headers/footer';

function FeedBack(){

    return(
        <React.Fragment>
        <div>
         <MobileHeader />
         <DesktopHeader />
         <div className="">
         <div className='hero  is-hidden-mobile py-6 my-6 mx-5'>
             <div className="columns">
             <SideBar />
             <CandidateCard />
             </div>
         </div>
         </div>
         <Footer />
        </div>
    </React.Fragment>
    )
}


export default FeedBack
