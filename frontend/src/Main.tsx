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
  const [days, setDays] = React.useState([]);

  //   useEffect(() => {
  //       fetch('')
  //   }
  //   )
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

      {habits.map((h: HabitInterface) => (
        <Habit {...h} />
      ))}
    </>
  );
};

export default Main;
