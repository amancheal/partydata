import React from 'react';
import {Link} from 'react-router-dom';

function Profile(){
    return (
        <React.Fragment>
            <div className='container'>
                <ul>
                    <li> <Link to='/dashboard'>Dashboard</Link> </li>
                    <li> <Link to='/allStakeHolders'>All Stake-Holders</Link> </li>
                    <li> <Link to='/manageAllStakeHolders'>Manage Stake-Holders</Link> </li>
                    <li> <Link to='/feedBack'>Feed-Back Portal</Link> </li>

                </ul>
            </div>
        </React.Fragment>
    )
}

export default Profile
