import React, {useState, useEffect} from 'react';
import image from '../../../asset/pdp.png';
import ReactRoundedImage from "react-rounded-image";
import { withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import {updateUserNav} from '../../../action/actions/userDisplay';
import {FEED_BACK_FORM, ELECTION_DASHBOARD, OVER_VIEW, VOTE} from '../../../action/types';

function DesktopHeader({history, whatShow, changeShow}){
const [menue, setMenue]= useState(false);
const bug =()=>{
    setMenue(!menue);
}
        useEffect(() => {
            switch (history.location.pathname) {
                case '/electionDashboard':
                    return changeShow(ELECTION_DASHBOARD);
                    case '/createfeedback':
                        return changeShow(FEED_BACK_FORM);
                        case '/evote':
                            return changeShow(VOTE);
                        default:
                            return changeShow(OVER_VIEW)
            }
        }, [changeShow, history.location.pathname])

    return(
        <nav className='navbar is-fixed-top  is-fullheight  is-hidden-mobile has-shadow is-white has-background-grey-light'>
            <div className="container">
        <div className="navbar-brand">
            <span className='navbar-item'>
            <ReactRoundedImage image={image}
                               imageWidth="48"
                                imageHeight="48"
                                roundedSize="9"
                                roundedColor="white"
                                />
            </span>
            <span style={{textDecoration:'none'}}  className='navbar-item '>{whatShow} </span>
            <button  className='navbar-burger' data-target='navMenu' onClick={bug} >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
        </div>

        <div id='navMenu' className={`navbar-menu is-white has-shadow ${menue === true ? "is-active": ""}`} >
        <div className="navbar-end">

        <a style={{textDecoration:'none'}}  href="/signIn" className='navbar-item button is-warning is-rounded my-4 mx-2'> <i className='fa fa-user mx-1 '></i> Sign-In</a>
        <a style={{textDecoration:'none'}}  href="/signOut" className='navbar-item button is-warning is-rounded my-4'> <i className='fas fa-sign-out-alt mx-1'></i> Logout</a>

        </div>
        </div>
            </div>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeShow: (val)=>dispatch(updateUserNav(val))
    }
}
const mapStateToProps = (state) =>{
    return {
        whatShow: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter( DesktopHeader));
