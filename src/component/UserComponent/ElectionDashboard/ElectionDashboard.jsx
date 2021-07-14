import React from 'react';
import NavBar from '../Headers/DashboardHeaders';
import SideBar from '../Headers/SideBar';
import DesktopHeader from '../Headers/DesktopHeader';
import ElectionCard from './ElectionCard';

function UserDashboard(){
    return (
        <React.Fragment>
            <div>
             <NavBar />
             <DesktopHeader />
             <div className="">
             <div className='hero  is-hidden-mobile py-6 my-6 mx-5'>
                 <div className="columns">
                 <SideBar />
                 <ElectionCard />
                 </div>
             </div>
             </div>
            </div>
        </React.Fragment>
    )
}

export default UserDashboard;
