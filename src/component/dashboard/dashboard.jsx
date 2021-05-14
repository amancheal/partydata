import React from 'react';
import Cards from './cards';
import Profile from './profile';
import DashBoardNav  from '../Headers/dashBoardNav';

function DashBoard(){
    return(
        <React.Fragment>
            <div className='container'>

            <div className='row'>
               <button  className=" my-5 mx-5 d-lg-none " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" ><i class="fas fa-bars"></i>
                     </button>
                <div id="collapseExample" className=' collapse d-lg-block col-md-3 col-lg-3'>

                    <Profile  />
                </div>

                <div className='col-md-9 col-lg-9 col-xl-9 col-xxl-9'>
                <DashBoardNav />
                    <div className='jumbotron'>
                    <Cards />
                    </div>

                </div>


            </div>
            </div>
        </React.Fragment>
    )
}

export default DashBoard
