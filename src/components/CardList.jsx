import React from "react";
import Card from "./Card";
import data from "../assets/data";

function CardList() {
  return (
    <div className="card-container">
      {data.map((card) => (
        <Card key={card.id} image={card.image} title={card.title} description={card.description} />
      ))}
    </div>
  );
}


export default CardList;
