import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EmployeeCRUD from './ExtraPratice/EmployeeCRUD';
import RegistrationForm from './RoutingDemo/RegistrationForm';
// import First from './Component/First';
// import Second from './Component/Second';
// import Third from './Component/Third';
// import Student from './Component/Student';
// import ClassProps from './Component/ClassProps'
const routing=(
  <Router>
    <div>
    <ul>
      <li>
        <Link to="/">Add User</Link>
      </li>
      <li>
        <Link to="/RegistrationForm">Registration Form</Link>
      </li>
      <li>
        <Link to="/EmployeeCRUD">Employee</Link>
      </li>
    </ul>
      <Route path="/" component={App}/>
      <Route path="/RegistrationForm" component={RegistrationForm}/>
      <Route path="/EmployeeCRUD" component={EmployeeCRUD}/>
    </div>
  </Router>
)
ReactDOM.render(
 
        <App/>
  
        ,
  document.getElementById('root')
);
{/* <First/> */}
    {/* <Second/> */}
    {/* <Third name="TQPP"/> */}
    {/* <Student/> */}
    {/* <ClassProps name="Sneha"/> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
