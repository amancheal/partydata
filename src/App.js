
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './component/Auth/SignUp';
import DashBoard from './component/dashboard/dashboard';
import FeedBack from './component/feedback/feedback';
import ManageStakeHolders from './component/manageStakeHolders/manageStakeHolders';
import AllStakeHolders from './component/stackholders/allStakeHolders';
import RegisteredStakeHolders from './component/stackholders/registeredStakeHolders';
import FeedBackInfo from './component/feedback/allInfo/userInfo';
import Protected from './component/Auth/protect';
import AuthContextProvider from './contexts/auth_context';


function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact component={SignUp} path="/" />
          <Protected path='/dashboard' component={DashBoard} />
          {/* <Route component={DashBoard} path="/dashboard" /> */}
          <Route component={AllStakeHolders} path="/allStakeHolders" />
          <Route component={ManageStakeHolders} path="/manageAllStakeHolders" />
          <Route component={FeedBack} path="/feedBack" />
          <Route component={FeedBackInfo} path="/feedbackinfo" />
          <Route component={RegisteredStakeHolders} path="/registeredStakeHolders" />
        </Switch>

      </Router>
    </AuthContextProvider>


  );
}
// import { import } from 'jscodeshift';



export default App;
