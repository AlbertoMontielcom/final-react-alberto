import React from "react";

function Card(props) {
  return (
    <div className="box">
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
