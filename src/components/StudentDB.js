/*
function createData(ID, student, course, grade, startDate, endDate) {
    return { ID, student, course, grade, startDate, endDate };
  }
  
const rows = [
    createData(156, 'Gerardo Garcia', 'Programacion', 9, '11/11/2021', '26/5/2022'),
    createData(572, 'Diego Lopez', 'Cocina I', 8, '11/11/2021', '26/5/2022'),
    createData(199, 'Consuelo Macias', 'Programacion', 7, '11/11/2021', '26/5/2022'),
    createData(735, 'Guillermo Dominguez', 'Ingles II', 10, '11/11/2021', '26/5/2022'),
    createData(934, 'Cristina Mena', 'Programacion', 9, '11/11/2021', '26/5/2022'),
    createData(222, 'Jose Ramos', 'Ingles II', 9, '11/11/2021', '26/5/2022'),
    createData(456, 'Manuel Hernandez', 'Contabilidad', 8, '11/11/2021', '26/5/2022'),
    createData(321, 'Uriel Perez', 'Contabilidad', 10, '11/11/2021', '26/5/2022'),
    createData(753, 'Rebeca Uk', 'Cocina I', 8, '11/11/2021', '26/5/2022'),
    createData(432, 'Sergio Pech', 'Seguridad', 8, '11/11/2021', '26/5/2022'),
  ];
*/

import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {
  randomCreatedDate,
  randomTraderName,
} from '@mui/x-data-grid-generator';

const closeStudentsTable = () => {
  let home = document.getElementById("home");
  let studentsTable = document.getElementById("studentsTable");
  let returnButton = document.getElementById("returnButton");
  home.style.display = 'block';
  studentsTable.style.display = "none";
  returnButton.style.display = "none";
};

export default function BasicEditingGrid() {
  return (
    <Container>
      <Button id="returnButton" variant="contained" style={{ margin: "10px", display: 'none' }}onClick={closeStudentsTable}>Regresar</Button>
    <div 
      id="studentsTable" 
      style={{ height: 700, width: '100%', display: 'none', backgroundColor: "white"}}>
      
      <DataGrid
        components={{ Toolbar: GridToolbar }} 
        rows={rows}
        columns={columns}
      />
    </div>
    </Container>
  );
}

const columns = [
  { field: 'name', headerName: 'Nombre', width: 180, },
  { field: 'course', headerName: 'Materia', width: 180},
  { field: 'grade', headerName: 'Calificacion', type: 'number', width: 180},
  { field: 'startDate', headerName: 'Fecha Inicio', type: 'date', width: 180},
  { field: 'endDate', headerName: 'Fecha Fin', type: 'dateTime', width: 180},
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    course: "Ingles II",
    grade: 9,
    startDate: randomCreatedDate(),
    endDate: randomCreatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    course: "Programacion I",
    grade: 10,
    startDate: randomCreatedDate(),
    endDate: randomCreatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    course: "Cocina III",
    grade: 7,
    startDate: randomCreatedDate(),
    endDate: randomCreatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    course: "Ingles II",
    grade: 8,
    startDate: randomCreatedDate(),
    endDate: randomCreatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    course: "Programacion I",
    grade: 9,
    startDate: randomCreatedDate(),
    endDate: randomCreatedDate(),
  },

];
