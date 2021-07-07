import React, { Component } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import IconButton from '@material-ui/core/IconButton';
class CompanyCrud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comId: "",
      comName: "",
      add: "",
      comEmail: "",
      comDate: "",
      company: [],
      act: true,
      showModal: false,
      error: {},
    };
  }
  componentDidMount() {
    this.setState({
      company: JSON.parse(localStorage.getItem("company")),
    });
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    const { comId, comName, add, comEmail, comDate } = this.state;
    if (this.isValid()) {
      this.setState({ error: [] });
      if (this.state.act) {
        if (localStorage.getItem("company") == null) {
          let company = [];
          company.push({
            comId,
            comName,
            add,
            comEmail,
            comDate,
          });
          localStorage.setItem("company", JSON.stringify(company));
        } else {
          let temp = JSON.parse(localStorage.getItem("company"));
          temp.push({
            comId,
            comName,
            add,
            comEmail,
            comDate,
          });
          localStorage.setItem("company", JSON.stringify(temp));
        }
      } else {
        //update code
        var company = JSON.parse(localStorage.getItem("company"));
        var temp = { comId, comName, add, comEmail, comDate };
        company[this.state.index] = temp;
        localStorage.setItem("company", JSON.stringify(company));
      }
      this.setState({
          company:JSON.parse(localStorage.getItem("company"))
      })
    }
    e.preventDefault();
  };
  isValid() {
    const { comId, comName, add, comEmail, comDate, error } = this.state;
    let isValid = true;
    if (!comId) {
      isValid = false;
      error["comId"] = "*Company ID cannot be empty";
    }
    if (!comName) {
      isValid = false;
      error["comName"] = "*Company name cannot be empty";
    }
    if (!comName.match(/^[a-zA-Z]*$/)) {
      isValid = false;
      error["comName"] = "*Company Name Should contain Alphabet only";
    }
    if (!add) {
      isValid = false;
      error["add"] = "*Address cannot be empty";
    }
    if (!comEmail) {
      isValid = false;
      error["comEmail"] = "*Email-ID cannot be empty";
    }
    if (!comDate) {
      isValid = false;
      error["comDate"] = "*Please select Foundating date";
    }
    this.setState({
      error,
    });
    return isValid;
  }
  deleteHandler = (id, index) => {
    var temp = JSON.parse(localStorage.getItem("company"));
    temp.splice(index, 1);
    this.setState({
      company: temp,
    });
    localStorage.setItem("company", JSON.stringify(temp));
  };
  editHandler = (id, index) => {
    var temp = JSON.parse(localStorage.getItem("company"));
    let obj = temp.filter((ob) => {
      return ob.comId == id;
    });
    if (obj != null) {
      this.setState({
        act: false,
        index: index,
        comId: obj[0].comId,
        comName: obj[0].comName,
        add: obj[0].add,
        comEmail: obj[0].comEmail,
      });
    }
  };
  render() {
    const { comId, comName, add, comEmail, comDate, company, act, error } =
      this.state;
    return (
      <div className="container">
        <br></br>
        <form className="form-horizontal">
          <div className="form-group row">
            <label className="control-label col-4" style={{ color: "red" }}>
              <b> * All Fields are mandatory:</b>
            </label>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-3">
              <b>Company Id:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                <b>*</b>
              </sup>
            </label>
            <div className="col-8">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Company ID"
                name="comId"
                value={comId}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3"></label>
            <div className="col-3" style={{ color: "red" }}>
              {error.comId}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-3">
              <b>Company name:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                <b>*</b>
              </sup>
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Name"
                name="comName"
                value={comName}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3"></label>
            <div className="col-3" style={{ color: "red" }}>
              {error.comName}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-3">
              <b>Company Address:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                <b>*</b>
              </sup>
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Address"
                name="add"
                value={add}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3"></label>
            <div className="col-3" style={{ color: "red" }}>
              {error.add}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-3">
              <b>Company Email:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                <b>*</b>
              </sup>
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Offical Email-id"
                name="comEmail"
                value={comEmail}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3"></label>
            <div className="col-3" style={{ color: "red" }}>
              {error.comEmail}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-3">
              <b>Founding Date of Company:</b>
              <sup style={{ color: "red", fontSize: "15px" }}>
                <b>*</b>
              </sup>
            </label>
            <div className="col-3">
              <input
                type="date"
                className="form-control"
                name="comDate"
                value={comDate}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3"></label>
            <div className="col-3" style={{ color: "red" }}>
              {error.comDate}
            </div>
          </div>
          <br></br>
          <div className="form-group row">
            <label className="control-label col-3"></label>
            {act ? (
              <div className="col-3">
                <Button
                  variant="contained"
                  style={{color:"green"}}
                  startIcon={<SaveIcon />}
                  onClick={this.submitHandler}
                >
                  Save
                </Button>
              </div>
            ) : (
              <div className="col-3">
                <Button
                  variant="contained"
                  style={{color:"green"}}
                  startIcon={<SaveIcon />}
                  onClick={this.submitHandler}
                >
                  Update
                </Button>
              </div>
            )}
          </div>
        </form>
        <br></br>
        <table className="table table-striped">
          <thead>
            <th>Company ID</th>
            <th>Company Name</th>
            <th>Company Address</th>
            <th>Company Email</th>
            <th>Action</th>
          </thead>
          <tbody>
            {company != null ? (
              company.map((rows, index) => (
                <tr key={rows.comId}>
                  <td>{rows.comId}</td>
                  <td>{rows.comName}</td>
                  <td>{rows.add}</td>
                  <td>{rows.comEmail}</td>
                  <td>
                    <IconButton 
                    color="primary" onClick={() => this.editHandler(rows.comId, index)}>
                  <BorderColorIcon />
                     </IconButton>
                    <IconButton aria-label="delete"
                    style={{color:"red"}} onClick={() => this.deleteHandler(rows.comId, index)}>
                  <DeleteForeverIcon />
                     </IconButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ color: "red" }}>
                  Company details are not available..!!!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CompanyCrud;
