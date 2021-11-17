import React from "react";
import "./App.css";
import Controls from "./Components/Controls";
import Display from "./Components/Display";
import { UseCounter } from "./shared/Context";

function App() {
  const {state, dispatch} = UseCounter();
  return (
    <>
      <Display {...state}/>
      <Controls handler={dispatch}/>
    </>
  );
}

export default App;
