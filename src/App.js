
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

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact component={SignUp} path="/signUp" />
           <Route component={Login} path="/" />
          <Protected path='/dashboard' component={DashBoard} />
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
