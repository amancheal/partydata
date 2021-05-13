
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './component/Auth/SignUp';
import DashBoard from './component/dashboard/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={SignUp} path="/" />
        <Route component={DashBoard} path="/dashboard" />
      </Switch>

    </Router>

  );
}

export default App;
