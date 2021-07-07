import React, { Component } from 'react'
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom';

class AddContact extends Component {
    render() {
        const {contacts,getConatctID}=this.props
        return (
            <div className="container">
        <label></label>
        <br></br>
        <div className="3">
        <Link to="/add">
        <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add Contact
          </Button>
        </Link>
          
        </div>
        <br></br>
        <table className="table table-striped">
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {contacts?(
              contacts.map((rows, index) => (
                <tr key={rows.id}>
                  <td>{rows.name}</td>
                  <td>{rows.email}</td>
                  <td>{rows.mobile}</td>
                  <td>
                  <Link to={{ pathname: `/edit`, state: { contact: rows } }}>
                  <IconButton
                      color="primary"
                     
                    >
                      <EditIcon />
                    </IconButton>
                  </Link>
                    
                    <IconButton
                      aria-label="delete"
                      style={{ color: "red" }}
                      onClick={() => getConatctID(rows.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colspan="5" style={{color:"red"}}>Users Details not available...!!!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        )
    }
}

export default AddContact
