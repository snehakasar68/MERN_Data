import logo from "./logo.svg";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Employee from "./Assignment/Assign2_no_3";
import Name from "./Assignment/Assign2_no_6";
import Op from "./Assignment/Assign2_no_7";
import StateEx from "./Assignment/Assign2_no_8";
import Counter from "./Assignment/Assign2_no_9";
import DestructureInFunctionPara from "./Component/Destructuring/DestructureInFunctionPara";
import DestructureInFunBody from "./Component/Destructuring/DestructureFunBody";
import DestructureClassCom from "./Component/Destructuring/DestructureClassCom";
import OnClickInFunction from "./Component/OnClickInFunction";
import OnClickInClass from "./Component/OnClickInClass";
import BindingInRender from "./Component/EventBindingType/BindingInRender";
import ArrowFunInRenderBinding from "./Component/EventBindingType/ArrowFunInRenderBinding";
import BindingInConstructor from "./Component/EventBindingType/BindingInConstructor";
import ClassPropertyAsArrow from "./Component/EventBindingType/ClassPropertyAsArrow";
import IfElseCondition from "./Component/Conditional_List_Render/IfElseCondition";
import ElementVariable from "./Component/Conditional_List_Render/ElementVariable";
import TernaryOperator from "./Component/Conditional_List_Render/TernaryOperator";
import ShortCircuit from "./Component/Conditional_List_Render/ShortCircuit";
import ListRendering from "./Component/Conditional_List_Render/ListRendering";
import ListRendering_1 from "./Component/Conditional_List_Render/ListRendering_1";
import NameList from "./Component/List-Key/NameList";
import IndexAsKey from "./Component/List-Key/IndexAsKey";
import StylingExam1 from "./Component/CSS_Styling/StylingExam1";
import InlineCssExam from "./Component/CSS_Styling/InlineCssExam";
import styles from "./Component/AppStyle.module.css";
import "./Component/AppStyle.css";
import FormHandling from "./Component/FormHandling";
import MultiInputHandler from "./Component/MultiInputHandler";
import LifeCycle from "./Component/ComponentLifeCycle/LifeCycle";
import LifeCycleUpdate from "./Component/ComponentLifeCycle/LifeCycleUpdate";
import LifeCycleUnmount from "./Component/ComponentLifeCycle/LifeCycleUnmount";
import FragmentExam from "./Component/Fragments/FragmentExam";
import TableExam from "./Component/Fragments/TableExam";
import ParentComp from "./Component/PureComp_Memo/ParentComp";
import RefsExample from "./Component/Refs_CallbackRef/RefsExample";
import CallBackRefsExam from "./Component/Refs_CallbackRef/CallBackRefsExam";
import FocusInputExample from "./Component/Refs_CallbackRef/FocusInputExample";
import ForwardingInputParentExam from "./Component/Refs_CallbackRef/ForwardingInputParentExam";
import PortalDemo from "./Component/PortalDemo";
import ErrorBoundaryExam from "./Component/ErrorBoundaryExam";
import HeroName from "./Component/HeroName";
import Calculator from "./ExtraPratice/Calculator";
import DynamicList from "./ExtraPratice/DynamicList";
import AddUser from "./ExtraPratice/AddUser";
import EmployeeCRUD from "./ExtraPratice/EmployeeCRUD";
import About from "./RoutingDemo/About";
import Home from "./RoutingDemo/Home";
import Services from "./RoutingDemo/Services";
import NotFound from "./RoutingDemo/NotFound";
import Users from "./RoutingDemo/Users";
import Demo from "./ExtraPratice/Demo";
import Users1 from "./RoutingDemo/Users1";
import LoginPage from "./RoutingDemo/LoginPage";
import RegistrationForm from "./RoutingDemo/RegistrationForm";
import CompanyCrud from "./ExtraPratice/CompanyCrud";
import HomePage from "./RoutingDemo/HomePage";
import HomePage1 from "./RoutingWithCRUD/HomePage";
import Register from "./RoutingWithCRUD/Register";
import EditComponent from "./RoutingWithCRUD/EditComponent";
import Home1 from './Assignment/Assign3_no10/Home'
import EmployeeCRUD1 from "./ExtraPratice/EmployeeCRUD1";
import ClickedCounter from "./Component/HOC/ClickedCounter";
import HoverCounter from "./Component/HOC/HoverCounter";
import HoverCounterWithpara from "./Component/HOC/HoverCounterWithpara";
import ClickedCounterPara from "./Component/HOC/ClickedCounterPara";
import RenderPropsCounter from "./Component/HOC/RenderPropsCounter";
import ClickedCounterRenderProps from "./Component/HOC/ClickedCounterRenderProps";
import HoverCounterRenderProps from "./Component/HOC/HoverCounterRenderProps";
import { UserProvider } from "./Component/Contexts/UserContext";
import ContextUse from "./Component/Contexts/ContextUse";
import PostLists from "./Component/HTTP/PostLists";
import Location from "./Component/HOC/Location";
import PostForm from "./Component/HTTP/PostForm";
import FetchMethod from "./Component/HTTP/FetchMethod";
import GetDataResReq from "./Component/HTTP/GetDataResReq";
import SingleUserGet from "./Component/HTTP/SingleUserGet";
import FakeStoreAPIEG from "./Component/HTTP/FakeStoreAPIEG";
import FakeStoreSingleData from "./Component/HTTP/FakeStoreSingleData";
import Hooks_Counter from "./Component/Hooks/Hooks_Counter";
import HooksCounterPrevious from "./Component/Hooks/HooksCounterPrevious";
import UseStateWithObject from "./Component/Hooks/UseStateWithObject";
import UseStateWithArray from "./Component/Hooks/UseStateWithArray";
import UseEffectWithCounter from "./Component/Hooks/UseEffectWithCounter";
import DataFetching from "./Component/Hooks/DataFetching";
import CounterUseReducer from "./Component/Hooks/CounterUseReducer";
import DataFetchingTwo from "./Component/Hooks/DataFetchingTwo";
import App1 from "./Component/Hooks/App1";
import CardExample from "./CardExample";
function App() {
  return (
    <div className="App">
      {/* <Employee id="101" name="Raj"/> 
      <Name name="Jay" heroname="Batman"/> 
      <Name name="Ansh" heroname="Superman"/> 
      <Name name="Sara" heroname="Wonder Women"/> 
      <StateEx/>
      <Counter/>
      <DestructureInFunctionPara name="Sneha"/>
      <DestructureInFunBody name="Sneha"/>
      <DestructureClassCom name="Sneha"/>
      <OnClickInFunction/>
      <OnClickInClass/>
      <BindingInRender/> 
      <ArrowFunInRenderBinding/>
      <BindingInConstructor/>
      <ClassPropertyAsArrow/>
      <IfElseCondition/>
      <ElementVariable/>
      <TernaryOperator/>
      <ShortCircuit/>
      <ListRendering/>
      <ListRendering_1/>
      <NameList/>
      <IndexAsKey/>
      <StylingExam1/>
      <InlineCssExam/>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>success</h1>
      <FormHandling/>
      <MultiInputHandler/> 
      <LifeCycle/>
      <LifeCycleUpdate/>
      <LifeCycleUnmount/>
      <FragmentExam/>
      <TableExam/>
      <ParentComp/>
      <RefsExample/> 
      <CallBackRefsExam/>
      <FocusInputExample/>
      <ForwardingInputParentExam/>
      <PortalDemo/> 
      <ErrorBoundaryExam>
        <HeroName name="Ansh"/>
      </ErrorBoundaryExam>
      <ErrorBoundaryExam>
        <HeroName name="Jay"/>
      </ErrorBoundaryExam>
      <ErrorBoundaryExam>
        <HeroName name="Sara"/> 
      </ErrorBoundaryExam>
      <Calculator/>
       <AddUser/>
      <DynamicList/>*/}
       {/* <EmployeeCRUD/> */}
       {/* <LifeCycle/> */}
       {/* <LifeCycleUpdate/> */}
      {/* <LifeCycleUnmount/> */}
      {/* <Router>
    <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Users">User</Link>
      </li>
      <li>
        <Link to="/Users1">Nested User</Link>
      </li>
      <li>
        <Link to="/Services">Services</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Users/:id" component={Users}/>
      <Route path="/Users1/" component={Users1}/>
      <Route path="/Services" component={Services}/>
      <Route component={NotFound}></Route>
      </Switch>
    </div>
     </Router> */}
     {/* <Router>
        <nav className="navbar navbar-expand-sm bg-light justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                LoginPage
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/regiter">
                Registration 
                </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/regiter" component={RegistrationForm}></Route>
        </Switch>
      </Router> */}
      {/* <LoginPage/> */}
     
      {/* <Router>
       <ul>
         <Link to='/'></Link>
         <Link to='/homepage'></Link>
       </ul>
       <Switch>
         <Route path='/' exact  component={LoginPage}></Route>
         <Route path='/homepage' component={HomePage}></Route>
         <Route path='/registration' component={RegistrationForm}></Route>
         
       </Switch>
     </Router>    */}
     {/* <Router>
       <ul>
         <Link to='/'></Link>
         <Link to='/register'></Link>
         <Link to='/editcomponent'></Link>
       </ul>
       <Switch>
         <Route exact path='/' component={HomePage1}></Route>
         <Route path='/register' component={Register}></Route>
         <Route path='/editcomponent' component={EditComponent}></Route>
       </Switch>
     </Router> */}
     {/* <Assign4_no1/>
     <Assign4_no2/>
     <Assign4_no3/> */}
     {/* <EmployeeCRUD/> */} 
     {/* <EmployeeCRUD1/> */}
     {/* <ClickedCounter/>
     <HoverCounter/>
     <HoverCounterWithpara/>
     <ClickedCounterPara/>
     <RenderPropsCounter render={(count,increment)=>
     <ClickedCounterRenderProps count={count} increment={increment}/>
     }/>
     <RenderPropsCounter render={(count,increment)=>
     <HoverCounterRenderProps count={count} increment={increment}/> 
     }/>*/}
     {/* <UserProvider value="TQPP">
      <ContextUse/>
     </UserProvider> */}
     {/* <PostLists/> */}
     {/* <Location/> */}
     {/* <PostForm/> */}
     {/* <FetchMethod/> */}
     {/* <GetDataResReq/> */}
     {/* <SingleUserGet/> */}
     {/* <FakeStoreAPIEG/> */}
     {/* <FakeStoreSingleData/> */}
     {/* <Hooks_Counter/>
     <HooksCounterPrevious/>
     <UseStateWithObject/>
     <UseStateWithArray/> */}
     {/* <UseEffectWithCounter/>
     <DataFetching/>*/}
     {/* <CounterUseReducer/>  */}
     {/* <DataFetchingTwo/> */}
     {/* <App1/> */}
     <CardExample/>
    </div>
  );
}

export default App;
