import {useState} from 'react';


export default function useVisualMode(initial, newMode) {
  const [mode, setMode] = useState(initial)

  function transition (newMode) {
    setMode(newMode);
  }

  return { mode, transition };
};