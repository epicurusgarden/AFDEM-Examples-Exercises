import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "./styles.css";

function MyApp() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApp />, rootElement);
