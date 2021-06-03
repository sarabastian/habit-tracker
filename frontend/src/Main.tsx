import React from "react";
import Habit from "./Habit";

interface HabitProps {
  habits: {
    id: number;
    name: string;
    category_id: number;
    day_id: number;
  }[];
}

interface HabitInterface {
  id: number;
  name: string;
  category_id: number;
  day_id: number;
}

const Main: React.FC<HabitProps> = ({ habits }) => {
  console.log(habits);
  return (
    <>
      <h1>My Habits</h1>

      {habits.map((h: HabitInterface) => (
        <Habit {...h} />
      ))}
    </>
  );
};

export default Main;
