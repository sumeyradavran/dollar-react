import React from "react";

function Error() {
  return (
    <div className="middle flex-direction">
      <div className="errorText">
        <p className="bigText">Oops! Nothing to see Here.</p>
      </div>

      <p className="text">Please refresh the page.</p>
      <button id="refreshButton" onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  );
}

export default Error;
