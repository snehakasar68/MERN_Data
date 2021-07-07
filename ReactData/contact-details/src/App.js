
import axios from 'axios'
 import React, { Component } from 'react'
 import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
 import AddContact from './AddContact'
import AddContactDetails from './AddContactDetails';
import uuid from 'react-uuid'
import EditContact from './EditContact';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
    this.getAllContacts()
  }
  
  getAllContacts = async () => {
            const allContacts = await this.retrieveContacts();
            console.log(allContacts);
            if (allContacts) this.setState({contacts:allContacts});
          };

  retrieveContacts =async()=>{
          let res=await axios.get("http://localhost:5001/contacts")
         return res.data;
        }
        deleteContacts=async(id)=>{
         const confirmOrnot=window.confirm("Are you sure to delete this contact..?")
         if(confirmOrnot)
          {
            let res=await axios.delete(`http://localhost:5001/contacts/${id}`)
          const newContactList = this.state.contacts.filter((contact) => {
            return contact.id !== id
          })
          this.setState({contacts:newContactList})
          }
          
        }
        addContactHandler=async(contact)=>{
          const req={
            id:uuid(),
            ...contact
          }
          let res=await axios.post("http://localhost:5001/contacts",req)
          let data= this.state.contacts.concat(res.data)
          this.setState({contacts:data})
        }
        updateContactHandler= async(contact)=>{
         let res= await axios.put(`http://localhost:5001/contacts/${contact.id}`,contact)
         const { id, name, email,mobile } = res.data;
           this.setState({
            contacts: this.state.contacts.map((contact) => {
              return contact.id === id ? { ...res.data } : contact;
      })
    });
        }
  render() {
    return (
      <div>
        <Router>
           <Switch>
             <Route path="/" exact 
            render ={(props)=>(
              <AddContact contacts={this.state.contacts} getConatctID={this.deleteContacts}/>
            )}
             ></Route>
             <Route path="/add" exact 
            render ={(props)=>(
              <AddContactDetails  {...props} addContactHandler={this.addContactHandler}/>
            )} 
             ></Route>
              <Route path="/edit" exact 
            render ={(props)=>(
              <EditContact  {...props} updateContactHandler={this.updateContactHandler}/>
            )} 
             ></Route>
           </Switch>
        </Router>
      </div> 
    )
  }
}

export default App;
