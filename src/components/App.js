import React from 'react';
import Menu from './Menu'
import InitialFilters from './Prueba'
import Instalaciones from './Instalaciones'
import MisionVision from './MisionVision'
import Cursos from './Cursos'
import Footer from './Footpage'

const App = () => {
   return (
      <div className='mainall'>
         <Menu/>
         <h1 className='intro'> El centro virtual de aprendizaje mas grande de Mexico </h1>
         <Instalaciones/>
         <MisionVision/>
         <h1 className='cursos' id='cursos'>Cursos disponibles</h1>
         <Cursos/>
         <Footer/>
      </div>
   );
};

export default App;
