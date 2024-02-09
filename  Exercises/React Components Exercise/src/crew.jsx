import React, { Component } from "react";

class CrewTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Main job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie Parker</td>
            <td>Captain pilot</td>
          </tr>
          <tr>
            <td>Jose Maderas</td>
            <td>Cook & Engineer</td>
          </tr>
          <tr>
            <td>Dedree Lynn</td>
            <td>Doctor</td>
          </tr>
          <tr>
            <td>Hu Li Chu</td>
            <td>Mechanic</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CrewTable;
