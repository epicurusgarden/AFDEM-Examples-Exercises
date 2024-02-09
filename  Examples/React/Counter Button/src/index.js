import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <Counter color="coral" />
        <Counter color="olive" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
