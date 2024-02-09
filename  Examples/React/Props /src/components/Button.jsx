import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button style={{ color: this.props.color }}>
        Button Props:
        {this.props.color}
        {this.props.bg}
      </button>
    );
  }
}

export default Button;
