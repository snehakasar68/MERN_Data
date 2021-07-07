import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Users from './Users'

class Users1 extends Component {
    render() {
        return (
            <div>
            <h1>Select user</h1>
            <h1>{this.props.match.params.id}</h1>
            <ul>
                <li>
                <Link to="/Users1/1">Sneha</Link>
                </li>
                <li>
                <Link to="/Users1/2">Ganesh</Link>
                </li>
                <li>
                <Link to="/Users1/3">Deepak</Link>
                </li>
                <li>
                <Link to="/Users1/4">Faiz</Link>
                </li>
            </ul>
            <Route path="/Users1/:id" component={Users}></Route>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}

export default Users1
