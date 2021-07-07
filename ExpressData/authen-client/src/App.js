import logo from './logo.svg';
import './App.css';

import Landing from './Components/Layout/Landing';
import { BrowserRouter as Router, Route } from "react-router-dom";
import register from './Components/Layout/register';
import Login from './Components/Layout/login';
import dashboard from './Components/Layout/dashboard';
function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={register} />
          <Route exact path="/login" component={Login} />  
          <Route exact path="/dashboard" component={dashboard} />  
    </div>
    </Router>
  );
}

export default App;
