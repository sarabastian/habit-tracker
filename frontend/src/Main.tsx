import React from "react";
import Habit from "./Habit";

type HabitProps = {
  habits: {
    id: number;
    name: string;
    category_id: number;
    day_id: number;
  }[];
};

const Main: React.FC<HabitProps> = ({ habits }) => {
  console.log(habits);
  return (
    <>
      <h1>My Habits</h1>

      {habits.map((h) => (
        <Habit key={h.id} habit={h} />
      ))}
    </>
  );
};

export default Main;
