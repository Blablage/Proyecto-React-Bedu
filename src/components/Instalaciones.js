import React from 'react';
import Carousel from 'react-elastic-carousel';

class Instalaciones extends React.Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
    ]
  }
  render() {
    return (
      <div className="carousel">
      <Carousel breakPoints={this.breakPoints}>
        <img src="https://sutilweb.com/wp-content/uploads/2022/01/Ciencias-de-la-computacion.jpg" alt="" style={{width:'500px'}}/>
        <img src="https://vinculotic.com/wp-content/uploads/2020/07/educacion-cuantica-01-1021x580.jpg" alt="" style={{width:'500px'}}/>
        <img src="https://psicomputacion.com.mx/wp-content/uploads/2020/08/Nosotros-PSI-Computacion.png" alt="" style={{width:'500px'}}/>
      </Carousel>
      </div>
    )
  }
}

export default Instalaciones;