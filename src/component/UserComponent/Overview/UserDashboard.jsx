import React from 'react';
import DashboardCard from './DashboardCard';
import DesktopHeader from '../Headers/DesktopHeader';
import MobileHeader from '../Headers/DashboardHeaders';
import SideBar from '../Headers/SideBar';
import Footer from "../../Headers/footer";

function Overview(){

    return(
        <React.Fragment>
        <div>
         <MobileHeader />
         <DesktopHeader />
         <div className="">
         <div className='hero  is-hidden-mobile py-6 my-6 mx-5'>
             <div className="columns">
             <SideBar />
             <div className='column is-9 container'>
             <DashboardCard />
             </div>
             </div>
         </div>
         </div>
          <Footer />
        </div>
    </React.Fragment>
    )
}


export default Overview;
