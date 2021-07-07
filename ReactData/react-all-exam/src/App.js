import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import EnquiryForm from './CRUDWithHooks/EnquiryForm';
import HomePage from './CRUDWithHooks/HomePage';
import HomePage1 from './CustomHooks/HomePage'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './CRUDWithHooks/Navbar';
import Contactus from './CRUDWithHooks/Contactus';
import EditUser from './CRUDWithHooks/EditUser';
import Employee from './SimpleCrud/Employee';
import AboutUs from './CRUDWithHooks/AboutUs';
import NotFound from './CRUDWithHooks/NotFound';
import ViewUser from './CRUDWithHooks/ViewUser';
import ViewModal from './CRUDWithHooks/ViewModal';
import TimePickerExam from './TimePickerExam';



function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    {/* <Switch>
    <Route exact path="/" component={HomePage}></Route>
    <Route exact path="/enquiry" component={EnquiryForm}></Route>
    <Route exact path="/contact" component={Contactus}></Route>
    <Route exact path="/edit/:id" component={EditUser}></Route>
    <Route exact path="/about" component={AboutUs}></Route>
    <Route exact path="/modal" component={ViewUser}></Route>
    <Route component={NotFound}></Route>
    </Switch> */}
    <TimePickerExam/>
    </Router> 
      {/* <Employee/> */}
      {/* <HomePage1/> */}
    </div>
  );
}

export default App;
