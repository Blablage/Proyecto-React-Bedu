/*import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {

  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 200,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
    </div>
  );
}

/*import * as React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

  
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

export default function CustomToolbarGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
*/

import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

export default function BasicEditingGrid() {
  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }} 
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
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
    endDate: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    course: "Programacion I",
    grade: 10,
    startDate: randomCreatedDate(),
    endDate: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    course: "Cocina III",
    grade: 7,
    startDate: randomCreatedDate(),
    endDate: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    course: "Ingles II",
    grade: 8,
    startDate: randomCreatedDate(),
    endDate: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    course: "Programacion I",
    grade: 9,
    startDate: randomCreatedDate(),
    endDate: randomUpdatedDate(),
  },

];
