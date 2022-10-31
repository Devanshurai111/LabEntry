import "./App.css";
import React from "react";
import Circle from "./Components/Circle/Circle";
import LeftDoor from "./Components/LeftDoor/LeftDoor";
import RightDoor from "./Components/RightDoor/RightDoor";

function App() {
  function tellTime(d) {
    d = Number(d);
   const m = Math.floor((d % 3600) / 60);
   const s = Math.floor((d % 3600) % 60);

   const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
   const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return `${mDisplay + sDisplay} Remaining of 10 minutes`;
  }
  const [login, setLogin] = React.useState(false);
  const maxTime = 610;
  const password = "devanshu";
  const [time, setTime] = React.useState(maxTime);
  const [als, setAls] = React.useState(false);
  const loginCheck = (pass) => {
    if (time === 0) {
      alert("Time is over");
    } else if (pass === password) {
      setAls(true);
      setTimeout(() => {
        setLogin(true);
      }, 2500);
    } else {
      alert("Wrong Password");
    }
  };
  if (login) {
    setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        setLogin(false);
        setAls(false);
        alert("Time is over");
      }
    }, 1000);
    const logout = () => {
      setLogin(false);
      setAls(false);
    };

    return (
      <div>
        <h2>{tellTime(time)}</h2>
        <button onClick={() => logout()} className="btn">
          Exit Lab
        </button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <LeftDoor login={als} />
        <Circle Login={loginCheck} login={als} />
        <RightDoor
          text={tellTime(time)}
          maxtime={maxTime}
          time={time}
          login={als}
        />
      </div>
    );
  }
}
export default App;
