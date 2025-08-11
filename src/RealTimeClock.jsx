import { useEffect } from "react";
import { useState } from "react";

export default function () {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [format24Hour, setFormat24Hour] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !format24Hour,
    };
    return date.toLocaleTimeString([], options);
  };

  // Update document title with current time
  useEffect(() => {
    document.title = `Clock - ${formatTime(time)}`;

    // Cleanup: Reset title when component unmounts
    return () => {
      document.title = "React App";
    };
  }, [time, format24Hour]);

  const formatDate = (date) => {
    return date.toLocaleTimeString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="clock-container">
      <div className="date">{formatDate(time)}</div>
      <div className="time">{formatTime(time)}</div>

      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <label>
          <input
            type="checkbox"
            checked={format24Hour}
            onChange={(e) => setFormat24Hour(e.target.checked)}
          />
          24-hour format
        </label>
      </div>

      <div>Clock is {isRunning ? "running" : "paused"}</div>
    </div>
  );
}
