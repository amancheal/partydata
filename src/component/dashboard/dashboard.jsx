import React, { useEffect} from 'react';
import Cards from './cards';
import { connect } from "react-redux";
import Profile from './profile';
import {withRouter} from 'react-router-dom';
import DashBoardNav  from '../Headers/dashBoardNav';
import display from '../../action/actions/display';


function DashBoard({getDisplay}){
       
    useEffect(()=>{
        getDisplay()
    }, [])

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
const mapDispatchToprops = (dispatch)=>{
    return {
        getDisplay: ()=> dispatch(display())
    }
  }

  export default connect(null, mapDispatchToprops)(withRouter(DashBoard));


