// EmployeeList.js
import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <List>
      {employees.map((employee, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={employee.name}
            secondary={`Joined on: ${employee.joiningDate}, Salary: ${employee.salary}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => onDelete(index)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default EmployeeList;
