import React from 'react';
import Cards from './cards';
import Profile from './profile';
import DashBoardNav  from '../Headers/dashBoardNav';

function DashBoard(){
    return(
        <React.Fragment>
           <DashBoardNav />
        <div className='d-flex' id='wrapper'>
        <Profile />
        <div>

        </div>

          <div className="container px-4">
            <Cards />
            </div>


        </div>




        </React.Fragment>
    )
}

export default DashBoard
