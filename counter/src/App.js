import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import StartButton from "./components/StartButton";
import StopButton from "./components/StopButton";


function App() {
  const dispatch= useDispatch()
  const state = useSelector((state)=> state.counterReducer)
  
  
  return (
    <div className="App ms-3 ms-5">
      <div className="container m-3 p-2">
        <div>
          <Counter state={state} />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <StartButton state={state} />
          </div>
          <div className="col-12 col-lg-6">
            <StopButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
