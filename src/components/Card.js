import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="col-3 col-s-5 card">
      <h1 className="card__title">{data.title}</h1>
      <p className="card__description">{data.description}</p>
      <a
        className="card__link"
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="card__image" {...data.img} />
      </a>
    </div>
  );
};

export default Card;
