
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './component/Auth/SignUp';
import DashBoard from './component/dashboard/dashboard';
import FeedBack from './component/feedback/feedback';
import ManageStakeHolders from './component/manageStakeHolders/manageStakeHolders';
import AllStakeHolders from './component/stackholders/allStakeHolders';
import RegisteredStakeHolders from './component/stackholders/registeredStakeHolders';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={SignUp} path="/" />
        <Route component={DashBoard} path="/dashboard" />
        <Route component={AllStakeHolders} path="/allStakeHolders" />
        <Route component={ManageStakeHolders} path="/manageAllStakeHolders" />
        <Route component={FeedBack} path="/feedBack" />
        <Route component={RegisteredStakeHolders} path="/registeredStakeHolders" />
      </Switch>

    </Router>

  );
}
// import { import } from 'jscodeshift';

export default App;
