import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import logo from "./JavaScript-logo.jpg";

let styles = {
  backgroundColor: "hotpink",
  border: "15px double black",
  color: "#faebd7"
};

function App() {
  return (
    <div className="App">
      <h1 style={styles}>It's perfect time to learn React</h1>
      <img src={logo} width="300" alt="" />
       <h2 style={{ borderBottom: "5px solid coral" }}>
        JavaScript and ReactJS is Magic!
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
