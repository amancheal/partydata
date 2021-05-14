import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { FEED_BACK_PORTAL, DASH_BOARD, MANAGE_STAKE_HOLDERS, ALL_STAKE_HOLDERS} from '../../action/types';
import {updateNav} from '../../action/actions/nav_actions'
function Profile({getWhatToShow}){
    return (
        <React.Fragment>
            <div >
                <ul className='list-group '>
                    <div className='divgrop '>
                    <i className="fa fa-home"></i> <Link id='link' to='/dashboard'className=''  onClick={()=>getWhatToShow(DASH_BOARD)} > Dashboard</Link>
                    </div>
                    <div className=''>
                        <div className='admin text-secondary py-4 disabled'> Admin Panel </div>
                    </div>
                        <div className='round' >

                            <li  className='lin'> <Link id='link'  to='/allStakeHolders' onClick={()=>getWhatToShow(ALL_STAKE_HOLDERS)}> <i className='fal fa-user mx-1'></i> All Stake-Holders</Link> </li>
                           <li className='lin'> <Link id='link'    to='/manageAllStakeHolders' onClick={()=>getWhatToShow(MANAGE_STAKE_HOLDERS)} > <i class="far fa-plus mx-1"></i> Manage Stake-Holders</Link> </li>
                           <li  className='lin'> <Link  id='link'   to='/feedBack' onClick={()=>getWhatToShow(FEED_BACK_PORTAL)}><i class="far fa-plus mx-1"></i> Feed-Back Portal</Link> </li>

                        </div>

                </ul>
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
