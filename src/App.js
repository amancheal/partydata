
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './component/Auth/SignUp';
import DashBoard from './component/dashboard/dashboard';
import FeedBack from './component/feedback/feedback';
import ManageStakeHolders from './component/manageStakeHolders/manageStakeHolders';
import AllStakeHolders from './component/stackholders/allStakeHolders';
import RegisteredStakeHolders from './component/stackholders/registeredStakeHolders';
 //newlogin
import FeedBackInfo from './component/feedback/allInfo/userInfo';
import Protected from './component/Auth/protect';
import AuthContextProvider from './contexts/auth_context';
import Login from './component/Auth/login';
import Evoting from './component/E-Voting/vote';
// Users Routes
import ElectionDashBoard from './component/UserComponent/ElectionDashboard/ElectionDashboard';
import FeedbackForm from './component/UserComponent/Feedback/Feedbackform';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route  component={SignUp} path="/signUp" />
           <Route exact component={Login} path="/" />
           <Route component={Evoting} path='/evote' />
           <Route component={ElectionDashBoard} path='/electionDashboard' />
           <Route component={FeedbackForm} path='/createfeedback' />
          <Route path='/dashboard' component={DashBoard} />
          <Protected component={AllStakeHolders} path="/allStakeHolders" />
          <Protected component={ManageStakeHolders} path="/manageAllStakeHolders" />
          <Protected component={FeedBack} path="/feedBack" />
          <Protected component={FeedBackInfo} path="/feedbackinfo" />
          <Protected component={RegisteredStakeHolders} path="/registeredStakeHolders" />
        </Switch>

      </Router>
    </AuthContextProvider>



  );
}
// import { import } from 'jscodeshift';



export default App;
