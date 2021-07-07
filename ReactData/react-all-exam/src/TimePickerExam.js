import React, { Component } from "react";

class TimePickerExam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "",
    };
  }
  handleChange=(time)=>{
      this.setState({
          time:time
      })
  }
  render() {
    return (
        <input type="time"/>
    );
  }
}

export default TimePickerExam;
