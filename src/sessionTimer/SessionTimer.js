import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function SessionTimer({ session, focusDuration, breakDuration }) {
  if (session) {
    let duration;
    if (session.label === "Focusing") {
      duration = focusDuration;
    } else {
      duration = breakDuration;
    }
    const timeElapsed = duration * 60 - session.timeRemaining;
    const percentageElapsed = (timeElapsed / (duration * 60)) * 100;
    return (
      <>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session.label} for {minutesToDuration(duration)} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percentageElapsed}
                style={{ width: `${percentageElapsed}%` }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
}

export default SessionTimer;
