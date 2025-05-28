import React, { useState } from "react";
import Feedback from "./components/Feedback";

function App() {
  const [isError, setIsError] = useState(false);
  const [optSelect, setOptSelect] = useState("");
  const [hide, setHide] = useState(false);
  const [submit, setSubmit] = useState(false);

  function handleOnClick() {
    if (optSelect.length > 0) {
      setHide(true);
    } else {
      setIsError(true);
    }
  }

  return (
    <div id="main">
      <Feedback hide={hide} review={optSelect} />
      <div
        id="container"
        style={!hide ? { display: "flex" } : { display: "none" }}
      >
        <p className="h2">Feeback UI</p>
        <div id="option-container">
          <button
            id="unhappy"
            className="option"
            onClick={() => setOptSelect("Unhappy")}
          >
            ☹️<span>Unhappy</span>
          </button>
          <button
            id="neutral"
            className="option"
            onClick={() => setOptSelect("Neutral")}
          >
            😐<span>Neutral</span>
          </button>
          <button
            id="happy"
            className="option"
            onClick={() => setOptSelect("Satisfied")}
          >
            😊<span>Satisfied</span>
          </button>
        </div>
        <button id="send" className="btn" onClick={handleOnClick}>
          Send Review
        </button>
        <p
          id="error"
          style={isError ? { display: "block" } : { display: "none" }}
        >
          Please Select an option before submitting
        </p>
      </div>
    </div>
  );
}

export default App;
