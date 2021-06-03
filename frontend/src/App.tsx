import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./Main";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/habits")
      .then((r) => r.json())
      .then((habits) => setHabits(habits));
  }, []);

  const [habits, setHabits] = React.useState([]);
  console.log(habits);
  return (
    <div className="App">
      <Main habits={habits} />
    </div>
  );
}

export default App;
