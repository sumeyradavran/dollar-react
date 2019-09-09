import React from "react";

function Loading() {
  return (
    <div className="loading">
      <div className="middle flex-direction">
        <p className="text">Please wait, we are getting data.</p>
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default Loading;
