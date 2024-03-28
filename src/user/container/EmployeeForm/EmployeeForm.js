// EmployeeForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import EmployeeList from '../EmployeeList/EmployeeList';

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [joiningDate, setJoiningDate] = useState(initialData ? initialData.joiningDate : '');
  const [salary, setSalary] = useState(initialData ? initialData.salary : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (!name || !joiningDate || !salary) {
      alert('Please fill in all fields');
      return;
    }
    if (!/^[a-zA-Z]+$/.test(name)) {
      alert('Name must contain only characters');
      return;
    }
    if (new Date(joiningDate) > new Date() || isNaN(new Date(joiningDate))) {
      alert('Joining date must be a past or present date');
      return;
    }
    if (isNaN(salary) || salary <= 0) {
      alert('Salary must be a positive number');
      return;
    }

    onSubmit({ name, joiningDate, salary });
    setName('');
    setJoiningDate('');
    setSalary('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Date of Joining"
        type="date"
        value={joiningDate}
        onChange={(e) => setJoiningDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <br />
      <TextField
        label="Salary"
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <br />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

<EmployeeList />
export default EmployeeForm;
