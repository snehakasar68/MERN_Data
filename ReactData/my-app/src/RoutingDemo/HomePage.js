import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import About from './About'
import Home from './Home'
import LoginPage from './LoginPage'
import Services from './Services'

class HomePage extends Component {
    render() {
        console.log("home");
        return (
            <div>
                <Router>
                    <ul>
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/about'>About us</NavLink>
                        <NavLink to='/service'>Services</NavLink>
                        <NavLink to='/'>Log Out</NavLink>
                    </ul>
                    <Switch>
                        <Route path='/home' exact component={Home}></Route>
                        <Route path='/about' exact  component={About}></Route>
                        <Route path='/' exact component={LoginPage}></Route>
                        <Route path='/service'  exact component={Services}></Route>
                        <Route path='/' exact component={LoginPage}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default HomePage
