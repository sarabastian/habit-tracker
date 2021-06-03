import React from "react";
import HabitInterface from "./Habit.Interface";
import {
  TableContainer,
  Table,
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
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>{props.name}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </h1>
  );
};
export default Habit;
