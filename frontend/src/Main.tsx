import React from "react";
import Habit from "./Habit";
import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "@windmill/react-ui";

type HabitProps = {
  dailyHabits: {
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
  }[];
};

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

const Main = ({ dailyHabits }: HabitProps) => {
  return (
    <>
      <h1>My Habits</h1>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Habit</TableCell>
              <TableCell>Completed?</TableCell>
            </TableRow>
          </TableHeader>
        </Table>
      </TableContainer>

      {dailyHabits.map((h: HabitChild) => (
        <Habit {...h} />
      ))}
    </>
  );
};

export default Main;
