import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import MyButton from "./components/Button.jsx";

function App() {
  return (
    <div className="App">
      <h1>Main App</h1>
      <MyButton color="indigo" />
      <MyButton color="hotpink" bg="black" />
    </div>
  );
}

const rootElement = document.getElementById("root");

// ReactDOM.render( JSX expression, DOM element )
// 1st argument appended to 2nd argument
ReactDOM.render(<App />, rootElement);
