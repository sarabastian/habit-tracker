import React from "react";
// import HabitInterface from "./Habit.Interface";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@windmill/react-ui";

type HabitChild = {
  id: number;
  day: {
    created_at?: string;
    date: string;
    id: number;
    updated_at?: string;
  };
  habit: {
    created_at?: string;
    id: number;
    name: string;
    updated_at?: string;
  };
  completed: boolean;
};

const Habit = (props: HabitChild) => {
  return (
    <h1>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow className="grid grid-cols-2">
              <TableCell className="">{props.habit.name}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </h1>
  );
};
export default Habit;
