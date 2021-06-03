import React from "react";
import HabitInterface from "./Habit.Interface";
// interface HabitInterface {
//   id: number;
//   name: string;
//   category_id: number;
//   day_id: number;
// }

const Habit: React.FC<HabitInterface> = (props) => {
  console.log(props);
  return <h1>{props.name}</h1>;
};
export default Habit;
