import React from 'react';
import DeskTopHeader from '../Headers/DesktopHeader';
import MobileHeader from '../Headers/DashboardHeaders';
import SideBar from '../Headers/SideBar';

function FeedBack(){
    return(
        <React.Fragment>
        <div>
         <MobileHeader />
         <DeskTopHeader />
         <div className="">
         <div className='hero  is-hidden-mobile py-6 my-6 mx-5'>
             <div className="columns">
             <SideBar />
            
             </div>
         </div>
         </div>
        </div>
    </React.Fragment>
    )
}

export default FeedBack;
