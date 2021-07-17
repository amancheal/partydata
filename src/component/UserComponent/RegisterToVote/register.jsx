
import React from 'react';
import DeskTopHeader from '../Headers/DesktopHeader';
import MobileHeader from '../Headers/DashboardHeaders';
import SideBar from '../Headers/SideBar';
import RegisterForm from './registerForm';
import Footer from "../../Headers/footer";

function Register(){
    return(
        <React.Fragment>
              <div>
         <MobileHeader />
         <DeskTopHeader />
         <div className='hero  is-hidden-mobile py-6 my-6 mx-5'>
             <div className="columns">
         <SideBar />
         <div className='column is-9 container'>
         <RegisterForm />
         </div>
         </div>
        </div>
         <Footer />
        </div>
        </React.Fragment>
    )
}

export default Register;
