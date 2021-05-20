import React, {useState, useEffect} from 'react';
import Cards from './cards';
import { connect } from "react-redux";
import Profile from './profile';
import DashBoardNav  from '../Headers/dashBoardNav';
import display from '../../action/actions/display';

function DashBoard(props){

    useEffect(()=>{
        props.getDisplay()
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

  export default connect(null, mapDispatchToprops)(DashBoard);

