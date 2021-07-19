import React, {useState} from 'react';
import image from '../../../asset/pdp.png';
import ReactRoundedImage from "react-rounded-image";
import {Link} from 'react-router-dom';


function NavBarMenu(){
const [menue, setMenue]= useState(false)

const bug =()=>{
    setMenue(!menue);

}

    return(
        <nav className='navbar is-fixed-top is-hidden-desktop is-hidden-tablet has-shadow is-white has-background-grey-light'>
            <div className="">
        <div className="navbar-brand">
        <span className='navbar-item'>
            <ReactRoundedImage image={image}
                               imageWidth="48"
                                imageHeight="48"
                                roundedSize="9"
                                roundedColor="white"
                                />
                 <b  className='navbar-item '>People's Democratic Party</b>
            </span>

            <button  className='navbar-burger mx-1 mt-2' data-target='navMenu' onClick={bug} >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
        </div>

        <div id='navMenu' className={`navbar-menu  ${menue === true ? "is-active": ""}`} >
        <div className="navbar-end">
        <Link style={{textDecoration:'none'}}  to="/news" className='navbar-item '>DashBoard</Link>
        <a style={{textDecoration:'none'}}  href="/signIn" className='navbar-item '> <i className='fa fa-user mx-1 '></i> Sign-In</a>
        <a style={{textDecoration:'none'}}  href="/signOut" className='navbar-item '> <i className='fas fa-sign-out-alt mx-1'></i> Logout</a>
        <a style={{listStyleType: 'none', textDecoration:'none'}} href="/signIn" className=' navbar-item ' > <i className='fa fa-home'></i> DashBoard </a>
        <a style={{listStyleType: 'none', textDecoration:'none'}} href="/signIn" className='navbar-item ' > <i className="fas fa-vote-yea"></i> Register to Vote </a>
        <a style={{fontSize:'1rem', textDecoration:'none'}} href='/' className=' text-nowrap navbar-item ' > <i className="fal fa-comments-alt"></i> Send Feedback </a>
        <a style={{fontSize:'1rem',  textDecoration:'none'}} href='/'  className='text-nowrap navbar-item ' > <i className="fas fa-tasks"></i> Manage Account </a>
        <a style={{fontSize:'1rem',  textDecoration:'none'}} href='/'  className=' navbar-item' > <i className="fas fa-cogs"></i> Settings </a>
         <a style={{fontSize:'1rem',  textDecoration:'none'}} href='/'  className='navbar-item' > <i className="far fa-question-circle"></i> Help </a>
        </div>
        </div>
            </div>
        </nav>
    )
}

export default NavBarMenu;
