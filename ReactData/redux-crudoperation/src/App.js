import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
//import store from './SimpleExam/CakeStore';
import CakeContainer from './SimpleExam/CakeContainer';
import Container from './ToDoList/ToDoContainer/Container';
import store from './store';
import AsyncContainer from './AsyncAction/Container/AsyncContainer';
import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import EditContainer from './ToDoList/ToDoContainer/EditContainer';
import EmpContainer from './CRUD/EmployeeContainer/EmpContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Switch>
        <Route path='/' exact component={Container}></Route>
        <Route path='/edit/:id' exact component={EditContainer}></Route>
      </Switch>
      </Router>
      {/* <EmpContainer/> */}
      </Provider>
     {/* <AsyncContainer/> */} 
    </div>
  );
}

export default App;
