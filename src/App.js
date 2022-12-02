import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState();
  useEffect(() => {
    setInterval(digitalClock, 1000);
  }, []);

  const digitalClock = () => {
    let date = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let currentDay = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let getDay = date.getDay();
    let day = days[getDay];

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timing = "AM";

    if (hour > 12) {
      hour -= 12;
      timing = "PM";
    }
    if (hour == 12) timing = "PM";
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    if (currentDay < 10) currentDay = "0" + currentDay;
    if (month < 10) month = "0" + month;

    let result = `${currentDay}/${month}/${year} ${day} ${hour}:${min}:${sec} ${timing}`;
    setDate(result);
  };

  return (
    <div className="App">
      <h1>{date}</h1>
    </div>
  );
}
