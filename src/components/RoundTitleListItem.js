import React from "react";
import "./RoundTitleListItem.css";

function RoundTitleListItem(props) {
  return (
    <div className="round-title-list-item">
      <p className={`round-title-list-item__title ${props.data.css}`}>
        {props.data.title}
      </p>
      <p className="round-title-list-item__description">
        {props.data.description}
      </p>
    </div>
  );
}

export default RoundTitleListItem;
