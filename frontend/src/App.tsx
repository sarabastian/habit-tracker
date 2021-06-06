import React, { useEffect } from "react";
import "./App.css";
import Main from "./Main";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/daily_habits")
      .then((r) => r.json())
      .then((habits) => setHabits(habits));
  }, []);

  const [habits, setHabits] = React.useState([]);

  return (
    <div className="App">
      <Main dailyHabits={habits} />
    </div>
  );
}

export default App;
