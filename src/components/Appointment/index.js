import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/header";
import Show from "components/Appointment/show";
import Empty from "components/Appointment/empty";
import Form from "components/Appointment/form";
import Status from "components/Appointment/status";
import Error from "components/Appointment/error";
import Confirm from "components/Appointment/confirm";
import useVisualMode from "hooks/useVisualMode";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const STATUS = "STATUS"
const ERROR1 = "ERROR1"
const ERROR2 = "ERROR2"
const CONFIRM = "CONFIRM"
const DELETE = "DELETE"
const EDIT = "EDIT"

// {checkInterview(props.interview)}
export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(STATUS)
    props.bookInterview(props.id, interview).then(() =>
      transition(SHOW)
    ).catch((error) => transition(ERROR1, true))
  }
  function delete_interview() {
    transition(DELETE)
    props.deleteInterview(props.id).then(() =>
      transition(EMPTY)
    ).catch((error) => transition(ERROR2, true))
  }
  return (<article className="appointment">
    <Header time={props.time}></Header>
    {mode === SHOW &&
      <Show onEdit={() => transition(EDIT)} onDelete={() => transition(CONFIRM)} student={props.interview.student} interviewer={props.interview.interviewer}></Show>
    }
    {mode === EMPTY &&
      <Empty onAdd={() => transition(CREATE)}></Empty>
    }
    {mode === CREATE &&
      <Form name="" interviewer="" onSave={(name, interviewer) => save(name, interviewer)} interviewers={props.interviewers} onCancel={() => back()}></Form>
    }
    {mode === CONFIRM &&
      <Confirm message="Are you sure you want to delete?" onCancel={() => back()} onConfirm={() => delete_interview()}></Confirm>
    }
    {mode === STATUS &&
      <Status message="Saving"></Status>
    }
    {mode === DELETE &&
      <Status message="Deleting"></Status>
    }
    {mode === EDIT &&
      <Form name={props.interview.student} interviewer={props.interview.interviewer.id} onSave={(name, interviewer) => save(name, interviewer)} interviewers={props.interviewers} onCancel={() => back()}></Form>
    }
    {mode === ERROR1 &&
      <Error onClose={() => transition(EMPTY)} message="Could not save the appointment"></Error>
    }
    {mode === ERROR2 &&
      <Error onClose={() => transition(SHOW)} message="Could not delete the appointment"></Error>
    }

  </article>)
}