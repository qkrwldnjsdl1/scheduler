export function getAppointmentsForDay(state, day) {
  let appointmentArray = []
  for (let appointmentDay of state.days) {
    if (appointmentDay.name === day) {
      appointmentArray = appointmentDay.appointments
    }
  }
  if (appointmentArray.length > 0) {
    appointmentArray = appointmentArray.map((index) => {
      for (let date in state.appointments) {
        if (Number(date) === Number(index)) {
          return state.appointments[date]
        }
      }
    })
  }
  return appointmentArray;
};
export function getInterviewersForDay(state, day) {
  let appointmentArray = []
  let interviewersArray = []
  for (let appointmentDay of state.days) {
    if (appointmentDay.name === day) {
      appointmentArray = appointmentDay.appointments
    }
  }
  if (appointmentArray.length > 0) {
    appointmentArray = appointmentArray.map((index) => {
      for (let date in state.appointments) {
        if (Number(date) === Number(index)) {
          return state.appointments[date]
        }
      }
    })
  }
  for (let appointment of appointmentArray) {
    if (appointment.interview) {
      for (let interviewer in state.interviewers) {
        if (appointment.interview.interviewer === Number(interviewer)) {
          interviewersArray.push(state.interviewers[interviewer])
        }
      }
    }
  }
  return interviewersArray;
};
export function getInterviewersForDayV2(state, day) {
  let interviewerArray = []
  for (let appointmentDay of state.days) {
    if (appointmentDay.name === day) {
      interviewerArray = appointmentDay.interviewers
    }
  }
  if (interviewerArray.length > 0) {
    interviewerArray = interviewerArray.map((index) => {
      for (let interviewer in state.interviewers) {
        if (Number(interviewer) === Number(index)) {
          return state.interviewers[interviewer]
        }
      }
    })
  }
  return interviewerArray;
};
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  for (let interviewer in state.interviewers) {
    if (interview.interviewer === Number(interviewer)) {
      return ({ interviewer: state.interviewers[interviewer], student: interview.student })
    }
  }
};