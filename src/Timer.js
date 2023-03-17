import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourString = hours === 1 ? "один час" : `${hours} часа`;
  const minuteString = minutes === 1 ? "одна минута" : `${minutes} минуты`;
  const secondString = seconds === 1 ? "одна секунда" : `${seconds} секунды`;

  const formattedTime = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    <div>
      {formattedTime}
      <br/>
      <br/>
      <span>
        {hourString}, {minuteString}, {secondString}{" "}
      </span>
    </div>
  );
}

export default Timer;
