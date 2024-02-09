import React from "react";
import "./App.css";
import Box from "./Box";
import sp from "../space-invaders.jpeg";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <section className="header">
          <img src={sp} width="150px" alt="Space Invaders" />
          <h1 className="title">Space Invaders</h1>
          <p className="intro">
            Space Invaders is an arcade game created by{" "}
            <b>Tomohiro Nishikado</b> and released in 1978. It was manufactured
            and sold by <b>Taito</b> in Japan, and licensed in the United States
            by the Midway division of Bally. Space Invaders is one of the
            earliest shooting games; the aim is to defeat waves of aliens with a
            laser to earn as many points as possible.
          </p>
        </section>
        <Box
          img="https://www.phaser.io/content/news/2017/11/hobo-digital-space-invaders.png"
          color="coral"
          textColor="white"
        />
        <Box color="darkblue" textColor="white">
          Space Invaders is an arcade game created by <b>Tomohiro Nishikado</b>{" "}
          and released in 1978. It was manufactured and sold by <b>Taito</b> in
          Japan, and licensed in the United States by the Midway division of
          Bally. Space Invaders is one of the earliest shooting games; the aim
          is to defeat waves of aliens with a laser to earn as many points as
          possible.
        </Box>
      </div>
    );
  }
}

export default App;
