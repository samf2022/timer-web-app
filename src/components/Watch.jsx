import React, { useState, useRef } from "react";

const Watch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [message, setMessage] = useState("Play");

  const intervalId = useRef(0);

  let buttonClicked = false;
  let result = null;
  const timerScreen = document.querySelector(".screen");
  const button = document.querySelector(".class-1");

  const funcTest = () => {
    setMessage(
      (prevMessage) => (prevMessage = prevMessage === "Play" ? "Pause" : "Play")
    );
    console.log(message);
    if (message == "Play") {
      intervalId.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      //   testFunction();
      //   result = setInterval(testFunction, 100);
      //   buttonClicked = true;
      //   button.textContent = "Pause";
    } else {
      clearInterval(intervalId.current);
    }
  };

  //   const testFunction = () => {
  //     if (seconds == 59) {
  //       minutes++;
  //       seconds = 0;
  //     } else if (minutes == 59) {
  //       hours++;
  //       minutes = 0;
  //     } else if (hours == 24) {
  //       hours = 0;
  //     }
  //   };

  return (
    <div>
      <div className="container">
        <div className="wrapper-box">
          <div className="screen">{`${hours}:${minutes}:${seconds}`}</div>
          <div className="button-container">
            <button onClick={funcTest} className="class-1">
              {message}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
