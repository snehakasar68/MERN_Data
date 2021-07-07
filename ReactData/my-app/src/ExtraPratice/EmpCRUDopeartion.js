import React, { Component } from 'react'

class EmpCRUDopeartion extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          fname: "",
          lname: "",
          mobno: "",
          email: "",
          state: "",
          city: "",
          act: 0,
          index: 0,
          Emp:[]
        };
      }
    render() {
        const { fname, lname, mobno, email, state, city , Emp} = this.state;
        return (
            <div>
                <h1>Hi</h1>
            </div>
        )
    }
}

export default EmpCRUDopeartion
