import { useState } from "react";
export default function useVisualMode(addedMode) {
  const [mode, setMode] = useState(addedMode);
  const [history, setHistory] = useState([addedMode])
  const transition = (newMode, replace) => {
    setMode(() => {
      setHistory(prev => {
        if (replace) return prev.slice(0, -1).concat(newMode)
        return prev.concat(newMode)
      });
      return newMode
    });
  }
  const back = () => setMode(prev => {
    setHistory(prev => {
      return prev.slice(0, -1)
    })
    return history.slice(-2)[0]
  });
  return { mode, transition, back }
}