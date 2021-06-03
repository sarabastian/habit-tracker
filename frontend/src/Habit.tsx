import React from "react";
import HabitInterface from "./Habit.Interface";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@windmill/react-ui";

// interface HabitInterface {
//   id: number;
//   name: string;
//   category_id: number;
//   day_id: number;
// }

const Habit: React.FC<HabitInterface> = (props) => {
  console.log(props);
  return (
    <h1>
      {props.name}
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHeader>
        </Table>
      </TableContainer>
    </h1>
  );
};
export default Habit;
