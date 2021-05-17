import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { FEED_BACK_PORTAL, DASH_BOARD, MANAGE_STAKE_HOLDERS, ALL_STAKE_HOLDERS} from '../../action/types';
import {updateNav} from '../../action/actions/nav_actions'
  function Profile({getWhatToShow}){




    return (
        <React.Fragment>
           <div id="mySidenav" className="sidenav ">
                <div className='sidebar-heading text-center py-5 primary-text fs-4 fw-bold '>
                    Ope
                </div>
                <div className='list-group list-group-flush  my-3'>
                <div className='divgrop '>
                    <Link id='link' to='/dashboard'className='text-nowrap'  onClick={()=>getWhatToShow(DASH_BOARD)} > <i className="fal fa-home-lg mx-2"></i> Dashboard </Link>
                    </div>

                        <div className='admin text-secondary  px-4 py-4 disabled'> Admin Panel </div>

                        <li  className='lin '><Link id='link' className='mx-1 text-center'  to='/allStakeHolders' onClick={()=>getWhatToShow(ALL_STAKE_HOLDERS)}><i className="far fa-users mx-2"></i> All Stakeholders</Link> </li>
                           <li className='lin'> <Link id='link' className='mx-1 text-center'   to='/manageAllStakeHolders' onClick={()=>getWhatToShow(MANAGE_STAKE_HOLDERS)} > <i className="far fa-tasks mx-2"></i> Manage Stakeholders</Link> </li>
                           <li  className='lin'> <Link  id='link' className='mx-1 text-center'   to='/feedBack' onClick={()=>getWhatToShow(FEED_BACK_PORTAL)}><i className="far fa-plus mx-2"></i> Feed Back Portal</Link> </li>


                </div>
           </div>
        </React.Fragment>
    )
}

const mapDispatchToprops =(dispatch)=>{
        return {
            getWhatToShow: (val)=> dispatch(updateNav(val))
        }


}

export default connect(null, mapDispatchToprops)(Profile)
