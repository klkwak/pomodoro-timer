import React from "react";
import { minutesToDuration } from "../utils/duration";

function DurationControls({
  label,
  durationType,
  duration,
  handleAddTime,
  handleSubtractTime,
  session,
}) {
  let disabled = "";
  if (session) {
    disabled = true;
  }
  let increaseTestId, decreaseTestId;
  if (durationType === "duration-focus") {
    decreaseTestId = "decrease-focus";
    increaseTestId = "increase-focus";
  } else {
    decreaseTestId = "decrease-break";
    increaseTestId = "increase-break";
  }
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid={durationType}>
        {label} Duration: {minutesToDuration(duration)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={decreaseTestId}
          onClick={() => handleSubtractTime(durationType)}
          disabled={disabled}
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={increaseTestId}
          onClick={() => handleAddTime(durationType)}
          disabled={disabled}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default DurationControls;
