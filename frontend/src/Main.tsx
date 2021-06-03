import React from "react";
import Habit from "./Habit";
import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "@windmill/react-ui";

interface HabitProps {
  daily_habits: {
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
}

interface HabitInterface {
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
}

const Main: React.FC<HabitProps> = ({ daily_habits }) => {
  const [days, setDays] = React.useState([]);

  //   useEffect(() => {
  //       fetch('')
  //   }
  //   )

  console.log(daily_habits);
  return (
    <>
      <h1>My Habits</h1>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Habit</TableCell>
              <TableCell>Monday</TableCell>
            </TableRow>
          </TableHeader>
        </Table>
      </TableContainer>

      {daily_habits.map((h: HabitInterface) => (
        <Habit {...h} />
      ))}
    </>
  );
};

export default Main;
