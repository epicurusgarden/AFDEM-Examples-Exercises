import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  // state = { counter: 0 } // (1) state = { ... }

  // (2) this.state
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  // Handle onMouseOver

  handleClick = () => {
    // 1)
    this.setState({ counter: this.state.counter + 1 });

    // 2) Get previous state value
    // this.setState((prevState)=>{
    //   return { counter: prevState.counter + 1 }
    // });
  };

  render() {
    let styles = {
      backgroundColor: this.props.color
    };
    return (
      <button onClick={this.handleClick} style={styles}>
        Clicked #{this.state.counter} times
      </button>
    );
  }
}

export default Counter;
