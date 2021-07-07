import React from "react";
import ViewModal from "./ViewModal";
class ViewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  changeisOpen = (value) => {
    this.setState({
      isOpen: value,
    });
  };

  obj = {
    width: "100%",
    // backgroundColor:'red',
    height: "500px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };
  btn = {
    float: "right",
    marginTop: "150px",
    marginRight: "100px",
    zIndex: 1,
    // color:'red'
  };

  render() {
    return (
      <>
        <div style={this.obj} >
          <button style={this.btn} onClick={() => this.changeisOpen(true)}>
            {" "}
            click me{" "}
          </button>

          <ViewModal
            open={this.state.isOpen}
            onClose={() => this.changeisOpen(false)}
          >
            hello i am from ModalDemo
            <br></br>
          </ViewModal>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "red",
            padding: "10px",
          }}
        >
          {" "}
          Additional content
        </div>
      </>
    );
  }
}

export default ViewUser;
