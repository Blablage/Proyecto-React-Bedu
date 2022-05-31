import React from 'react';
import Menu from './Menu'
import Instalaciones from './Instalaciones'
import MisionVision from './MisionVision'
import Cursos from './Cursos'
import Footer from './Footpage'
import StudentsDB from './StudentDB'

const App = () => {
   return (
      <div className='mainall'>
         <Menu/>
         <div id="home">
            <h1 className='intro'> El centro virtual de aprendizaje mas grande de Mexico </h1>
            <Instalaciones/>
            <MisionVision/>
            <h1 className='cursos' id='courses'>Cursos disponibles</h1>
            <Cursos/>
         </div>
            <StudentsDB/>
         <Footer/>
      </div>
   );
};

export default App;
