import React from "react";
import ReactDOM from "react-dom";

class Box extends React.Component {
  constructor() {
    super();
    this.state = { color: "cyan" };
    console.log("Event::constructor");
  }

  componentDidMount() {
    console.log("Event::componentDidMount");
  }

  componentWillUnmount() {
    console.log("Event::componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("Event::componentDidUpdate");
  }

  click = () => {
    console.log("click()");
    // componentDidUpdate
    // this.setState({ backgroundColor: "red" });
  };

  remove = () => {};

  render() {
    console.log("Event::render");
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          display: "inline-block",
          padding: "10px 30px"
        }}
        onClick={this.click}
      >
        Box {this.props.data}
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { toggle: true };
  }
  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {this.state.toggle && <Box />}
        <br />
        <br />
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
