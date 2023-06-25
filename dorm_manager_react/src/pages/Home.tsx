import React, { useEffect, useState } from 'react';
// import { getStudents } from '../services/api';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

interface Student {
  id: number;
  name: string;
  birthdate: string;
  gender: string;
  country: string;
  phone: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  floor: number;
  roomNumber: number;
  cost: number;
  // добавьте другие поля, если они есть
}

const Home: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
    //   const response = await getStudents();
    //   setStudents(response.data);
    } catch (error) {
      console.error('Failed to load students', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Student Dormitory
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Birthdate</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Check In Date</TableCell>
              <TableCell align="right">Check Out Date</TableCell>
              <TableCell align="right">Floor</TableCell>
              <TableCell align="right">Room Number</TableCell>
              <TableCell align="right">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell align="right">{student.birthdate}</TableCell>
                <TableCell align="right">{student.gender}</TableCell>
                <TableCell align="right">{student.country}</TableCell>
                <TableCell align="right">{student.phone}</TableCell>
                <TableCell align="right">{student.email}</TableCell>
                <TableCell align="right">{student.checkInDate}</TableCell>
                <TableCell align="right">{student.checkOutDate}</TableCell>
                <TableCell align="right">{student.floor}</TableCell>
                <TableCell align="right">{student.roomNumber}</TableCell>
                <TableCell align="right">{student.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;