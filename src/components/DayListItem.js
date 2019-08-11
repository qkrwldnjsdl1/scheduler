import React from "react";

import "components/DayListItem.scss";

let classnames = require('classnames');

export function dayString(spots) {
  if (spots === 0) return "no spots remaining";
  if (spots === 1) return "1 spot remaining";
  return `${spots} spots remaining`;
}

export default function DayListItem(props) {
  const ItemClass = classnames("day-list--item",{
    "day-list--item--selected": props.selected,
    "day-list--item--full": props.spots === 0
  });
    
  return (
    <div className={ItemClass} onClick={() => props.setDay &&  props.setDay(props.name)}>
      <h3>{props.name}</h3>
      <p>{dayString(props.spots)}</p>
    </div>
  );
}