import React from "react";

import "components/InterviewerListItem.scss";

let classnames = require('classnames');

export default function InterviewerListItem(props){
  const ListNames = classnames("interviewers__item",
  {"interviewers__item--selected": props.selected});
  const ImgNames = classnames("interviewers__item-image",
  {"interviewers__item--selected-image": props.selected});
  return(
    <li className={ListNames} onClick={props.setInterviewer}>
      <img className={ImgNames} src={props.avatar} alt={props.name}></img>
      {props.selected && props.name}
    </li>
  )
}