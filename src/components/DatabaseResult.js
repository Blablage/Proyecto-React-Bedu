import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

/*Comienza
import { queryData } from "./startDatabase"
import { buildFilteredTable } from "./searchResults"

//Variable que captura los estudiantes y sus datos de la base de datos
let studentsArray = [];
queryData.forEach((student) =>  studentsArray.push(student.data()));

let searchValue = document.getElementById("searchBox");
let optionValue = document.getElementById("searchOptions");
let searchButton = document.getElementById("searchButton");
//let searchMain = document.getElementById("searchMain");


//Obtiene los datos de la base de datos
const results = () => {

  let table = document.getElementById('databaseTable');
  table.innerHTML = '';

  const studentsFiltered = studentsArray.filter(elem => {

    //Se crea una expresion regular en base a Searchbox
    let searchboxER = new RegExp (searchValue.value, 'i')

    return (
      //elem[`${optionValue.value}`] === searchValue.value
      //Por cada elemento de la base de datos, busca el dato segun la opcion de busqueda elegida
      //Si coincide con la expresion regular los agrega a la tabla filtrada
      searchboxER.test(elem[`${optionValue.value}`]) === true
    )
  })
  buildFilteredTable(studentsFiltered);
}

//Compara y filtra los datos ingresados segun el parámetro de busqueda elegido
searchButton.addEventListener("click", results);
/*searchMain.addEventListener("submit", (e) => {
  e.preventDefault();
  results();
});*/
//Termina

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));
  
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

export default function DatabaseResult() {
    return (
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component="th" scope="row" align="left">{row.ID}</StyledTableCell>
              <StyledTableCell>{row.student}</StyledTableCell>
              <StyledTableCell>{row.course}</StyledTableCell>
              <StyledTableCell>{row.grade}</StyledTableCell>
              <StyledTableCell>{row.startDate}</StyledTableCell>
              <StyledTableCell>{row.endDate}</StyledTableCell> 
            </StyledTableRow>
          ))}
        </TableBody>
    )
}