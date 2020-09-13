import React from "react";
import "./TeamWork.css";
import TeamList from "./TeamList";

export default function TeamWork(props) {
  console.log(props.data);
  return (
    <section className="teamwork">
      <div>
      <img className="teamwork__image" src={props.data.image.src} alt={props.data.image.alt} /> 
      <img className="teamwork__img" src={props.data.img.src} alt={props.data.img.alt} /> 
      </div>
      <h2 className="teamwork__title">{props.data.title}</h2>
      <div className="teamwork__team-list">
        <TeamList data={props.data.description} />
      </div>
    </section>
  );
}
