
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import SignUp from './component/Auth/SignUp';
import DashBoard from './component/dashboard/dashboard';
import FeedBack from './component/feedback/feedback';
import ManageStakeHolders from './component/manageStakeHolders/manageStakeHolders';
import AllStakeHolders from './component/stackholders/allStakeHolders';
import RegisteredStakeHolders from './component/stackholders/registeredStakeHolders';
import FeedBackInfo from './component/feedback/allInfo/userInfo';
import Protected from './component/Auth/protect';
import {checkAuth} from './action/actions/nav_actions'

function App({getCheck, checker}) {


      useEffect(()=>{
              getCheck()
      }, [])

  return (
    <Router>
      <Switch>
        <Route exact component={SignUp} path="/" />
        <Protected pa='/dashboard' component={DashBoard} isAuth={checker}  />
        {/* <Route component={DashBoard} path="/dashboard" /> */}
        <Route component={AllStakeHolders} path="/allStakeHolders" />
        <Route component={ManageStakeHolders} path="/manageAllStakeHolders" />
        <Route component={FeedBack} path="/feedBack" />
        <Route component={FeedBackInfo} path="/feedbackinfo" />
        <Route component={RegisteredStakeHolders} path="/registeredStakeHolders" />
      </Switch>

    </Router>

  );
}
// import { import } from 'jscodeshift';

const mapStateToProps = state =>{
  return{
    checker: state.auth
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getCheck: ()=> dispatch(checkAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
