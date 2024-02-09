import React from "react";

function Box(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        border: "2px solid gray",
        padding: "10px",
        marginTop: "10px",
        color: props.textColor
      }}
    >
      Box: {props.color}
      <br />
      <img src={props.img} width="200px" alt="" />
      <p>{props.children}</p>
    </div>
  );
}

export default Box;
