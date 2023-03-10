import React from "react";

function Translation({ doStuff, setInput, result }) {
  return (
    <div>
      <textarea
        className="text-area"
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <br />
      <button className="action-btn" onClick={doStuff}>
        DO YOU STUFF!
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""} </h3>
    </div>
  );
}

export default Translation;
