
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './component/Auth/SignUp';
//import Dadsboard from './component/dashboard/dashboard';

function App() {
  return (
    <Router>

        <SignUp />

    </Router>

  );
}

export default App;
