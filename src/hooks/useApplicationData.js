import React, { useReducer, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

    const SET_DAY = "SET_DAY";
    const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
    const SET_INTERVIEW = "SET_INTERVIEW";

    function reducer(state, action) {
        switch (action.type) {
            case SET_DAY:
                return { ...state, day: action.day }
            case SET_APPLICATION_DATA:
                return { ...state, days: action.days, appointments: action.appointments, interviewers: action.interviewers }
            case SET_INTERVIEW: {
                const newDays = state.days.map((element) =>{
                    if (element.name === state.day) {
                        const subtract = {...element, spots: element.spots - action.days}
                        return subtract
                    }
                    return element
                })
                return ({...state, appointments: action.appointments, days: newDays});
            }
            
            default:
                throw new Error(
                    `Tried to reduce with unsupported action type: ${action.type}`
                );
        }
    }

    function bookInterview(id, interview) {
        return (axios.put(`/api/appointments/${id}`, { interview }).then(() => {
            const appointment = {
                ...state.appointments[id],
                interview: { ...interview }
            };
            const appointments = {
                ...state.appointments,
                [id]: appointment
            };
            dispatch({type: SET_INTERVIEW, appointments, days: 1})
        }))
    }
    function deleteInterview(id) {
        return (axios.delete(`/api/appointments/${id}`).then(() => {
            const appointment = {
                ...state.appointments[id],
                interview: null
            };
            const appointments = {
                ...state.appointments,
                [id]: appointment
            };
            dispatch({
                type: SET_INTERVIEW,
                appointments,
                days: -1
            });
        }))
    }

    const [state, dispatch] = useReducer(reducer, {
        day: "Monday",
        days: [],
        appointments: {},
        interviewers: {}
    })
    useEffect(() => {
        Promise.all([axios("/api/days"), axios("/api/appointments"), axios("/api/interviewers")])
          .then((all) => {
            dispatch({type: SET_APPLICATION_DATA, days: all[0].data, appointments: all[1].data, interviewers: all[2].data });
          })
      }, []);
    
    const setDay = day => dispatch({ type:SET_DAY, day });
    return {
        state,
        setDay,
        bookInterview,
        deleteInterview
      }
}