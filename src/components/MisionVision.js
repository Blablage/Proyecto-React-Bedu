import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
}));

const Image = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export default function MisionVision() {
  return (
    <Container>
    <Box sx={{ flexGrow: 1, mt: 3}} >
      <Grid container spacing={2} alignItems="center" id="Mision">
        <Grid item xs={12} md={8}>
            <Item>
              <h2 className='monserrat-font'>Mision</h2>
              <p className='monserrat-font'>
                  Formar integralmente profesionales con conocimientos, habilidades, 
                  competencias y valores socialmente significativos, que los posicionen 
                  competitivamente en su entorno; capaces de aplicar el conocimiento y la 
                  cultura para el desarrollo humano.
              </p>
            </Item>
        </Grid>
        <Grid item xs={12} md={4}>
            <Image>
              <img
                className='imagesMisionVision'
                xs={12} md={4}
                src="https://img.freepik.com/free-vector/collection-graduating-students_1262-19749.jpg" 
                alt="Imagen Mision"
              />
            </Image>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" direction="row-reverse" sx={{ mt: 1}}>
        <Grid item xs={12} md={8}>
            <Item>
              <h2 className='monserrat-font'>Vision</h2>
              <p className='monserrat-font'>
                La visión de este centro de estudios es ser una institución líder en el mundo, reconocida 
                internacionalmente por su carácter innovador sobre la base de la investigación 
                científica y aplicada, reuniendo a los más destacados estudiantes, profesores, 
                investigadores y graduados; quienes, a través de su gestión, dirigen las acciones 
                y los cambios que nuestras organizaciones y la sociedad necesitan para crear 
                un ambiente de bienestar y equidad.
              </p>
            </Item>
        </Grid>
        <Grid item xs={12} md={4}>
            <Image>
              <img
                className='imagesMisionVision'
                xs={12} md={4}
                src="https://img.freepik.com/vector-gratis/capacitacion-linea-libros-seminarios-computadora-pantalla-cursos-desarrollo-conocimiento-usando-internet_24640-64018.jpg" 
                alt="Imagen Vision"
              />
            </Image>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}