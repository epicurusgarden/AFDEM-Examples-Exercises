import React from "react";
import ReactDOM from "react-dom";
// Create Button
// Import Button
// Use inside App()
import CrewTable from "./crew";
import "./styles.css";
import TableHeader from "./tableHeader";
import TableData from "./tableData";

function App() {
  return (
    <div className="App">
      <h1>Let's import a Component to our spaceship</h1>

      <section>
        Main Crew:
        <CrewTable />
      </section>

      <section>
        Land Crew:
        <TableHeader />
        <TableData />
      </section>

      <details>
        <summary>Photo Credit:</summary>
        <p>Photo by Bill Jelen on Unsplash</p>
      </details>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
