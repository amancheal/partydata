import React, {useState, useEffect} from 'react';
import '../../../asset/css/sideBar.css';
import {withRouter} from 'react-router-dom';
// import {connect} from 'react-redux';
 import {FEED_BACK_FORM, ELECTION_DASHBOARD,OVER_VIEW} from '../../../action/types';
// import userNav from '../../../action/actions/userDisplay';

function SideBar({ history}){
  const [tab, setTab] = useState('')

    useEffect(() => {
      switch(history.location.pathname){
           case '/overview':
          return setTab(OVER_VIEW);
        case '/electionDashboard':
          return setTab(ELECTION_DASHBOARD);
          case '/createfeedback':
            return setTab(FEED_BACK_FORM);
            default:
            return tab;
      }
    }, [tab, history.location.pathname])

    return(
        <React.Fragment>
                    <aside className='column is-3 my-2'>
                            <div className="menu">
                                <p className="menu-label">
                                    General
                                </p>
                                <div className='menu-list'>
                                    <a style={{fontSize:'1rem', textDecoration:'none'}} href='/overview' onClick={()=>setTab(OVER_VIEW)} className={`my-4 py-2 bar  ${tab === OVER_VIEW ? 'acti' : ''} `} > <i className='fa fa-home'></i> Overview </a>
                                    <a style={{fontSize:'1rem',  textDecoration:'none'}} href='/electionDashboard' onClick={()=>setTab(ELECTION_DASHBOARD)} className={`text-nowrap bar ${tab === ELECTION_DASHBOARD ? 'acti' : '' }`} > <i class="fas fa-vote-yea"></i> E-Voting </a>
                                </div>
                                <p class="menu-label py-3">
                                    Administration
                                </p>
                                <div className='menu-list'>
                                    <a style={{fontSize:'1rem', textDecoration:'none'}} onClick={()=> setTab(FEED_BACK_FORM)} href='/createfeedback' className={`my-4 py-2 text-nowrap bar ${tab === FEED_BACK_FORM ? 'acti' : ''}`} > <i class="fal fa-comments-alt"></i> Send Feedback </a>
                                    <a style={{fontSize:'1rem',  textDecoration:'none'}} href='/'  className='text-nowrap my-4 py-2 bar' > <i class="fas fa-tasks"></i> Manage Account </a>
                                    <a style={{fontSize:'1rem',  textDecoration:'none'}}  href='/'  className='text-nowrap my-4 py-2 bar' > <i class="fas fa-cogs"></i> Settings </a>
                                    <a style={{fontSize:'1rem',  textDecoration:'none'}}  href='/'  className='text-nowrap bar' > <i class="far fa-question-circle"></i> Help </a>
                                </div>
                            </div>
                    </aside>

        </React.Fragment>
    )
}

// const mapDispatchToProps = (dispatch) =>{
//   return {
//     getShow: (val)=>dispatch(userNav(val))
//   }
// }

// export default connect(null, mapDispatchToProps)(withRouter(SideBar));
export default withRouter(SideBar);

