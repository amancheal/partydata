import React, {useState, useEffect} from 'react';
import imag from '../../../asset/pdp.png';
import prof from '../../../asset/noprof.svg';
import ReactRoundedImage from "react-rounded-image";
import { withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { decipherJwt } from 'decipher-jwt';
import {updateUserNav} from '../../../action/actions/userDisplay';
import {FEED_BACK_FORM, ELECTION_DASHBOARD, OVER_VIEW, VOTE, REGISTER_TO_VOTE} from '../../../action/types';

function DesktopHeader({history, whatShow, changeShow}){
const [menue, setMenue]= useState(false);
//const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m6thHZVvjapVuXDuQ75lOMGoQwec8H6tOqBGtZtxi_aBCU0XRT09j-zEToK2lxYtpac&usqp=CAU';

const bug =()=>{
    setMenue(!menue);
}
  const logout = ()=>{
      localStorage.removeItem('token');

    }
    const [username, setUsername] = useState('');
        useEffect(() => {
           let {result} = decipherJwt(localStorage.getItem('token'))
           setUsername(result.firstname);

            switch (history.location.pathname) {
                 case '/overview':
                    return changeShow(OVER_VIEW);
                case '/electionDashboard':
                    return changeShow(ELECTION_DASHBOARD);
                    case '/createfeedback':
                        return changeShow(FEED_BACK_FORM);
                        case '/evote':
                            return changeShow(VOTE);
                            case '/registerToVote':
                            return changeShow(REGISTER_TO_VOTE);
                        default:
                            return changeShow(OVER_VIEW)
            }


        }, [changeShow, history.location.pathname])

    return(
        <nav className='navbar is-fixed-top  is-fullheight  is-hidden-mobile has-shadow is-white has-background-grey-light'>
            <div className="container">
        <div className="navbar-brand">
            <span className='navbar-item mx-2'>
            <ReactRoundedImage image={imag}
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

            {
               username && username === '' ? <React.Fragment> <a style={{textDecoration:'none'}}  href="/" className='navbar-item button is-warning is-rounded my-3 mx-2'> <i className='fa fa-user mx-1 '></i> Sign-In</a>
                <a style={{textDecoration:'none'}}  href="/signUp" className='navbar-item button is-warning is-rounded my-3'> <i className='fas fa-sign-out-alt mx-1'></i> Sign Up</a> </React.Fragment>
                : <React.Fragment>
                            <span className='my-3'>
                            <ReactRoundedImage image={prof}
                               imageWidth="55"
                                imageHeight="55"
                                roundedSize="0"
                                roundedColor="white"
                                />
                            </span>
                        <div className=' my-4 mx-1' role="navigation" aria-label="dropdown navigation" >
                        <div className="navbar-item  has-dropdown is-hoverable">
                         <b className='navbar-link is-3'>{username}</b>
                             <div className="navbar-dropdown">
                                    <a style={{textDecoration:'none'}}  href="/signIn" className='navbar-item'> <i className='fa fa-user mx-1 '></i> Edit Profile</a>
                                    <a style={{textDecoration:'none'}} onClick={logout} href="/" className='navbar-item'> <i className='fa fa-user mx-1 '></i> Logout</a>
                              </div>
                        </div>
                        </div>
                     </React.Fragment>
            }



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
