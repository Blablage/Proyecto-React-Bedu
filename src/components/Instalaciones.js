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
      {/* Solucionar alineamiento de imagenes con height */}
      <Carousel breakPoints={this.breakPoints}>
        <img src={process.env.PUBLIC_URL + '/assets/instalacionesIcon1.jpg'} alt="" style={{width:'500px'}}/>
        <img src={process.env.PUBLIC_URL + '/assets/instalacionesIcon2.jpg'} alt="" style={{width:'500px'}}/>
        <img src={process.env.PUBLIC_URL + '/assets/instalacionesIcon3.png'} alt="" style={{width:'500px'}}/>
      </Carousel>
      </div>
    )
  }
}

export default Instalaciones;